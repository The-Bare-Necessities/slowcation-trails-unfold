import { HeroSection } from '@/components/HeroSection';
import { VideoSection } from '@/components/VideoSection';
import { LaunchingSection } from '@/components/LaunchingSection';

import { StorySection } from '@/components/StorySection';
import { FoundersSection } from '@/components/FoundersSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <LaunchingSection />
      
      <StorySection />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
