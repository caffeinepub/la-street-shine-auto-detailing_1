import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Text "mo:core/Text";
import List "mo:core/List";
import Option "mo:core/Option";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";



actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type BookingStatus = { #pending; #confirmed; #completed };

  public type ServiceType = {
    #exteriorOnly;
    #interiorOnly;
    #standardDetail;
    #premiumDetail;
    #ceramicCoating;
    #rvWash;
    #motorcycleDetail;
  };

  public type Booking = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    serviceType : ServiceType;
    vehicleInfo : Text;
    preferredDate : Text;
    preferredTime : Text; // New field
    notes : Text;
    status : BookingStatus;
    createdAt : Time.Time;
  };

  public type BookingInput = {
    name : Text;
    phone : Text;
    email : Text;
    serviceType : ServiceType;
    vehicleInfo : Text;
    preferredDate : Text;
    preferredTime : Text; // New field in input
    notes : Text;
  };

  public type ServiceInfo = {
    hours : Text;
    area : Text;
  };

  public type ContactInfo = {
    phone : Text;
    instagram : Text;
    tiktok : Text;
  };

  public type UserProfile = {
    name : Text;
  };

  module Booking {
    public func compareByPreferredDate(b1 : Booking, b2 : Booking) : Order.Order {
      Text.compare(b1.preferredDate, b2.preferredDate);
    };
  };

  let bookings = Map.empty<Nat, Booking>();
  var nextId = 1;
  var serviceInfo : ServiceInfo = {
    hours = "Mon-Sun 8am-6pm";
    area = "Los Angeles County";
  };
  let contactInfo : ContactInfo = {
    phone = "(909) 441-1114";
    instagram = "@lastreetshineautodetail";
    tiktok = "@lastreetshineautodetail";
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func submitBooking(input : BookingInput) : async Nat {
    let id = nextId;
    let newBooking : Booking = {
      id;
      name = input.name;
      phone = input.phone;
      email = input.email;
      serviceType = input.serviceType;
      vehicleInfo = input.vehicleInfo;
      preferredDate = input.preferredDate;
      preferredTime = input.preferredTime;
      notes = input.notes;
      status = #pending;
      createdAt = Time.now();
    };
    bookings.add(id, newBooking);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access all bookings");
    };
    bookings.values().toArray().sort(Booking.compareByPreferredDate);
  };

  public shared ({ caller }) func updateBookingStatus(bookingId : Nat, newStatus : BookingStatus) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update booking status");
    };
    switch (bookings.get(bookingId)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) {
        let updatedBooking = { booking with status = newStatus };
        bookings.add(bookingId, updatedBooking);
      };
    };
  };

  public shared ({ caller }) func deleteBooking(bookingId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete bookings");
    };
    if (not bookings.containsKey(bookingId)) {
      Runtime.trap("Booking not found");
    };
    bookings.remove(bookingId);
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };

  public query ({ caller }) func getServiceInfo() : async ServiceInfo {
    serviceInfo;
  };

  public shared ({ caller }) func updateServiceInfo(newInfo : ServiceInfo) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update service info");
    };
    serviceInfo := newInfo;
  };

  public query ({ caller }) func getBooking(bookingId : Nat) : async Booking {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view booking details");
    };
    switch (bookings.get(bookingId)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) { booking };
    };
  };

  public query ({ caller }) func getBookingsByStatus(status : BookingStatus) : async [Booking] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can filter bookings by status");
    };
    bookings.values().toArray().values().filter(func(booking) { booking.status == status }).toArray();
  };

  public query ({ caller }) func getUpcomingBookings() : async [Booking] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view upcoming bookings");
    };
    let pendingAndConfirmed = bookings.values().toArray().values().filter(
      func(booking) { booking.status != #completed }
    );
    pendingAndConfirmed.toArray().sort(Booking.compareByPreferredDate);
  };

  public shared ({ caller }) func clearAllBookings() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can clear all bookings");
    };
    bookings.clear();
    nextId := 1;
  };
};
