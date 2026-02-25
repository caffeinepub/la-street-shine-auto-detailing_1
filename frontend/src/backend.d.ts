import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ServiceInfo {
    hours: string;
    area: string;
}
export interface BookingInput {
    vehicleInfo: string;
    serviceType: ServiceType;
    name: string;
    email: string;
    preferredDate: string;
    notes: string;
    preferredTime: string;
    phone: string;
}
export interface Booking {
    id: bigint;
    status: BookingStatus;
    vehicleInfo: string;
    serviceType: ServiceType;
    name: string;
    createdAt: Time;
    email: string;
    preferredDate: string;
    notes: string;
    preferredTime: string;
    phone: string;
}
export interface ContactInfo {
    tiktok: string;
    instagram: string;
    phone: string;
}
export interface UserProfile {
    name: string;
}
export enum BookingStatus {
    pending = "pending",
    completed = "completed",
    confirmed = "confirmed"
}
export enum ServiceType {
    interiorOnly = "interiorOnly",
    exteriorOnly = "exteriorOnly",
    premiumDetail = "premiumDetail",
    motorcycleDetail = "motorcycleDetail",
    standardDetail = "standardDetail",
    rvWash = "rvWash",
    ceramicCoating = "ceramicCoating"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    clearAllBookings(): Promise<void>;
    deleteBooking(bookingId: bigint): Promise<void>;
    getAllBookings(): Promise<Array<Booking>>;
    getBooking(bookingId: bigint): Promise<Booking>;
    getBookingsByStatus(status: BookingStatus): Promise<Array<Booking>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactInfo(): Promise<ContactInfo>;
    getServiceInfo(): Promise<ServiceInfo>;
    getUpcomingBookings(): Promise<Array<Booking>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitBooking(input: BookingInput): Promise<bigint>;
    updateBookingStatus(bookingId: bigint, newStatus: BookingStatus): Promise<void>;
    updateServiceInfo(newInfo: ServiceInfo): Promise<void>;
}
