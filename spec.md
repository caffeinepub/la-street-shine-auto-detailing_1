# Specification

## Summary
**Goal:** Remove the persistent arrow/chevron icon from the "5-Star Rated Service" card in the WhyChooseUs section.

**Planned changes:**
- Audit all JSX elements inside the "5-Star Rated Service" (or "5-Star Customer Experience") card in `WhyChooseUs.tsx` and remove any arrow, chevron, or directional icon (e.g., ArrowRight, ChevronRight, or similar) found anywhere within that card.

**User-visible outcome:** The "5-Star Rated Service" card displays with no arrow or chevron icon, while all other cards in the Why Choose Us section remain unchanged.
