import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';

export const GetInviteSection = () => {
  return (
    <section id="get-invite" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            GET YOUR INVITE
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Be the first to experience slowcation. Join our exclusive waitlist and get early access to mindful travel experiences.
          </p>
        </div>

        {/* Invite Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-nature">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Join the Waitlist
                </h3>
                <p className="text-primary/70">
                  Get notified when we launch and receive exclusive early bird offers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white border-primary/20 focus:border-primary"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white border-primary/20 focus:border-primary"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white border-primary/20 focus:border-primary"
                />
                <Button className="w-full group" size="lg">
                  Get My Invite
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-primary/60">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-bold text-primary mb-2">Early Access</h4>
            <p className="text-primary/70 text-sm">Be among the first to book exclusive slowcation experiences</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-bold text-primary mb-2">Special Pricing</h4>
            <p className="text-primary/70 text-sm">Exclusive discounts and early bird pricing on all packages</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h4 className="font-bold text-primary mb-2">VIP Updates</h4>
            <p className="text-primary/70 text-sm">Get insider updates on new destinations and experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};