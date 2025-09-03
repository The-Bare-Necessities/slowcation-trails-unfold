import { Instagram, Facebook, Twitter, Youtube, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Bare Necessities</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Discover the art of slow living through curated travel experiences. 
              We believe that the best journeys happen when you take time to truly connect 
              with the world around you.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/slowcation" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-bounce" />
              </a>
              <a 
                href="https://facebook.com/slowcation" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-bounce" />
              </a>
              <a 
                href="https://twitter.com/slowcation" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-bounce" />
              </a>
              <a 
                href="https://youtube.com/slowcation" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-bounce" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#story" className="text-white/70 hover:text-white transition-smooth">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#slowcation" className="text-white/70 hover:text-white transition-smooth">
                  Slowcation Experiences
                </a>
              </li>
              <li>
                <a href="#founders" className="text-white/70 hover:text-white transition-smooth">
                  Meet the Founders
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-smooth">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-white/70">hello@slowcation.com</span>
              </div>
              <div className="text-white/70">
                <p>Follow us for travel inspiration,</p>
                <p>mindfulness tips, and updates</p>
                <p>on our latest retreats.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="text-white/70 mb-4">
              Get notified about new slowcation experiences and mindful travel tips.
            </p>
            <div className="flex space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary hover:bg-primary-glow rounded-lg transition-smooth font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/70 text-sm">
            © 2024 Bare Necessities. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-1 text-white/70 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for slow travelers</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-white/70 hover:text-white transition-smooth">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/70 hover:text-white transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};