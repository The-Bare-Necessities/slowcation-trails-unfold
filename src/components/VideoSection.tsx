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
      <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-sm md:text-base uppercase tracking-wider mb-4">
            Similar video of us will be in this page. We can make slides, each slide showcasing what we stand for or what we offer
          </p>
          
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 text-lg underline">
              <span>Link to the video - Need similar video</span>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Video Controls UI */}
        <div className="flex items-center justify-center space-x-4 mb-8">
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

        {/* Bottom Controls */}
        <div className="absolute bottom-8 right-8 flex items-center space-x-4">
          <div className="text-sm">
            Power button to swipe through slides
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
              <Play className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
              <div className="w-4 h-4 border-2 border-current rounded-full" />
            </Button>
          </div>
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