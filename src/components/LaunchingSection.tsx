export const LaunchingSection = () => {
  return (
    <section id="launching" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header with lines */}
        <div className="mb-12 relative text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-white/30 mr-6"></div>
            <span className="text-3xl mr-4">💬</span>
            <h2 className="text-4xl md:text-5xl font-bold">SLOWCATION</h2>
            <div className="flex-1 h-px bg-white/30 ml-6"></div>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Launching Soon with 3D Cube */}
          <div className="relative">
            {/* 3D Glass Cube */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0">
              <div className="relative w-32 h-32 mx-auto lg:mx-0">
                <div className="absolute inset-0 transform-gpu animate-[spin_4s_linear_infinite] preserve-3d">
                  {/* Front face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-white/30 backdrop-blur-sm shadow-2xl transform translateZ-16"></div>
                  {/* Back face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-white/30 backdrop-blur-sm shadow-2xl transform rotateY-180 translateZ-16"></div>
                  {/* Right face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-blue-400/20 border border-white/30 backdrop-blur-sm shadow-2xl transform rotateY-90 translateZ-16"></div>
                  {/* Left face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-white/30 backdrop-blur-sm shadow-2xl transform rotateY--90 translateZ-16"></div>
                  {/* Top face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-white/30 backdrop-blur-sm shadow-2xl transform rotateX-90 translateZ-16"></div>
                  {/* Bottom face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-blue-400/20 border border-white/30 backdrop-blur-sm shadow-2xl transform rotateX--90 translateZ-16"></div>
                </div>
              </div>
            </div>

            {/* Launching Text with Holographic Effect */}
            <div className="mt-16 lg:mt-0 text-center lg:text-left">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
                <span className="text-white relative block">
                  Launching
                  {/* Holographic overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 bg-clip-text text-transparent mix-blend-screen animate-pulse"></div>
                </span>
                <span className="text-white relative block">
                  soon
                  {/* Holographic overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-blue-500/30 to-purple-500/30 bg-clip-text text-transparent mix-blend-screen animate-pulse delay-500"></div>
                </span>
                
                {/* Geometric holographic elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-blue-400/40 rotate-45 animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 border-2 border-purple-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-0 right-1/4 w-8 h-8 bg-gradient-to-r from-pink-400/40 to-blue-400/40 transform rotate-45 animate-pulse delay-1000"></div>
              </h1>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Description */}
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                It's not here yet, but we'll let you in on a secret. It's coming really, really soon. So sit tight and check back in on July 31.
              </p>
              <p>
                You just might see something that will blow your socks off!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-white/80">
              <p className="font-semibold">Really excited to get in touch with us?</p>
              <p>Send us an email at hello@reallygreatsite.com.</p>
              <p>Or follow us at @reallygreatsite on Facebook and Instagram</p>
              <p className="text-sm">for updates and news.</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};