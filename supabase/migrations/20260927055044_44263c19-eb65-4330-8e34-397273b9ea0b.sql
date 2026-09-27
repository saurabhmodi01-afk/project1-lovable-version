ALTER TABLE public.event_registrations
  ADD COLUMN team_members jsonb;

UPDATE public.event_registrations
SET team_name = COALESCE(NULLIF(btrim(team_name), ''), 'Legacy registration'),
    team_members = jsonb_build_array(
      jsonb_build_object('name', name, 'gender', 'female'),
      jsonb_build_object('name', 'Legacy member 2', 'gender', 'male'),
      jsonb_build_object('name', 'Legacy member 3', 'gender', 'male'),
      jsonb_build_object('name', 'Legacy member 4', 'gender', 'male'),
      jsonb_build_object('name', 'Legacy member 5', 'gender', 'male')
    )
WHERE team_members IS NULL;

ALTER TABLE public.event_registrations
  ALTER COLUMN team_name SET NOT NULL,
  ALTER COLUMN team_members SET NOT NULL;

CREATE OR REPLACE FUNCTION public.validate_event_registration_team()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  member jsonb;
  female_count integer := 0;
BEGIN
  NEW.team_name := btrim(NEW.team_name);
  IF NEW.team_name = '' THEN
    RAISE EXCEPTION 'Team name is required';
  END IF;

  IF jsonb_typeof(NEW.team_members) <> 'array' OR jsonb_array_length(NEW.team_members) <> 5 THEN
    RAISE EXCEPTION 'A team must contain exactly five members';
  END IF;

  FOR member IN SELECT value FROM jsonb_array_elements(NEW.team_members)
  LOOP
    IF jsonb_typeof(member) <> 'object'
       OR btrim(COALESCE(member->>'name', '')) = ''
       OR COALESCE(member->>'gender', '') NOT IN ('female', 'male', 'other') THEN
      RAISE EXCEPTION 'Each team member must have a name and valid gender';
    END IF;
    IF member->>'gender' = 'female' THEN
      female_count := female_count + 1;
    END IF;
  END LOOP;

  IF female_count < 1 THEN
    RAISE EXCEPTION 'Every team must include at least one female member';
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_event_registration_team_before_write
BEFORE INSERT OR UPDATE ON public.event_registrations
FOR EACH ROW
EXECUTE FUNCTION public.validate_event_registration_team();