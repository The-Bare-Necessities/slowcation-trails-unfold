export const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <span className="text-3xl mr-4">💬</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">OUR STORY</h2>
            <div className="ml-8 text-right">
              <p className="text-primary font-handwritten transform rotate-6">
                This art of
              </p>
              <p className="text-2xl font-bold text-primary">SLOW LIVING</p>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* WHY? */}
          <div className="bg-white/90 p-8 rounded-2xl shadow-nature transform hover:scale-105 transition-bounce">
            <div className="mb-6">
              <div className="w-24 h-24 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="text-4xl">💻</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">WHY?</h3>
            <p className="text-muted-foreground">
              The origin of the concept
            </p>
            <div className="mt-6 text-sm text-primary">
              In our fast-paced world, we've forgotten the art of slowing down. 
              We believe in creating spaces where time moves differently.
            </div>
          </div>

          {/* WHAT? */}
          <div className="bg-white/90 p-8 rounded-2xl shadow-nature transform hover:scale-105 transition-bounce">
            <div className="mb-6">
              <div className="w-24 h-24 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="text-4xl">💡</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">WHAT?</h3>
            <p className="text-muted-foreground">
              What is "The Bare Necessities"
            </p>
            <div className="mt-6 text-sm text-primary">
              Curated experiences that strip away the unnecessary and focus on 
              what truly matters - connection, nature, and mindful living.
            </div>
          </div>

          {/* WHO? */}
          <div className="bg-white/90 p-8 rounded-2xl shadow-nature transform hover:scale-105 transition-bounce">
            <div className="mb-6">
              <div className="w-24 h-24 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="text-4xl">🧘‍♂️</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">WHO?</h3>
            <p className="text-muted-foreground">
              Who should embark on the next slowcation
            </p>
            <div className="mt-6 text-sm text-primary">
              Anyone seeking to reconnect with themselves, escape the digital 
              overwhelm, and rediscover life's simple pleasures.
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <p className="text-2xl text-primary font-light italic">
            "Sometimes the most productive thing you can do is relax."
          </p>
        </div>
      </div>
    </section>
  );
};