import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';
import { Mail, ArrowRight } from 'lucide-react';
import natureValley from '@/assets/nature-valley.jpg';

export const BreakSection = () => {
  return (
    <section id="slowcation" className="relative min-h-screen bg-gradient-nature">
      <Navigation showOnScroll={true} />
      
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url(${natureValley})`
        }}
      />
      
      {/* Dashed connecting lines - following the journey */}
      <svg className="absolute inset-0 w-full h-full z-5" xmlns="http://www.w3.org/2000/svg">
        {/* Welcome badge to You got mail */}
        <path d="M900,650 Q300,400 200,120" stroke="white" strokeWidth="2" fill="none" strokeDasharray="8,8" opacity="0.8"/>
        {/* You got mail to Take that break */}
        <path d="M200,120 Q300,350 450,620" stroke="white" strokeWidth="2" fill="none" strokeDasharray="8,8" opacity="0.8"/>
        {/* Take that break to Travel the world */}
        <path d="M450,620 Q300,300 400,180" stroke="white" strokeWidth="2" fill="none" strokeDasharray="8,8" opacity="0.8"/>
        {/* Travel the world to Cycle to nowhere */}
        <path d="M400,180 Q250,400 200,600" stroke="white" strokeWidth="2" fill="none" strokeDasharray="8,8" opacity="0.8"/>
        {/* Cycle to nowhere to Play that song */}
        <path d="M200,600 Q500,450 800,550" stroke="white" strokeWidth="2" fill="none" strokeDasharray="8,8" opacity="0.8"/>
        {/* Play that song to You have beautiful life (connecting to main content) */}
        <path d="M800,550 Q700,450 600,400" stroke="white" strokeWidth="2" fill="none" strokeDasharray="8,8" opacity="0.8"/>
      </svg>

      {/* Illustrated Elements - positioned absolutely for creative layout */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-primary">
          <div className="transform -rotate-12 bg-secondary/80 p-3 rounded-lg shadow-float">
            <p className="text-sm font-handwritten">You've got mail ✉️</p>
            <p className="text-xs">And it says</p>
          </div>
        </div>

        <div className="absolute top-32 right-20 text-primary">
          <div className="bg-white/90 p-4 rounded-full shadow-nature">
            <span className="text-2xl">🎯</span>
            <p className="text-xs mt-1">The Bare Necessities</p>
          </div>
        </div>

        <div className="absolute top-40 left-1/4 text-secondary">
          <div className="transform rotate-6 bg-primary/10 p-2 rounded-lg">
            <p className="text-sm">Travel the world 🌍</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Time to take
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            a break
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
            Discover the "the sweetness of doing nothing"
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            GET INVITE
          </Button>
        </div>

        {/* More Decorative Elements */}
        <div className="absolute bottom-40 left-16">
          <div className="bg-accent/90 p-3 rounded-lg shadow-float transform -rotate-6">
            <p className="text-sm text-primary">🚴‍♀️ cycle to nowhere</p>
          </div>
        </div>

        <div className="absolute bottom-32 right-16">
          <div className="bg-white/90 p-3 rounded-lg shadow-nature">
            <span className="text-2xl">📻</span>
            <p className="text-xs">play that song</p>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/3">
          <div className="bg-secondary/80 p-2 rounded-lg transform rotate-3">
            <p className="text-sm text-primary">Take that break 🧘‍♂️</p>
          </div>
        </div>


        {/* Welcome Badge */}
        <div className="absolute bottom-16 right-8">
          <div className="bg-primary text-white p-4 rounded-lg shadow-nature">
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider">Welcome to</p>
              <p className="font-bold">The Bare Necessities</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};