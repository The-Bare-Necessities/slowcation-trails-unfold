import { HeroSection } from '@/components/HeroSection';
import { VideoSection } from '@/components/VideoSection';
import { BreakSection } from '@/components/BreakSection';
import { StorySection } from '@/components/StorySection';
import { FoundersSection } from '@/components/FoundersSection';
import { LaunchingSection } from '@/components/LaunchingSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <BreakSection />
      <StorySection />
      <FoundersSection />
      <LaunchingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
