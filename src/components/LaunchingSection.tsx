export const LaunchingSection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <span className="text-3xl mr-4">💬</span>
            <h2 className="text-4xl md:text-5xl font-bold">SLOWCATION</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Launching Text with Holographic Effect */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-primary-glow via-secondary to-primary bg-clip-text text-transparent">
                Launching
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary-glow to-primary bg-clip-text text-transparent">
                soon
              </span>
              
              {/* Holographic Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary/30 rounded-full blur-sm animate-pulse" />
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-primary-glow/40 rounded-full blur-sm animate-ping" />
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