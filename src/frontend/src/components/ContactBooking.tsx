import { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SiInstagram, SiTiktok } from 'react-icons/si';
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

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  vehicleInfo?: string;
  preferredDate?: string;
}

// Base input class: light background, dark text, visible border, good tap target
const baseInputClass =
  'w-full bg-white border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm min-h-[44px] focus:outline-none focus:ring-2 transition-colors';

const validInputClass = `${baseInputClass} border-gray-300 focus:border-brand-blue focus:ring-brand-blue/20`;
const errorInputClass = `${baseInputClass} border-brand-pink focus:border-brand-pink focus:ring-brand-pink/20`;

const baseSelectClass =
  'w-full bg-white border rounded-lg px-4 py-3 text-gray-900 text-sm min-h-[44px] focus:outline-none focus:ring-2 transition-colors appearance-none cursor-pointer';

const validSelectClass = `${baseSelectClass} border-gray-300 focus:border-brand-blue focus:ring-brand-blue/20`;
const errorSelectClass = `${baseSelectClass} border-brand-pink focus:border-brand-pink focus:ring-brand-pink/20`;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs font-semibold flex items-center gap-1" style={{ color: '#FF007F' }}>
      <AlertCircle className="w-3 h-3 shrink-0" />
      {message}
    </p>
  );
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return phone.replace(/\D/g, '').length >= 7;
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
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const clearFieldError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    clearFieldError(name as keyof FormErrors);
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.serviceType) {
      newErrors.serviceType = 'Please select a service';
    }

    if (!form.vehicleInfo.trim()) {
      newErrors.vehicleInfo = 'Vehicle make & model is required';
    }

    if (!form.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        (el as HTMLElement).focus();
      }
      return;
    }

    setErrors({});
    setIsPending(true);

    const serviceLabel = serviceOptions.find(o => o.value === form.serviceType)?.label ?? form.serviceType;

    const subject = encodeURIComponent(`New Booking Request — ${form.name.trim()}`);
    const body = encodeURIComponent(
      `New Booking Request from LA Street Shine Website\n\n` +
      `Name: ${form.name.trim()}\n` +
      `Phone: ${form.phone.trim()}\n` +
      `Email: ${form.email.trim()}\n` +
      `Service: ${serviceLabel}\n` +
      `Vehicle: ${form.vehicleInfo.trim()}\n` +
      `Preferred Date: ${form.preferredDate}\n` +
      `Preferred Time: ${form.preferredTime || 'Any time'}\n` +
      `Notes: ${form.notes.trim() || 'None'}\n`
    );

    window.location.href = `mailto:lastreetshineautodetailing@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsPending(false);
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
      setErrors({});
    }, 1000);
  };

  return (
    <section id="booking" className="py-24 bg-brand-darker relative overflow-hidden">
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
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center shrink-0 mt-0.5">
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
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-blue px-6 py-3 rounded text-sm"
                  >
                    Book Another Detail
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="p-6 md:p-8 rounded-xl glass-card space-y-5">
                <h3 className="text-white font-black text-xl mb-2">Book Your Detail</h3>
                <p className="text-brand-gray text-xs mb-4">
                  Fields marked with <span style={{ color: '#FF007F' }}>*</span> are required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="booking-name" className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                      Full Name <span style={{ color: '#FF007F' }}>*</span>
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={errors.name ? errorInputClass : validInputClass}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                    />
                    <FieldError message={errors.name} />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="booking-phone" className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                      Phone Number <span style={{ color: '#FF007F' }}>*</span>
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={errors.phone ? errorInputClass : validInputClass}
                      aria-invalid={!!errors.phone}
                    />
                    <FieldError message={errors.phone} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="booking-email" className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                    Email Address <span style={{ color: '#FF007F' }}>*</span>
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={errors.email ? errorInputClass : validInputClass}
                    aria-invalid={!!errors.email}
                  />
                  <FieldError message={errors.email} />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="booking-service" className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                    Service Type <span style={{ color: '#FF007F' }}>*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="booking-service"
                      name="serviceType"
                      value={form.serviceType}
                      onChange={handleChange}
                      className={errors.serviceType ? errorSelectClass : validSelectClass}
                      aria-invalid={!!errors.serviceType}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center" aria-hidden="true">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <FieldError message={errors.serviceType} />
                </div>

                {/* Vehicle Info */}
                <div>
                  <label htmlFor="booking-vehicle" className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                    Vehicle Make & Model <span style={{ color: '#FF007F' }}>*</span>
                  </label>
                  <input
                    id="booking-vehicle"
                    type="text"
                    name="vehicleInfo"
                    value={form.vehicleInfo}
                    onChange={handleChange}
                    placeholder="e.g. 2022 Toyota Camry"
                    className={errors.vehicleInfo ? errorInputClass : validInputClass}
                    aria-invalid={!!errors.vehicleInfo}
                  />
                  <FieldError message={errors.vehicleInfo} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="booking-date" className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                      Preferred Date <span style={{ color: '#FF007F' }}>*</span>
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      name="preferredDate"
                      value={form.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={errors.preferredDate ? errorInputClass : validInputClass}
                      aria-invalid={!!errors.preferredDate}
                    />
                    <FieldError message={errors.preferredDate} />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="booking-time" className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <select
                        id="booking-time"
                        name="preferredTime"
                        value={form.preferredTime}
                        onChange={handleChange}
                        className={validSelectClass}
                      >
                        <option value="">Any time</option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center" aria-hidden="true">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="booking-notes" className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="booking-notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Any special requests or details about your vehicle..."
                    rows={3}
                    className={`${validInputClass} resize-none`}
                  />
                </div>



                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl text-base font-black flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.5 0.22 250), oklch(0.45 0.2 260))',
                    color: '#fff',
                    border: '1px solid oklch(0.65 0.22 250 / 0.5)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Booking Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
