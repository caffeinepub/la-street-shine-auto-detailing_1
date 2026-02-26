import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type BookingInput, type BookingStatus, type ServiceInfo, type Booking } from '../backend';

// ─── Submit Booking ───────────────────────────────────────────────────────────
export function useSubmitBooking() {
  const { actor } = useActor();

  return useMutation<bigint, Error, BookingInput>({
    mutationFn: async (input: BookingInput) => {
      if (!actor) throw new Error('Service unavailable. Please try again.');
      return actor.submitBooking(input);
    },
  });
}

// ─── Get All Bookings ─────────────────────────────────────────────────────────
export function useGetAllBookings() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Booking[]>({
    queryKey: ['allBookings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookings();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}

// ─── Update Booking Status ────────────────────────────────────────────────────
export function useUpdateBookingStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<void, Error, { bookingId: bigint; newStatus: BookingStatus }>({
    mutationFn: async ({ bookingId, newStatus }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateBookingStatus(bookingId, newStatus);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allBookings'] });
    },
  });
}

// ─── Delete Booking ───────────────────────────────────────────────────────────
export function useDeleteBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<void, Error, bigint>({
    mutationFn: async (bookingId: bigint) => {
      if (!actor) throw new Error('Actor not available');
      return actor.deleteBooking(bookingId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allBookings'] });
    },
  });
}

// ─── Get Service Info ─────────────────────────────────────────────────────────
export function useGetServiceInfo() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ServiceInfo>({
    queryKey: ['serviceInfo'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getServiceInfo();
    },
    enabled: !!actor && !actorFetching,
  });
}

// ─── Update Service Info ──────────────────────────────────────────────────────
export function useUpdateServiceInfo() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<void, Error, ServiceInfo>({
    mutationFn: async (newInfo: ServiceInfo) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateServiceInfo(newInfo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['serviceInfo'] });
    },
  });
}
