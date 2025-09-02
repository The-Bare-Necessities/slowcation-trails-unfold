import { Play, SkipForward, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import natureValley from '@/assets/nature-valley.jpg';

export const VideoSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${natureValley})`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-6 h-screen flex items-center justify-center">
        {/* Video Controls UI - Moved to bottom center */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Play className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Pause className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <SkipForward className="w-6 h-6" />
          </Button>
        </div>

        {/* Skip Button */}
        <div className="absolute bottom-8 left-8">
          <Button variant="ghost" className="text-white hover:bg-white/20 border border-white/30">
            SKIP →
          </Button>
        </div>
      </div>
    </section>
  );
};