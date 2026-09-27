import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const title = "Assemble For The Multiverse — GeeksforGeeks Bennett University";
const description =
  "A Marvel-themed tech fest by the GeeksforGeeks Student Chapter, Bennett University. Assemble your team and join the multiverse of innovation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-marvel-ink text-marvel-bone">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Schedule />
        <Prizes />
        <Sponsors />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
