import { Car, Sparkles, Package, Shield, Lightbulb, Droplets, Star } from 'lucide-react';

const services = [
  {
    icon: <Droplets className="w-7 h-7" />,
    name: 'Basic Exterior Wash',
    price: '$35',
    priceNote: 'Starting at',
    desc: 'Full exterior hand wash, wheel cleaning, tire dressing, and window wipe-down. Your car looking fresh in no time.',
    color: 'blue',
    popular: false,
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    name: 'Basic Interior Clean',
    price: '$45',
    priceNote: 'Starting at',
    desc: 'Interior vacuum, dashboard wipe-down, window cleaning, and door panel detailing. A clean cabin every time.',
    color: 'pink',
    popular: false,
  },
  {
    icon: <Car className="w-7 h-7" />,
    name: 'Exterior Detail',
    price: '$60',
    priceNote: 'Starting at',
    desc: 'Deep exterior detail including clay bar treatment, paint decontamination, hand wax, and full exterior shine.',
    color: 'blue',
    popular: false,
  },
  {
    icon: <Star className="w-7 h-7" />,
    name: 'Interior Detail',
    price: '$60',
    priceNote: 'Starting at',
    desc: 'Full interior deep clean: shampoo carpets & seats, leather conditioning, odor elimination, and full sanitization.',
    color: 'pink',
    popular: false,
  },
  {
    icon: <Package className="w-7 h-7" />,
    name: 'Full Detail Package',
    price: '$120',
    priceNote: 'Starting at',
    desc: 'The complete experience — exterior detail + interior detail combined. Maximum shine, maximum clean. Best value.',
    color: 'blue',
    popular: true,
  },
  {
    icon: <Shield className="w-7 h-7" />,
    name: 'Premium Ceramic Coating',
    price: 'Contact for Quote',
    priceNote: '',
    desc: 'Applied panel-by-panel with intensive labor for the ultimate in paint protection. Pricing varies by vehicle size, panel count, and condition. Long-lasting gloss and protection for your vehicle\'s finish.',
    color: 'pink',
    popular: false,
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    name: 'Headlight Restoration',
    price: 'Call for Quote',
    priceNote: '',
    desc: 'Restore cloudy, yellowed headlights to crystal-clear clarity. Improve visibility and vehicle appearance.',
    color: 'blue',
    popular: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue-light" />
            <span className="text-brand-blue-light text-xs font-bold tracking-widest uppercase">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Premium Detailing
            <br />
            <span className="text-gradient-blue">At Every Level</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            From a quick refresh to a full luxury detail — we have the perfect package for your vehicle and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative p-6 rounded-xl glass-card transition-all duration-300 hover:scale-[1.02] group ${
                service.popular ? 'border-brand-blue/50 glow-blue' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-blue to-brand-pink rounded-full text-white text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                  service.color === 'blue'
                    ? 'bg-brand-blue/20 text-brand-blue-light'
                    : 'bg-brand-pink/20 text-brand-pink-light'
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{service.name}</h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-4">{service.desc}</p>

              <div className="mt-auto pt-4 border-t border-white/5">
                {service.priceNote && (
                  <span className="text-brand-gray text-xs uppercase tracking-wider">{service.priceNote} </span>
                )}
                <span
                  className={`text-2xl font-black ${
                    service.color === 'blue' ? 'text-brand-blue-light' : 'text-brand-pink-light'
                  }`}
                >
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-brand-gray text-sm italic border border-brand-blue/20 bg-brand-blue/5 rounded-lg px-6 py-3 inline-block">
            ⚠️ Prices may vary based on vehicle size and condition. Contact us for an accurate quote.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}
