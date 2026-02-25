export default function Hero() {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/generated/luxury-car-hero.dim_1920x1080.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black/90" />
      {/* Blue tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-pink/5" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Slogan badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-pink/40 bg-brand-pink/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
          <span className="text-brand-pink-light text-xs font-bold tracking-widest uppercase">
            Perfection in Every Reflection
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-4 tracking-tight">
          Luxury Detailing.
          <br />
          <span className="text-gradient-blue">Unmatched Shine.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-brand-gray font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Premium Mobile Auto Detailing That Comes to You.
          <br />
          <span className="text-brand-blue-light font-semibold">Serving Van Nuys & All of Los Angeles County.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToBooking}
            className="btn-blue px-8 py-4 rounded text-base w-full sm:w-auto min-w-[220px]"
          >
            Book Your Detail Now
          </button>
          <a
            href="tel:9094411114"
            className="btn-outline-blue px-8 py-4 rounded text-base w-full sm:w-auto min-w-[220px] text-center"
          >
            Call (909) 441-1114
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '100%', label: 'Mobile Service' },
            { value: '5★', label: 'Rated Service' },
            { value: 'LA', label: 'County Wide' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-gradient-brand">{stat.value}</div>
              <div className="text-xs text-brand-gray uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
