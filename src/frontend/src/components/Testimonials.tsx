import { Star, Quote } from 'lucide-react';

// -- Static Testimonials --------------------------------------------------
const STATIC_TESTIMONIALS = [
  {
    name: 'Nathan A.',
    location: 'Sherman Oaks, CA',
    rating: 5,
    service: 'Full Exterior Detail',
    vehicle: 'BMW 3 Series',
    text: 'I have a BMW 3 Series, and I asked for a full exterior detail. They gave me 25% off because I have been coming to them, I was a loyal customer and I referred them to multiple people, and I loved the results. They came prepared and ready to go, knocked it out within an hour, and they were done. If you have an expensive car and want trust and full care for your car, this is the mobile detailer to trust in Sherman Oaks.',
  },
  {
    name: 'Anna K.',
    location: 'Van Nuys, CA',
    rating: 5,
    service: 'Interior Detail',
    vehicle: 'Mercedes-Benz SUV',
    text: 'I have a Mercedes-Benz SUV, and I asked for an interior detail only, and I had a bunch of dog hair and black stains; it all got removed, and they paid attention to the little parts inside the car. Definitely the best mobile detailer. It looked brand new, Van Nuys area.',
  },
  {
    name: 'Vick K.',
    location: 'Los Angeles, CA',
    rating: 5,
    service: 'Full Detail + Headlight Restoration',
    vehicle: 'Toyota',
    text: 'I am an old man, and I could not clean my Toyota. I saw the LA Street Shine auto detailing business card, and I contacted them for a full inside and outside detailing. It was affordable, and it looked like when I first bought it. I also asked for the headlight restoration, which looked beautiful. I recommend them.',
  },
];

// -- Types ----------------------------------------------------------------
interface Testimonial {
  name: string;
  location: string;
  rating: number;
  service: string;
  vehicle: string;
  text: string;
}

// -- TestimonialCard -------------------------------------------------------
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="p-6 rounded-xl glass-card hover:border-brand-pink/30 transition-all duration-300 group flex flex-col">
      <Quote className="w-8 h-8 text-brand-pink/30 mb-4 group-hover:text-brand-pink/50 transition-colors" />

      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].slice(0, t.rating).map((star) => (
          <Star key={'star-' + t.name + '-' + star} className="w-4 h-4 text-brand-blue-light fill-brand-blue-light" />
        ))}
      </div>

      <p className="text-brand-gray text-sm leading-relaxed flex-1 mb-6 italic">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="border-t border-white/5 pt-4">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <p className="text-white font-bold text-sm">{t.name}</p>
            <p className="text-brand-gray text-xs">{t.location}</p>
            <p className="text-zinc-500 text-xs mt-0.5">{t.vehicle}</p>
          </div>
          <span className="text-xs text-brand-pink-light font-semibold bg-brand-pink/10 border border-brand-pink/20 px-2 py-1 rounded-full whitespace-nowrap">
            {t.service}
          </span>
        </div>
      </div>
    </div>
  );
}

// -- Testimonials (main export) -------------------------------------------
export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute -top-40 left-0 w-96 h-96 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/10 mb-4">
            <Star className="w-3.5 h-3.5 text-brand-pink-light" />
            <span className="text-brand-pink-light text-xs font-bold uppercase" style={{ letterSpacing: '0.15em' }}>Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What Our Customers
            <br />
            <span className="text-gradient-pink">Are Saying</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it &mdash; hear from the customers who trust us with their vehicles.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATIC_TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>


      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}
