import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FoundersSection = () => {
  return (
    <section id="founders" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            MEET THE FOUNDERS
          </h2>
          <p className="text-xl text-muted-foreground">
            The minds behind your next slowcation experience
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Shreya */}
          <div className="bg-gradient-nature rounded-3xl p-8 shadow-nature">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">SHREYA</h3>
              <p className="text-primary/70 mb-6">CEO (CHIEF EVERYTHING OFFICER)</p>
              
              {/* Video Placeholder */}
              <div className="relative bg-primary-glow/20 rounded-2xl aspect-video mb-6 overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/30 to-primary/30">
                  <div className="w-full h-full opacity-20 animate-pulse" />
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce shadow-soft">
                    <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Clouds */}
                <div className="absolute top-4 left-4 w-12 h-8 bg-white/60 rounded-full"></div>
                <div className="absolute top-6 left-8 w-8 h-6 bg-white/40 rounded-full"></div>
                <div className="absolute top-3 right-6 w-10 h-6 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Kaustav */}
          <div className="bg-gradient-nature rounded-3xl p-8 shadow-nature">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">KAUSTAV</h3>
              <p className="text-primary/70 mb-6">CFO (CHIEF FUN OFFICER)</p>
              
              {/* Video Placeholder */}
              <div className="relative bg-primary-glow/20 rounded-2xl aspect-video mb-6 overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30">
                  <div className="w-full h-full opacity-20 animate-pulse" />
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce shadow-soft">
                    <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Clouds */}
                <div className="absolute top-4 left-4 w-12 h-8 bg-white/60 rounded-full"></div>
                <div className="absolute top-6 left-8 w-8 h-6 bg-white/40 rounded-full"></div>
                <div className="absolute top-3 right-6 w-10 h-6 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="bg-secondary/20 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-primary font-handwritten text-lg">
              📱 shares are appreciated!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};