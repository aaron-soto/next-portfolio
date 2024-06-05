import AboutSection from "@/components/sections/About-section";
import ExperienceSection from "@/components/sections/Experience-section";
import HeroSection from "@/components/sections/Hero-section";
import SkillsSection from "@/components/sections/Skills-section";
import ProjectsSection from "@/components/sections/Projects-section";
import QuoteSection from "@/components/sections/Quote-section";
import SpotifyNowPlaying from "@/components/Spotify-Now-Playing";
import ContactSection from "@/components/sections/Contact-section";

export default function Home() {
  return (
    <div className="w-full">
      <main className="relative">
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <ExperienceSection />

        <ProjectsSection />

        <QuoteSection />

        {/* <SpotifyNowPlaying /> */}

        <ContactSection />
      </main>
    </div>
  );
}
