import { MountainScene3D } from './MountainScene3D';
import { FloatingCompass3D } from './FloatingCompass3D';

export const LaunchingSection = () => {
  return (
    <section id="launching" className="py-20 bg-gradient-to-b from-secondary via-secondary/90 to-primary text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Header with enhanced design */}
        <div className="text-center mb-20 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl rounded-full" />
              <span className="text-4xl mr-4 relative z-10 drop-shadow-lg">💬</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent animate-pulse">SLOWCATION</h2>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Where nature meets adventure. Your journey to discover the world's hidden gems begins here.
          </p>
        </div>

        {/* Main Layout - Enhanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto mb-20">
          {/* Left Column - Mountain Scene */}
          <div className="relative flex flex-col items-center justify-center space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl group-hover:blur-2xl transition-all duration-500 rounded-full" />
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <MountainScene3D />
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white/90">Your Adventure Awaits</h3>
              <p className="text-white/70 text-lg max-w-md mx-auto">
                Experience breathtaking landscapes and reconnect with nature
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12 text-left">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-white to-secondary rounded-full" />
              <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed pl-8">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  It's not here yet, but we'll let you in on a secret. Something extraordinary is taking shape in the heart of nature.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-primary font-semibold">July 31</span> marks the beginning of a new journey. A platform where wanderers find their path and nature reveals its secrets.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  Prepare for an experience that will redefine how you explore the world.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-colors duration-300">
              <p className="font-semibold text-2xl mb-6 text-secondary">Connect With Us</p>
              <div className="space-y-4 text-white/80">
                <p className="flex items-center space-x-3 hover:text-white transition-colors">
                  <span className="text-2xl">✉️</span>
                  <span className="text-lg">hello@reallygreatsite.com</span>
                </p>
                <p className="flex items-center space-x-3 hover:text-white transition-colors">
                  <span className="text-2xl">📱</span>
                  <span className="text-lg">@reallygreatsite on Facebook & Instagram</span>
                </p>
                <p className="text-sm text-white/60 mt-4">
                  Stay updated on our journey and be the first to explore when we launch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Piece - Launching Soon with Compass */}
        <div className="relative py-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-8">
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-white/5 leading-none select-none">
                Launching
              </h1>
            </div>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl group-hover:blur-2xl transition-all duration-500 rounded-full" />
              <div className="relative transform hover:scale-110 transition-transform duration-500">
                <FloatingCompass3D />
              </div>
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
                Soon
              </h2>
              <p className="text-2xl md:text-3xl text-white/70 font-light tracking-wide">
                Your compass to extraordinary journeys
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/50 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Preparing for launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
          <div className="text-center space-y-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl">🏔️</div>
            <h3 className="text-xl font-semibold text-primary">Explore</h3>
            <p className="text-white/70 text-sm">Discover hidden trails and breathtaking vistas</p>
          </div>
          <div className="text-center space-y-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl">🧭</div>
            <h3 className="text-xl font-semibold text-secondary">Navigate</h3>
            <p className="text-white/70 text-sm">Find your path with curated adventures</p>
          </div>
          <div className="text-center space-y-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl">🌍</div>
            <h3 className="text-xl font-semibold text-primary">Connect</h3>
            <p className="text-white/70 text-sm">Join a community of passionate travelers</p>
          </div>
        </div>
      </div>
    </section>
  );
};