# Specification

## Summary
**Goal:** Fix the "Book Your Detail Now" hero button so clicking it smoothly scrolls the page down to the booking/contact form section.

**Planned changes:**
- Update the "Book Your Detail Now" CTA button in `Hero.tsx` to add an `onClick` handler that calls `document.getElementById('contact')` (or `'booking'`) and invokes `scrollIntoView({ behavior: 'smooth' })`
- Ensure the ContactBooking section wrapper element has a matching `id` attribute (`contact` or `booking`) as the scroll target

**User-visible outcome:** Clicking "Book Your Detail Now" in the hero section smoothly animates the page scroll down to the booking form at the bottom of the page, on both desktop and mobile.
