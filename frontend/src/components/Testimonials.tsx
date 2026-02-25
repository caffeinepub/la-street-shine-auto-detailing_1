import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus T.',
    location: 'Van Nuys, CA',
    rating: 5,
    text: "LA Street Shine completely transformed my BMW. The paint looks better than when I bought it. These guys are serious professionals — they came to my house and knocked it out in a few hours. 100% worth every penny.",
    service: 'Full Detail Package',
  },
  {
    name: 'Jessica R.',
    location: 'Sherman Oaks, CA',
    rating: 5,
    text: "I was skeptical about mobile detailing but these cousins proved me wrong. My SUV interior was a disaster — now it looks brand new. The attention to detail is insane. Already booked my second appointment!",
    service: 'Interior Detail',
  },
  {
    name: 'Carlos M.',
    location: 'North Hollywood, CA',
    rating: 5,
    text: "Best detailing service in the Valley, hands down. They showed up on time, were super professional, and my car looks absolutely incredible. The exterior shine is unreal. Highly recommend to anyone in LA.",
    service: 'Exterior Detail',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute -top-40 left-0 w-96 h-96 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/10 mb-4">
            <Star className="w-3.5 h-3.5 text-brand-pink-light" />
            <span className="text-brand-pink-light text-xs font-bold tracking-widest uppercase">Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What Our Customers
            <br />
            <span className="text-gradient-pink">Are Saying</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Don't take our word for it — hear from the customers who trust us with their vehicles.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl glass-card hover:border-brand-pink/30 transition-all duration-300 group flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-pink/30 mb-4 group-hover:text-brand-pink/50 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-blue-light fill-brand-blue-light" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-gray text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white/5 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-brand-gray text-xs">{t.location}</p>
                  </div>
                  <span className="text-xs text-brand-pink-light font-semibold bg-brand-pink/10 border border-brand-pink/20 px-2 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 p-6 rounded-xl border border-brand-blue/20 bg-brand-blue/5 text-center">
          <p className="text-white font-bold text-lg mb-1">
            Join hundreds of satisfied customers across Los Angeles County
          </p>
          <p className="text-brand-gray text-sm">
            Follow us on Instagram & TikTok{' '}
            <span className="text-brand-blue-light font-semibold">@lastreetshineautodetail</span>{' '}
            to see more transformations
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}
