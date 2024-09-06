import { HeroSection } from "~/components/hero-section";
import { ProjectsSectionRu } from "~/components/projects-section-ru";
import { WhyChooseMe } from "~/components/why-choose-me";

export default function HomePage() {
  return (
    <main className="snap-y scroll-smooth">
      <HeroSection />
      <WhyChooseMe />
      <ProjectsSectionRu />
    </main>
  );
}
