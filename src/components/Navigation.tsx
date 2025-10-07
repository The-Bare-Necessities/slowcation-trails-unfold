import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  showOnScroll?: boolean;
}

export const Navigation = ({ showOnScroll = false }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShow = showOnScroll ? isScrolled : true;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShow
          ? 'transform translate-y-0 bg-white/90 backdrop-blur-md shadow-soft'
          : 'transform -translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/favicon.png" alt="Bare Necessities" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">Bare Necessities</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('story')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('launching')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Slowcation
            </button>
            <button
              onClick={() => scrollToSection('founders')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Meet the Founders
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact Us
            </button>
          </div>

          <Button className="bg-secondary hover:bg-secondary/90 text-white" size="sm">
            Get Invited
          </Button>
        </div>
      </div>
    </nav>
  );
};