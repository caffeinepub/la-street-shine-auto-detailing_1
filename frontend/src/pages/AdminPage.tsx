import { useState, useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';
import {
  Lock,
  LogOut,
  Trash2,
  RefreshCw,
  Save,
  ChevronLeft,
  Calendar,
  User,
  Phone,
  Mail,
  Car,
  FileText,
  Clock,
  MapPin,
  AlertCircle,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import {
  useGetAllBookings,
  useUpdateBookingStatus,
  useDeleteBooking,
  useGetServiceInfo,
  useUpdateServiceInfo,
} from '../hooks/useQueries';
import { BookingStatus, ServiceType, type Booking } from '../backend';

const ADMIN_PASSWORD = 'lastreetshine2024';

const serviceTypeLabels: Record<ServiceType, string> = {
  [ServiceType.exteriorOnly]: 'Basic Exterior Wash',
  [ServiceType.interiorOnly]: 'Basic Interior Clean',
  [ServiceType.standardDetail]: 'Exterior Detail',
  [ServiceType.premiumDetail]: 'Interior Detail',
  [ServiceType.ceramicCoating]: 'Full Detail Package',
  [ServiceType.rvWash]: 'Wax & Paint Protection',
  [ServiceType.motorcycleDetail]: 'Headlight Restoration',
};

const statusColors: Record<BookingStatus, string> = {
  [BookingStatus.pending]: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  [BookingStatus.confirmed]: 'bg-brand-blue/20 text-brand-blue-light border-brand-blue/30',
  [BookingStatus.completed]: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'bookings' | 'settings'>('bookings');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  const handleBackToSite = () => {
    router.navigate({ to: '/' });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-pink flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white font-black text-3xl mb-2">Admin Access</h1>
            <p className="text-brand-gray text-sm">LA Street Shine Auto Detailing</p>
          </div>

          <form onSubmit={handleLogin} className="p-8 rounded-xl glass-card space-y-5">
            <div>
              <label className="block text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors"
                autoFocus
              />
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{authError}</p>
              </div>
            )}

            <button type="submit" className="w-full btn-blue py-3 rounded-lg text-sm">
              Access Dashboard
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleBackToSite}
                className="text-brand-gray text-xs hover:text-brand-blue-light transition-colors"
              >
                ← Back to Website
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Admin Header */}
      <header className="bg-brand-darker border-b border-brand-blue/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToSite}
              className="text-brand-gray hover:text-brand-blue-light transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white font-black text-lg leading-none">Admin Dashboard</h1>
              <p className="text-brand-gray text-xs">LA Street Shine Auto Detailing</p>
            </div>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 text-brand-gray hover:text-red-400 transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'bookings'
                ? 'bg-brand-blue/20 text-brand-blue-light border border-brand-blue/40'
                : 'text-brand-gray hover:text-white border border-transparent'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Bookings
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'settings'
                ? 'bg-brand-pink/20 text-brand-pink-light border border-brand-pink/40'
                : 'text-brand-gray hover:text-white border border-transparent'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-2" />
            Service Info
          </button>
        </div>

        {activeTab === 'bookings' ? <BookingsTab /> : <SettingsTab />}
      </div>
    </div>
  );
}

function BookingsTab() {
  const { data: bookings, isLoading, isError, refetch, isFetching } = useGetAllBookings();
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateBookingStatus();
  const { mutate: deleteBooking, isPending: isDeleting } = useDeleteBooking();
  const [deletingId, setDeletingId] = useState<bigint | null>(null);
  const [updatingId, setUpdatingId] = useState<bigint | null>(null);

  const handleStatusChange = (booking: Booking, newStatus: BookingStatus) => {
    setUpdatingId(booking.id);
    updateStatus(
      { bookingId: booking.id, newStatus },
      { onSettled: () => setUpdatingId(null) }
    );
  };

  const handleDelete = (bookingId: bigint) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    setDeletingId(bookingId);
    deleteBooking(bookingId, { onSettled: () => setDeletingId(null) });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-brand-blue-light animate-spin" />
        <span className="text-brand-gray ml-3">Loading bookings...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 rounded-xl glass-card border-red-500/30 text-center">
        <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
        <p className="text-white font-bold mb-1">Failed to load bookings</p>
        <p className="text-brand-gray text-sm mb-4">You may need admin privileges to view bookings.</p>
        <button onClick={() => refetch()} className="btn-blue px-4 py-2 rounded text-sm">
          Try Again
        </button>
      </div>
    );
  }

  const bookingList = bookings || [];

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Bookings', value: bookingList.length, color: 'blue' },
          {
            label: 'Pending',
            value: bookingList.filter((b) => b.status === BookingStatus.pending).length,
            color: 'yellow',
          },
          {
            label: 'Confirmed',
            value: bookingList.filter((b) => b.status === BookingStatus.confirmed).length,
            color: 'blue',
          },
          {
            label: 'Completed',
            value: bookingList.filter((b) => b.status === BookingStatus.completed).length,
            color: 'green',
          },
        ].map((stat) => (
          <div key={stat.label} className="p-4 rounded-xl glass-card text-center">
            <div
              className={`text-3xl font-black mb-1 ${
                stat.color === 'blue'
                  ? 'text-brand-blue-light'
                  : stat.color === 'yellow'
                  ? 'text-yellow-400'
                  : stat.color === 'green'
                  ? 'text-green-400'
                  : 'text-white'
              }`}
            >
              {stat.value}
            </div>
            <div className="text-brand-gray text-xs uppercase tracking-wider font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Refresh button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-lg">All Bookings</h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="flex items-center gap-2 text-brand-gray hover:text-brand-blue-light transition-colors text-sm"
        >
          <RefreshCw className={`w-4 h-4 ${isFetching ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {bookingList.length === 0 ? (
        <div className="p-12 rounded-xl glass-card text-center">
          <Calendar className="w-12 h-12 text-brand-gray mx-auto mb-3" />
          <p className="text-white font-bold mb-1">No bookings yet</p>
          <p className="text-brand-gray text-sm">Bookings will appear here once customers submit the form.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookingList.map((booking) => (
            <BookingCard
              key={booking.id.toString()}
              booking={booking}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
              isUpdating={updatingId === booking.id && isUpdating}
              isDeleting={deletingId === booking.id && isDeleting}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function BookingCard({
  booking,
  onStatusChange,
  onDelete,
  isUpdating,
  isDeleting,
}: {
  booking: Booking;
  onStatusChange: (booking: Booking, status: BookingStatus) => void;
  onDelete: (id: bigint) => void;
  isUpdating: boolean;
  isDeleting: boolean;
}) {
  const createdDate = new Date(Number(booking.createdAt / BigInt(1_000_000)));

  return (
    <div className="p-5 rounded-xl glass-card">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
            <User className="w-5 h-5 text-brand-blue-light" />
          </div>
          <div>
            <p className="text-white font-bold">{booking.name}</p>
            <p className="text-brand-gray text-xs">
              Booked {createdDate.toLocaleDateString()} at{' '}
              {createdDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[booking.status]}`}>
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        <InfoItem icon={<Phone className="w-3.5 h-3.5" />} label="Phone" value={booking.phone} />
        <InfoItem icon={<Mail className="w-3.5 h-3.5" />} label="Email" value={booking.email} />
        <InfoItem
          icon={<Car className="w-3.5 h-3.5" />}
          label="Service"
          value={serviceTypeLabels[booking.serviceType] || booking.serviceType}
        />
        <InfoItem icon={<Car className="w-3.5 h-3.5" />} label="Vehicle" value={booking.vehicleInfo} />
        <InfoItem icon={<Calendar className="w-3.5 h-3.5" />} label="Preferred Date" value={booking.preferredDate} />
        {booking.notes && (
          <InfoItem icon={<FileText className="w-3.5 h-3.5" />} label="Notes" value={booking.notes} />
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <label className="text-brand-gray text-xs uppercase tracking-wider font-semibold">Status:</label>
          <select
            value={booking.status}
            onChange={(e) => onStatusChange(booking, e.target.value as BookingStatus)}
            disabled={isUpdating}
            className="bg-brand-black/60 border border-brand-blue/20 rounded px-3 py-1.5 text-white text-xs focus:outline-none focus:border-brand-blue/60 transition-colors"
          >
            <option value={BookingStatus.pending}>Pending</option>
            <option value={BookingStatus.confirmed}>Confirmed</option>
            <option value={BookingStatus.completed}>Completed</option>
          </select>
          {isUpdating && <Loader2 className="w-3.5 h-3.5 text-brand-blue-light animate-spin" />}
        </div>

        <button
          onClick={() => onDelete(booking.id)}
          disabled={isDeleting}
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold text-red-400 hover:bg-red-500/10 border border-red-500/20 hover:border-red-500/40 transition-all disabled:opacity-50"
        >
          {isDeleting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Trash2 className="w-3.5 h-3.5" />
          )}
          Delete
        </button>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-brand-blue-light mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="text-brand-gray text-xs uppercase tracking-wider font-semibold">{label}</p>
        <p className="text-white text-sm">{value}</p>
      </div>
    </div>
  );
}

function SettingsTab() {
  const { data: serviceInfo, isLoading } = useGetServiceInfo();
  const { mutate: updateServiceInfo, isPending, isError, isSuccess } = useUpdateServiceInfo();

  const [hours, setHours] = useState('');
  const [area, setArea] = useState('');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (serviceInfo && !initialized) {
      setHours(serviceInfo.hours);
      setArea(serviceInfo.area);
      setInitialized(true);
    }
  }, [serviceInfo, initialized]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateServiceInfo({ hours, area });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-brand-blue-light animate-spin" />
        <span className="text-brand-gray ml-3">Loading service info...</span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-white font-bold text-lg mb-6">Service Information</h2>

      <form onSubmit={handleSave} className="p-6 rounded-xl glass-card space-y-5">
        <div>
          <label className="flex items-center gap-2 text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
            <Clock className="w-3.5 h-3.5 text-brand-blue-light" />
            Business Hours
          </label>
          <input
            type="text"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="e.g. Mon-Sun 8am-6pm"
            className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-brand-gray text-xs uppercase tracking-wider font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 text-brand-blue-light" />
            Service Area
          </label>
          <textarea
            value={area}
            onChange={(e) => setArea(e.target.value)}
            rows={3}
            placeholder="e.g. Los Angeles County, Van Nuys, CA"
            className="w-full bg-brand-black/60 border border-brand-blue/20 rounded-lg px-4 py-3 text-white placeholder-brand-gray/50 text-sm focus:outline-none focus:border-brand-blue/60 transition-colors resize-none"
          />
        </div>

        {isError && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
            <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
            <p className="text-red-400 text-sm">Failed to save. You may need admin privileges.</p>
          </div>
        )}

        {isSuccess && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <p className="text-green-400 text-sm">Service info updated successfully!</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 btn-blue px-6 py-3 rounded-lg text-sm disabled:opacity-60"
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          Save Changes
        </button>
      </form>
    </div>
  );
}
