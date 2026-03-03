import { AlertTriangle, Crown, Plus, Sparkles, Star, Zap } from "lucide-react";

const packages = [
  {
    level: "Level 1",
    name: "Street Starter",
    icon: <Zap className="w-7 h-7" />,
    color: "blue",
    popular: false,
    prices: { sedan: "$120", suv: "$150", largeSuv: "$170" },
    desc: "Hand wash, wheels cleaned, tire shine, light interior cleaning, and glass cleaned.",
  },
  {
    level: "Level 2",
    name: "Street Elite",
    icon: <Star className="w-7 h-7" />,
    color: "pink",
    popular: true,
    prices: { sedan: "$220", suv: "$260", largeSuv: "$300" },
    desc: "Full interior and exterior detail with decontamination and paint sealant protection.",
  },
  {
    level: "Level 3",
    name: "Street Gloss",
    icon: <Sparkles className="w-7 h-7" />,
    color: "blue",
    popular: false,
    prices: { sedan: "$500", suv: "$600", largeSuv: "$700" },
    desc: "2-step paint correction with 6–12 month protection. Major gloss upgrade.",
  },
  {
    level: "Level 4",
    name: "Street Shiner Signature",
    icon: <Crown className="w-7 h-7" />,
    color: "pink",
    popular: false,
    prices: { sedan: "$900", suv: "$1,050", largeSuv: "$1,200" },
    desc: "Full correction prep and 1–3 year ceramic coating. Maximum shine and protection.",
  },
];

const addOns = [
  { name: "Street Gloss Enhancement (Polish)", price: "Starting at $150" },
  { name: "Street Trim Revival", price: "Starting at $60" },
  { name: "Street Vision Restore (Headlights)", price: "Starting at $80" },
  { name: "Street Dust Reset (Wheel Deep Clean)", price: "Starting at $50" },
  { name: "Street Engine Detail", price: "Starting at $60" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-brand-darker relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue-light" />
              <span className="text-brand-blue-light text-xs font-bold tracking-widest uppercase">
                Our Detailing Packages
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Premium Detailing
              <br />
              <span className="text-gradient-blue">At Every Level</span>
            </h2>
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">
              From a quick refresh to a full luxury ceramic coating — we have
              the perfect package for your vehicle and budget.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                data-ocid={`services.package.${pkg.level.toLowerCase().replace(" ", "")}.card`}
                className={`relative p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] group border-2 bg-white/[0.03] backdrop-blur-sm ${
                  pkg.popular
                    ? "border-brand-blue glow-blue shadow-[0_0_24px_rgba(59,130,246,0.25)]"
                    : pkg.color === "pink"
                      ? "border-brand-pink/60 shadow-[0_0_16px_rgba(236,72,153,0.1)]"
                      : "border-brand-blue/50 shadow-[0_0_16px_rgba(59,130,246,0.1)]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-blue rounded-full text-white text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                      pkg.color === "blue"
                        ? "bg-brand-blue/20 text-brand-blue-light"
                        : "bg-brand-pink/20 text-brand-pink-light"
                    }`}
                  >
                    {pkg.icon}
                  </div>
                  <div>
                    <p
                      className={`text-xs font-bold tracking-widest uppercase mb-0.5 ${
                        pkg.color === "blue"
                          ? "text-brand-blue-light"
                          : "text-brand-pink-light"
                      }`}
                    >
                      {pkg.level}
                    </p>
                    <h3 className="text-white font-black text-xl">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                <p className="text-brand-gray text-sm leading-relaxed mb-5">
                  {pkg.desc}
                </p>

                {/* Price table */}
                <div className="border border-white/10 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-3 text-xs font-bold text-brand-gray bg-white/5 px-4 py-2 uppercase tracking-wider">
                    <span>Sedan</span>
                    <span className="text-center">SUV / Truck</span>
                    <span className="text-right">Large SUV</span>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-3">
                    <span
                      className={`text-lg font-black ${
                        pkg.color === "blue"
                          ? "text-brand-blue-light"
                          : "text-brand-pink-light"
                      }`}
                    >
                      {pkg.prices.sedan}
                    </span>
                    <span
                      className={`text-lg font-black text-center ${
                        pkg.color === "blue"
                          ? "text-brand-blue-light"
                          : "text-brand-pink-light"
                      }`}
                    >
                      {pkg.prices.suv}
                    </span>
                    <span
                      className={`text-lg font-black text-right ${
                        pkg.color === "blue"
                          ? "text-brand-blue-light"
                          : "text-brand-pink-light"
                      }`}
                    >
                      {pkg.prices.largeSuv}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-On Services */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Plus className="w-5 h-5 text-brand-pink-light" />
              <h3 className="text-2xl font-black text-white">
                Add-On Services
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between p-4 rounded-xl border border-brand-pink/40 bg-white/[0.03] hover:border-brand-pink/70 hover:shadow-[0_0_12px_rgba(236,72,153,0.15)] transition-all duration-200"
                >
                  <span className="text-white text-sm font-semibold pr-3">
                    {addon.name}
                  </span>
                  <span className="text-brand-pink-light text-sm font-bold whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 flex justify-center">
            <div className="relative flex items-start gap-4 px-6 py-5 rounded-2xl border-2 border-yellow-400/70 bg-yellow-400/10 shadow-[0_0_30px_rgba(250,204,21,0.25)] max-w-xl w-full">
              {/* Glowing triangle icon */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <AlertTriangle
                  className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-yellow-300 font-black text-base uppercase tracking-widest mb-1">
                  Pricing Notice
                </p>
                <p className="text-yellow-100 text-sm leading-relaxed font-medium">
                  Prices shown are base rates and{" "}
                  <span className="text-yellow-300 font-black">may vary</span>{" "}
                  based on your vehicle's size and condition. Contact us for a{" "}
                  <span className="text-yellow-300 font-black">
                    free accurate quote
                  </span>{" "}
                  before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}
