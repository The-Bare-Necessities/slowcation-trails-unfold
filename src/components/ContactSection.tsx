import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto">
            Ready for your slowcation? Let's start planning your perfect retreat from the everyday rush.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/90 rounded-3xl p-8 shadow-nature">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="Enter your first name"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Enter your last name"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">
                  What type of slowcation interests you?
                </label>
                <select className="w-full p-3 border border-primary/20 rounded-md focus:border-primary focus:outline-none">
                  <option>Mountain Retreat</option>
                  <option>Beach Escape</option>
                  <option>Forest Sanctuary</option>
                  <option>Cultural Immersion</option>
                  <option>Digital Detox</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">
                  Tell us more about your ideal slowcation
                </label>
                <Textarea 
                  placeholder="Describe what you're looking for in your perfect slow travel experience..."
                  rows={4}
                  className="border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="hero" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/90 rounded-3xl p-8 shadow-nature">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground">hello@slowcation.com</p>
                    <p className="text-muted-foreground">bookings@slowcation.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-primary/60">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Location</h4>
                    <p className="text-muted-foreground">Curating experiences worldwide</p>
                    <p className="text-sm text-primary/60">From mountains to beaches</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary/5 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Why Slowcation?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-primary">Curated experiences, not tourist traps</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-primary">Small groups for authentic connections</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-primary">Focus on mindfulness and well-being</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-primary">Sustainable and responsible travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};