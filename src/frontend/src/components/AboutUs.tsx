import { Star, Users, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-6">
              <Users className="w-3.5 h-3.5 text-brand-blue-light" />
              <span className="text-brand-blue-light text-xs font-bold tracking-widest uppercase">Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Built From Passion,
              <br />
              <span className="text-gradient-pink">Driven by Dreams.</span>
            </h2>

            <div className="space-y-4 text-brand-gray leading-relaxed">
              <p className="text-base md:text-lg">
                LA Street Shine was born from the grit and determination of two cousins who refused to let tough times stop their dream. We started with broken equipment, barely enough money to get going, and a burning passion for working on cool cars.
              </p>
              <p className="text-base md:text-lg">
                We drove around with tools that needed fixing — but we never took them to the shop because we couldn't afford it. We pushed through, kept working, and kept grinding. Our parents believed in us when we barely believed in ourselves — helping us find our first clients, supplying products, and fueling our dream.
              </p>
              <p className="text-base md:text-lg">
                Today, that same hustle and heart goes into every single detail we perform. We don't just clean cars — we restore pride, protect investments, and deliver results that speak for themselves.
              </p>
            </div>

            <div className="mt-8 p-5 rounded-lg border border-brand-pink/30 bg-brand-pink/5">
              <p className="text-brand-pink-light font-bold text-lg italic text-center tracking-wide">
                "Perfection in Every Reflection."
              </p>
            </div>
          </div>

          {/* Right: Values cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Star className="w-6 h-6" />,
                title: 'Precision Craftsmanship',
                desc: 'Every inch of your vehicle receives meticulous attention. No shortcuts, no compromises.',
                color: 'blue',
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Passion for Cars',
                desc: 'We love what we do. That passion shows in every swirl-free finish and spotless interior.',
                color: 'pink',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Family-Founded',
                desc: 'Two cousins, one dream. Built from the ground up with family values at the core.',
                color: 'blue',
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: 'Customer First',
                desc: 'Your satisfaction is our reputation. We don\'t leave until you\'re 100% happy.',
                color: 'pink',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`p-5 rounded-lg glass-card hover:border-brand-${item.color}/40 transition-all duration-300 group`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    item.color === 'blue'
                      ? 'bg-brand-blue/20 text-brand-blue-light'
                      : 'bg-brand-pink/20 text-brand-pink-light'
                  } group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-brand-gray text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}
