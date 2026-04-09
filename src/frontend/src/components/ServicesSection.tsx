import {
  AlertTriangle,
  Crown,
  Droplets,
  Plus,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

type BulletSection = {
  heading: string;
  items: string[];
};

type Package = {
  level: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  color: "blue" | "pink" | "green";
  popular: boolean;
  prices: { sedan: string; suv: string; largeSuv: string } | { flat: string };
  sections: BulletSection[];
};

const packages: Package[] = [
  {
    level: "Basic",
    name: "Basic Wash",
    subtitle: "Interior & Exterior",
    icon: <Droplets className="w-7 h-7" />,
    color: "blue",
    popular: false,
    prices: { flat: "$70" },
    sections: [
      {
        heading: "🧼 Exterior Includes",
        items: [
          "Hand wash & rinse",
          "Wheels & tires cleaned",
          "Exterior glass wiped down",
          "Tire dressing applied",
        ],
      },
      {
        heading: "🧽 Interior Includes",
        items: [
          "Interior vacuum",
          "Dashboard & console wipe-down",
          "Interior glass cleaned",
        ],
      },
    ],
  },
  {
    level: "Level 1",
    name: "Street Starter",
    subtitle: "Detailed Exterior Wash & Cleaned, Detailed Interior",
    icon: <Zap className="w-7 h-7" />,
    color: "blue",
    popular: false,
    prices: { sedan: "$125", suv: "$140", largeSuv: "$160" },
    sections: [
      {
        heading: "🧼 Exterior Includes",
        items: [
          "Pressure rinse to remove loose debris",
          "Foam pre-soak & safe hand wash (2-bucket method)",
          "Wheels, barrels & tires deep cleaned",
          "Tire dressing applied (clean satin finish)",
          "Door jambs wiped down",
          "Exterior glass cleaned streak-free",
        ],
      },
      {
        heading: "🧽 Interior Includes",
        items: [
          "Full interior vacuum (seats, carpets, trunk)",
          "Crevice blow-out (vents & tight areas)",
          "Dashboard, console & door panels wiped down",
          "Light interior surface cleaning",
          "Interior glass cleaned",
        ],
      },
    ],
  },
  {
    level: "Level 2",
    name: "Street Elite",
    subtitle: "Exterior & Interior Enhanced (Clay + Sealant)",
    icon: <Star className="w-7 h-7" />,
    color: "pink",
    popular: true,
    prices: { sedan: "$185", suv: "$220", largeSuv: "$250" },
    sections: [
      {
        heading: "🧼 Exterior Includes",
        items: [
          "Pressure rinse to remove loose debris",
          "Foam pre-soak & safe 2-bucket hand wash",
          "Wheels, barrels & tires deep cleaned",
          "Iron decontamination treatment (removes embedded brake dust & fallout)",
          "Clay bar treatment (removes bonded surface contaminants)",
          "Blow dry with a microfiber towel",
          "Hand-applied synthetic paint sealant (3–6 month protection)",
          "Tire dressing (clean satin finish)",
          "Door jambs cleaned",
          "Exterior glass cleaned streak-free",
          "✨ Restores smoothness & enhances gloss",
        ],
      },
      {
        heading: "🧽 Interior Includes",
        items: [
          "Full deep vacuum (seats, carpets, trunk)",
          "Crevice blow-out (vents & tight areas)",
          "Dashboard, console & door panels cleaned",
          "Light stain treatment",
          "Leather wipe-down & light conditioning (if applicable)",
          "UV protection applied to plastics",
          "Interior glass cleaned",
        ],
      },
    ],
  },
  {
    level: "Level 3",
    name: "Street Gloss",
    subtitle: "Paint Correction + Deep Interior",
    icon: <Sparkles className="w-7 h-7" />,
    color: "blue",
    popular: false,
    prices: { sedan: "$300", suv: "$350", largeSuv: "$400" },
    sections: [
      {
        heading: "🧼 Exterior — Full Decontamination",
        items: [
          "Pressure rinse & foam pre-soak",
          "Safe 2-bucket hand wash",
          "Wheels & tires deep cleaned",
          "Iron removal treatment",
          "Clay bar decontamination",
          "Blow dry with microfiber towels",
          "Trim & sensitive areas masked",
        ],
      },
      {
        heading: "🔧 Step 1 — Compounding",
        items: [
          "Machine compounding to remove moderate defects",
          "Reduces 70–90% of swirl marks and light scratches",
          "Restores clarity and removes oxidation",
        ],
      },
      {
        heading: "🔧 Step 2 — Refinement Polish",
        items: [
          "Fine polishing to remove haze",
          "Enhances depth and gloss",
          "Creates a smooth, reflective finish",
        ],
      },
      {
        heading: "🛡 Protection",
        items: [
          "Panel prep wipe (oil removal)",
          "6–12 month synthetic paint sealant applied",
          "Trim restoration",
          "Tire dressing",
          "Exterior glass cleaned",
        ],
      },
      {
        heading: "🧽 Interior Included",
        items: [
          "Full deep vacuum",
          "Crevice blow-out",
          "Steam cleaning on high-touch areas",
          "Light–moderate stain treatment",
          "Leather cleaning & conditioning (if applicable)",
          "UV protection applied to plastics",
          "Interior glass cleaned",
        ],
      },
    ],
  },
  {
    level: "Level 4",
    name: "Street Shiner Signature",
    subtitle: "Ceramic Coating + Interior Reset",
    icon: <Crown className="w-7 h-7" />,
    color: "pink",
    popular: false,
    prices: { sedan: "$470", suv: "$520", largeSuv: "$700" },
    sections: [
      {
        heading: "🧼 Full Exterior Preparation",
        items: [
          "Pressure rinse & foam pre-soak",
          "Safe 2-bucket hand wash",
          "Wheels & tires deep cleaned",
          "Iron removal treatment",
          "Clay bar decontamination",
          "Blow dry with microfiber towels",
          "Trim & sensitive areas masked",
          "Multi-angle paint inspection",
        ],
      },
      {
        heading: "🔧 Paint Correction Prep",
        items: [
          "1–2 step machine correction (based on paint condition)",
          "Removal of swirl marks & oxidation",
          "Refinement polish for maximum clarity",
          "Panel prep wipe to remove polishing oils",
          "Paint fully corrected & prepped for proper coating bonding",
        ],
      },
      {
        heading: "🛡 Ceramic Coating Application",
        items: [
          "1–3 year ceramic coating applied by hand",
          "Crosshatch application method",
          "Proper flash timing & leveling",
          "High-spot inspection under LED lighting",
        ],
      },
      {
        heading: "✦ Coated Surfaces",
        items: [
          "Paint",
          "Plastic trim",
          "Wheel faces",
          "Exterior glass sealant applied",
        ],
      },
      {
        heading: "🧽 Interior Reset Included",
        items: [
          "Full deep vacuum",
          "Steam treatment of high-touch areas",
          "Light–moderate stain treatment",
          "Leather cleaning & conditioning (if applicable)",
          "UV protection applied to plastics",
          "Interior glass cleaned",
        ],
      },
    ],
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
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue-light" />
              <span className="text-brand-blue-light text-xs font-bold tracking-widest uppercase">
                Our Detailing Packages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Premium Detailing
              <br />
              <span className="text-gradient-blue">At Every Level</span>
            </h2>
            <p className="text-brand-gray text-base sm:text-lg max-w-2xl mx-auto">
              From a quick refresh to a full luxury ceramic coating — we have
              the perfect package for your vehicle and budget.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
            {packages.map((pkg) => {
              const isFlat = "flat" in pkg.prices;
              return (
                <div
                  key={pkg.name}
                  data-ocid={`services.package.${pkg.level.toLowerCase().replace(" ", "")}.card`}
                  className={`relative p-5 sm:p-6 rounded-xl transition-all duration-300 hover:scale-[1.01] group border-2 bg-white/[0.03] backdrop-blur-sm flex flex-col ${
                    pkg.popular
                      ? "border-brand-blue glow-blue shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                      : pkg.color === "pink"
                        ? "border-brand-pink shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                        : "border-brand-blue shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-blue rounded-full text-white text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  {/* Card header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-5">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
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
                      <h3 className="text-white font-black text-lg sm:text-xl">
                        {pkg.name}
                      </h3>
                      <p className="text-brand-gray text-xs mt-0.5">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bullet sections */}
                  <div className="flex-1 space-y-4 mb-5">
                    {pkg.sections.map((section) => (
                      <div key={section.heading}>
                        <p
                          className={`text-xs font-black uppercase tracking-wider mb-2 ${
                            pkg.color === "blue"
                              ? "text-brand-blue-light"
                              : "text-brand-pink-light"
                          }`}
                        >
                          {section.heading}
                        </p>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs sm:text-sm text-brand-gray leading-relaxed"
                            >
                              <span
                                className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                  pkg.color === "blue"
                                    ? "bg-brand-blue-light"
                                    : "bg-brand-pink-light"
                                }`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Price display */}
                  <div className="border border-white/10 rounded-xl overflow-hidden mt-auto">
                    {isFlat ? (
                      // Flat price for Basic Wash
                      <div className="flex items-center justify-between px-4 py-4">
                        <span className="text-xs font-bold text-brand-gray uppercase tracking-wider">
                          Interior & Exterior
                        </span>
                        <span className="text-3xl font-black text-brand-blue-light">
                          {(pkg.prices as { flat: string }).flat}
                        </span>
                      </div>
                    ) : (
                      <>
                        {/* Mobile: stacked rows */}
                        <div className="sm:hidden divide-y divide-white/10">
                          {[
                            {
                              label: "Sedan",
                              price: (
                                pkg.prices as {
                                  sedan: string;
                                  suv: string;
                                  largeSuv: string;
                                }
                              ).sedan,
                            },
                            {
                              label: "SUV / Crossover",
                              price: (
                                pkg.prices as {
                                  sedan: string;
                                  suv: string;
                                  largeSuv: string;
                                }
                              ).suv,
                            },
                            {
                              label: "Truck / Large",
                              price: (
                                pkg.prices as {
                                  sedan: string;
                                  suv: string;
                                  largeSuv: string;
                                }
                              ).largeSuv,
                            },
                          ].map((row) => (
                            <div
                              key={row.label}
                              className="flex items-center justify-between px-4 py-3"
                            >
                              <span className="text-xs font-bold text-brand-gray uppercase tracking-wider">
                                {row.label}
                              </span>
                              <span
                                className={`text-xl font-black ${
                                  pkg.color === "blue"
                                    ? "text-brand-blue-light"
                                    : "text-brand-pink-light"
                                }`}
                              >
                                {row.price}
                              </span>
                            </div>
                          ))}
                        </div>
                        {/* Desktop: 3-column layout */}
                        <div className="hidden sm:block">
                          <div className="grid grid-cols-3 text-xs font-bold text-brand-gray bg-white/5 px-4 py-2 uppercase tracking-wider">
                            <span>Sedan</span>
                            <span className="text-center">SUV / Crossover</span>
                            <span className="text-right">Truck / Large</span>
                          </div>
                          <div className="grid grid-cols-3 px-4 py-3">
                            <span
                              className={`text-lg font-black ${
                                pkg.color === "blue"
                                  ? "text-brand-blue-light"
                                  : "text-brand-pink-light"
                              }`}
                            >
                              {
                                (
                                  pkg.prices as {
                                    sedan: string;
                                    suv: string;
                                    largeSuv: string;
                                  }
                                ).sedan
                              }
                            </span>
                            <span
                              className={`text-lg font-black text-center ${
                                pkg.color === "blue"
                                  ? "text-brand-blue-light"
                                  : "text-brand-pink-light"
                              }`}
                            >
                              {
                                (
                                  pkg.prices as {
                                    sedan: string;
                                    suv: string;
                                    largeSuv: string;
                                  }
                                ).suv
                              }
                            </span>
                            <span
                              className={`text-lg font-black text-right ${
                                pkg.color === "blue"
                                  ? "text-brand-blue-light"
                                  : "text-brand-pink-light"
                              }`}
                            >
                              {
                                (
                                  pkg.prices as {
                                    sedan: string;
                                    suv: string;
                                    largeSuv: string;
                                  }
                                ).largeSuv
                              }
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add-On Services */}
          <div className="mt-10 md:mt-12">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <Plus className="w-5 h-5 text-brand-pink-light" />
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Add-On Services
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between p-4 rounded-xl border border-brand-pink/40 bg-white/[0.03] hover:border-brand-pink/70 hover:shadow-[0_0_12px_rgba(236,72,153,0.15)] transition-all duration-200 gap-3"
                >
                  <span className="text-white text-sm font-semibold leading-snug">
                    {addon.name}
                  </span>
                  <span className="text-brand-pink-light text-sm font-bold whitespace-nowrap shrink-0">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 md:mt-12 flex justify-center">
            <div className="relative flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl border-2 border-yellow-400/70 bg-yellow-400/10 shadow-[0_0_30px_rgba(250,204,21,0.25)] max-w-xl w-full">
              <div className="flex-shrink-0 flex flex-col items-center pt-0.5">
                <AlertTriangle
                  className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-yellow-300 font-black text-sm sm:text-base uppercase tracking-widest mb-1">
                  Pricing Notice
                </p>
                <p className="text-yellow-100 text-sm leading-relaxed font-medium">
                  Prices shown are base rates and{" "}
                  <span className="text-yellow-300 font-black">may vary</span>{" "}
                  based on your vehicle's size and condition. Contact us for a{" "}
                  <span className="text-yellow-300 font-black">free quote</span>{" "}
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
