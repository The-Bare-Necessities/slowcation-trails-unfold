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

        {/* Main Content - Centered */}
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Launching Soon with decorative elements */}
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-bold mb-12 leading-tight">
              Launching<br />soon
            </h1>
            
            {/* Decorative geometric shapes */}
            <div className="absolute top-0 right-0 w-16 h-16 border-2 border-blue-400/40 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400/40 to-pink-400/40 transform rotate-45 animate-pulse delay-500"></div>
            <div className="absolute top-1/2 right-1/4 w-10 h-10 border-2 border-pink-400/40 transform rotate-45 animate-pulse delay-1000"></div>
          </div>

          {/* Description */}
          <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            <p>
              It's not here yet, but we'll let you in on a secret. It's coming really, really soon. So sit tight and check back in on July 31.
            </p>
            <p>
              You just might see something that will blow your socks off!
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-white/80 max-w-2xl mx-auto">
            <p className="font-semibold text-xl">Really excited to get in touch with us?</p>
            <p className="text-lg">Send us an email at hello@reallygreatsite.com.</p>
            <p className="text-lg">Or follow us at @reallygreatsite on Facebook and Instagram</p>
            <p className="text-base">for updates and news.</p>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-pink-500/20 rounded-full blur-lg animate-pulse delay-500" />
      </div>
    </section>
  );
};