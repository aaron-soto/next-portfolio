import AboutSection from '@/components/sections/About-section';
import ContactSection from '@/components/sections/Contact-section';
import ExperienceSection from '@/components/sections/Experience-section';
import HeroSection from '@/components/sections/Hero-section';
import ProjectsSection from '@/components/sections/Projects-section';
import QuoteSection from '@/components/sections/Quote-section';
import SkillsSection from '@/components/sections/Skills-section';
import SpotifyNowPlaying from '@/components/Spotify-Now-Playing';
import SpotifyRecentTracks from '@/components/SpotifyRecentTracks';

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

        <div className="my-24 container">
          <div className="mb-4">
            <h3 className="font-medium text-lg">Spotify Api Live data</h3>
            <p className="text-muted-foreground text-sm">
              (Refresh the page to see if I am still listening!)
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-4">
            <div className="relative flex border-2 border-white/20 bg-black/40 rounded-[6px] w-full md:w-[400px] h-[200px] md:h-[400px] overflow-hidden">
              <SpotifyNowPlaying />
            </div>
            <div className="relative border-2 border-white/20flex bg-black/40 rounded-[6px] w-full md:w-[400px] h-[300px] md:h-[400px] overflow-y-scroll">
              <SpotifyRecentTracks />
            </div>
          </div>
        </div>

        <ContactSection />
      </main>
    </div>
  );
}
