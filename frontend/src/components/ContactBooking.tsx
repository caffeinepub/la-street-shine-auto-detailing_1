import { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SiInstagram, SiTiktok } from 'react-icons/si';
import { useSubmitBooking } from '../hooks/useQueries';
import { ServiceType } from '../backend';

const serviceOptions = [
  { value: ServiceType.exteriorOnly, label: 'Basic Exterior Wash — $35' },
  { value: ServiceType.interiorOnly, label: 'Basic Interior Clean — $45' },
  { value: ServiceType.standardDetail, label: 'Exterior Detail — $60' },
  { value: ServiceType.premiumDetail, label: 'Interior Detail — $60' },
  { value: ServiceType.ceramicCoating, label: 'Full Detail Package (Exterior + Interior) — $120' },
  { value: ServiceType.rvWash, label: 'Premium Ceramic Coating — Contact for Quote' },
  { value: ServiceType.motorcycleDetail, label: 'Headlight Restoration — Call for Quote' },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: ServiceType | '';
  vehicleInfo: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export default function ContactBooking() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    vehicleInfo: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitBooking, isPending, isError, error } = useSubmitBooking();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.serviceType) return;

    submitBooking(
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        serviceType: form.serviceType as ServiceType,
        vehicleInfo: form.vehicleInfo,
        preferredDate: form.preferredDate,
        preferredTime: form.preferredTime,
        notes: form.notes,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({
            name: '',
            phone: '',
            email: '',
            serviceType: '',
            vehicleInfo: '',
            preferredDate: '',
            preferredTime: '',
            notes: '',
          });
        },
      }
    );
  };

  return (
    <>
      {/* Dual anchor support: #booking and #contact both scroll here */}
      <span id="booking" className="sr-only" aria-hidden="true" />
      <section id="contact" className="py-24 bg-brand-darker relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
              <Phone className="w-3.5 h-3.5 text-brand-blue-light" />
              <span className="text-brand-blue-light text-xs font-bold tracking-widest uppercase">Book Now</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready for Your
              <br />
              <span className="text-gradient-blue">Perfect Shine?</span>
            </h2>
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">
              Book your detail today. We come to you — anywhere in Los Angeles County.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="p-6 rounded-xl glass-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-blue-light" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs uppercase tracking-wider font-semibold">Call or Text</p>
                    <a
                      href="tel:9094411114"
                      className="text-white font-black text-xl hover:text-brand-blue-light transition-colors"
                    >
                      (909) 441-1114
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="p-6 rounded-xl glass-card">
                <p className="text-brand-gray text-xs uppercase tracking-wider font-semibold mb-4">Follow Us</p>
                <div className="space-y-3">
                  <a
                    href="https://www.instagram.com/lastreetshineautodetail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-brand-pink-light transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-pink/20 flex items-center justify-center group-hover:bg-brand-pink/30 transition-colors">
                      <SiInstagram className="w-4 h-4 text-brand-pink-light" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Instagram</p>
                      <p className="text-brand-gray text-xs">@lastreetshineautodetail</p>
                    </div>
                  </a>
                  <a
                    href="https://www.tiktok.com/@lastreetshineautodetail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-brand-blue-light transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue/30 transition-colors">
                      <SiTiktok className="w-4 h-4 text-brand-blue-light" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">TikTok</p>
                      <p className="text-brand-gray text-xs">@lastreetshineautodetail</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="p-6 rounded-xl glass-card">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-blue-light" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs uppercase tracking-wider font-semibold mb-1">Service Area</p>
                    <p className="text-white font-bold text-sm">Serving Van Nuys, CA</p>
                    <p className="text-brand-gray text-sm">and all of Los Angeles County</p>
                    <p className="text-brand-blue-light text-xs font-semibold mt-1">We Come to You!</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-xl glass-card">
                <p className="text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">Hours</p>
                <p className="text-white font-bold">Mon – Sun: 8:00 AM – 6:00 PM</p>
                <p className="text-brand-gray text-xs mt-1">Available by appointment</p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center p-12 rounded-xl glass-card border-brand-blue/30">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-brand-blue-light mx-auto mb-4" />
                    <h3 className="text-white font-black text-2xl mb-2">Booking Received!</h3>
                    <p className="text-brand-gray mb-6">
                      Thank you! We'll reach out to confirm your appointment shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-blue px-6 py-3 rounded text-sm"
                    >
                      Book Another Detail
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-xl glass-card space-y-5">
                  <h3 className="text-white font-black text-xl mb-6">Book Your Detail</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 000-0000"
                        className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={form.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue/60 transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-brand-darker">
                        Select a service...
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-brand-darker">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                      Vehicle Make & Model *
                    </label>
                    <input
                      type="text"
                      name="vehicleInfo"
                      value={form.vehicleInfo}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 2020 BMW 3 Series"
                      className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors"
                    />
                  </div>

                  {/* Date & Time side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={form.preferredDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue/60 transition-colors [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="preferredTime"
                        value={form.preferredTime}
                        onChange={handleChange}
                        className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue/60 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any special requests, vehicle condition details, or address..."
                      className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors resize-none"
                    />
                  </div>

                  {isError && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm">
                        {error instanceof Error ? error.message : 'Something went wrong. Please try again.'}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full btn-pink py-4 rounded-lg flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Booking Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-brand-gray text-xs">
                    Or call us directly at{' '}
                    <a href="tel:9094411114" className="text-brand-blue-light hover:underline font-semibold">
                      (909) 441-1114
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
