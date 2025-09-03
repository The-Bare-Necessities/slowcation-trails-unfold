export const LaunchingSection = () => {
  return (
    <section id="launching" className="py-20 bg-black text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        {/* Header with chat bubble */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <span className="text-3xl mr-4">💬</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider">SLOWCATION</h2>
          </div>
        </div>

        {/* Main Layout - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Launching Soon with 3D Cube */}
          <div className="relative">
            {/* 3D Glass Cube */}
            <div className="relative mb-12 flex justify-center lg:justify-start">
              <div className="w-32 h-32 relative preserve-3d animate-spin-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/30 rounded-lg transform-gpu"
                     style={{ transform: 'rotateY(0deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg transform-gpu"
                     style={{ transform: 'rotateY(90deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg transform-gpu"
                     style={{ transform: 'rotateY(180deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg transform-gpu"
                     style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-lg transform-gpu"
                     style={{ transform: 'rotateX(90deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg transform-gpu"
                     style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-center lg:text-left">
              Launching<br />soon
            </h1>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12 text-left">
            {/* Description */}
            <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed text-justify">
              <p>
                It's not here yet, but we'll let you in on a secret. It's coming really, really soon. So sit tight and check back in on July 31.
              </p>
              <p>
                You just might see something that will blow your socks off!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-white/80 text-justify">
              <p className="font-semibold text-xl">Really excited to get in touch with us?</p>
              <p className="text-lg">Send us an email at hello@reallygreatsite.com.</p>
              <p className="text-lg">Or follow us at @reallygreatsite on Facebook and Instagram</p>
              <p className="text-base">for updates and news.</p>
            </div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-pink-500/20 rounded-full blur-lg animate-pulse delay-500" />
      </div>
    </section>
  );
};