import { Button } from '@/components/ui/button';
import heroMountain from '@/assets/hero-mountain.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 text-white max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col h-screen justify-center">
          {/* Left aligned content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">
              Are you
            </h1>
            
            <div className="relative inline-block">
              <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none">
                OOO?
              </h2>
              <p className="text-lg md:text-xl text-white/70 absolute left-1/2 transform -translate-x-1/2 mt-2">
                (out-of-office)
              </p>
            </div>
          </div>
          
          {/* Right aligned quote with box */}
          <div className="mt-20 flex justify-end">
            <div className="relative">
              <div className="relative border border-white/30 p-6 inline-block">
                <div className="absolute -top-2 -left-2 text-2xl text-white">"</div>
                <div className="absolute -bottom-2 -right-2 text-2xl text-white">"</div>
                <span className="text-xl md:text-2xl font-light italic">Experience a slow</span>
              </div>
              <span className="text-xl md:text-2xl font-light italic ml-2">-cation with us</span>
            </div>
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