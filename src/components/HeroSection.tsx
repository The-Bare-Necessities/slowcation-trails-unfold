import { Button } from '@/components/ui/button';
import heroMountain from '@/assets/hero-mountain.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${heroMountain})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">
            Are you
          </h1>
          
          <div className="relative">
            <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none">
              OOO?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mt-4">
              (out-of-office)
            </p>
          </div>
          
          <div className="mt-12">
            <blockquote className="border-l-4 border-white pl-6 text-xl md:text-2xl font-light italic">
              Experience a slow-cation with us
            </blockquote>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};