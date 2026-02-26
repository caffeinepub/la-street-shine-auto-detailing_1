import { MapPin, Wrench, DollarSign, Clock, ThumbsUp, Gift, Repeat } from 'lucide-react';

const reasons = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'We Come to You',
    subtitle: 'Mobile Service',
    desc: 'No need to drive anywhere. We bring our full professional setup directly to your home, office, or wherever you are in Los Angeles County.',
    color: 'blue',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Premium Products',
    subtitle: '& Equipment',
    desc: 'We use only professional-grade detailing products and equipment — the same tools used on luxury and exotic vehicles.',
    color: 'pink',
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Affordable Luxury',
    subtitle: 'Best Value in LA',
    desc: 'High-end results without the high-end price tag. We believe everyone deserves a showroom-quality detail.',
    color: 'blue',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Fast & Reliable',
    subtitle: 'On-Time Every Time',
    desc: 'We respect your time. Punctual, efficient, and thorough — we get the job done right without wasting your day.',
    color: 'pink',
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: '5-Star Experience',
    subtitle: 'Customer Satisfaction',
    desc: 'From booking to the final reveal, we deliver a premium experience that keeps our customers coming back and referring friends.',
    color: 'blue',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/10 mb-4">
            <ThumbsUp className="w-3.5 h-3.5 text-brand-pink-light" />
            <span className="text-brand-pink-light text-xs font-bold tracking-widest uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The LA Street Shine
            <br />
            <span className="text-gradient-pink">Difference</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            We're not just another detailing service. We're your trusted partner in keeping your vehicle looking its absolute best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 3).map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:mx-auto lg:w-2/3">
          {reasons.slice(3).map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>

        {/* Referral & Loyalty Rewards */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Exclusive Client{' '}
              <span className="text-gradient-brand">Rewards</span>
            </h3>
            <p className="text-brand-gray text-sm mt-2">We take care of the people who take care of us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Referral Reward */}
            <div className="relative p-6 rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(0,102,255,0.12) 0%, rgba(0,0,0,0.6) 100%)',
                border: '1px solid rgba(0,102,255,0.4)',
                boxShadow: '0 0 24px rgba(0,102,255,0.12)',
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-blue/10 blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                  <Gift className="w-7 h-7 text-brand-blue-light" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 mb-2">
                    <span className="text-brand-blue-light text-xs font-black tracking-wider uppercase">Referral Reward</span>
                  </div>
                  <div className="text-4xl font-black text-brand-blue-light leading-none mb-1">40% OFF</div>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Refer a new client to us and receive <span className="text-white font-semibold">40% off</span> your next service. Share the shine, earn the savings!
                  </p>
                </div>
              </div>
            </div>

            {/* Loyalty Discount */}
            <div className="relative p-6 rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(255,0,127,0.12) 0%, rgba(0,0,0,0.6) 100%)',
                border: '1px solid rgba(255,0,127,0.4)',
                boxShadow: '0 0 24px rgba(255,0,127,0.12)',
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-pink/10 blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-pink/20 flex items-center justify-center shrink-0 group-hover:bg-brand-pink/30 transition-colors">
                  <Repeat className="w-7 h-7 text-brand-pink-light" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-pink/20 border border-brand-pink/40 mb-2">
                    <span className="text-brand-pink-light text-xs font-black tracking-wider uppercase">Loyalty Discount</span>
                  </div>
                  <div className="text-4xl font-black text-brand-pink-light leading-none mb-1">15% OFF</div>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Returning for your second visit? Enjoy <span className="text-white font-semibold">15% off</span> your service. Loyalty has its rewards!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  return (
    <div className="p-6 rounded-xl glass-card hover:scale-[1.02] transition-all duration-300 group">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
          reason.color === 'blue'
            ? 'bg-brand-blue/20 text-brand-blue-light group-hover:bg-brand-blue/30'
            : 'bg-brand-pink/20 text-brand-pink-light group-hover:bg-brand-pink/30'
        }`}
      >
        {reason.icon}
      </div>
      <h3 className="text-white font-black text-xl mb-0.5">{reason.title}</h3>
      <p
        className={`text-sm font-bold mb-3 ${
          reason.color === 'blue' ? 'text-brand-blue-light' : 'text-brand-pink-light'
        }`}
      >
        {reason.subtitle}
      </p>
      <p className="text-brand-gray text-sm leading-relaxed">{reason.desc}</p>
    </div>
  );
}
