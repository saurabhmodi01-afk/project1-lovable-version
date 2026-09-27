# Implementation plan

## Changes
- Add the five uploaded images to the site: Multiverse on the main banner and one character image for each event.
- Redesign each event panel around its artwork, with Thor using lightning blue and Spider-Man using a venom-black treatment.
- Change “Hours of Action” from 24 to 48.
- Make team name required and add five required member rows, each collecting a name and gender.
- Require at least one member marked female before submission, with clear inline feedback.
- Store the five-member roster with each registration and enforce the same team rules in Lovable Cloud so they cannot be bypassed.

## Validation
- Check desktop and mobile layouts, all four event selectors, form errors, and a successful registration submission.

## Technical details
- Add a structured team-members field to registrations and a validation trigger for exactly five named members, valid gender choices, a non-empty team name, and at least one female member.
- Preserve the existing insert-only privacy policy for registration data.
