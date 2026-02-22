# Specification

## Summary
**Goal:** Add a "Submit Your Review" section with a form where students can share their experiences, which are stored in the backend for moderation.

**Planned changes:**
- Create a new SubmitReview component with bilingual header "Share Your Experience!" and subtitle
- Implement review submission form with fields: Full Name (required), Class/Year (required), Subject(s) Studied (optional), Your Review (required textarea), and Rating (optional 1-5 star selector)
- Add Submit Review button that validates required fields and displays confirmation toast on success
- Store submitted reviews in backend using Motoko with stable storage, including moderation flag (approved: Bool)
- Style component using clean card layout with borders/shadow, matching existing brand theme
- Integrate SubmitReview component into App.tsx below Gallery section and before AdmissionForm section

**User-visible outcome:** Students can submit reviews about their experience at Brilliant Coaching Centre through a form on the website. After submission, they see a confirmation message and the review is stored for moderation.
