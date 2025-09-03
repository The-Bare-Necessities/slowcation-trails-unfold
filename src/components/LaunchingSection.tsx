export const LaunchingSection = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Header with lines */}
        <div className="mb-12 relative">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-white/30 mr-6"></div>
            <span className="text-3xl mr-4">💬</span>
            <h2 className="text-4xl md:text-5xl font-bold">SLOWCATION</h2>
            <div className="flex-1 h-px bg-white/30 ml-6"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto relative">
          {/* Launching Text with Holographic Effect */}
          <div className="mb-12 relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
              <span className="text-white relative">
                Launching
                {/* Holographic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 bg-clip-text text-transparent mix-blend-screen animate-pulse"></div>
              </span>
              <br />
              <span className="text-white relative">
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
          <div className="mt-16 space-y-4 text-white/80">
            <p className="font-semibold">Really excited to get in touch with us?</p>
            <p>Send us an email at hello@reallygreatsite.com.</p>
            <p>Or follow us at @reallygreatsite on Facebook and Instagram</p>
            <p className="text-sm">for updates and news.</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};