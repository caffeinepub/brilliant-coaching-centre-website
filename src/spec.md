# Specification

## Summary
**Goal:** Add a new "Teachers & Class Notes" section with tabbed navigation to display downloadable class notes organized by grade levels.

**Planned changes:**
- Create TeachersNotes component with bilingual title "Teachers & Class Notes" and subtitle
- Implement three tabs for class ranges: "LKG – Class 3", "Class 4 – 10", and "Class 4 – 12"
- Display notes cards for Sonali Ma'am (LKG-3, All Subjects), Abhijit Da (4-10, Mathematics), and Santanu Sir (4-12, English)
- Include teacher details: name, subject (📚), class range (🏫), experience (🎓), notes features list, and Download Notes button
- Style cards with grid layout, hover effects (lift with shadow), and responsive mobile design
- Add component to App.tsx between Teachers and Gallery sections
- Support bilingual content switching for all text using existing LanguageContext

**User-visible outcome:** Users can navigate between class ranges using tabs and view downloadable class notes from each teacher, with cards showing teacher information, subjects, experience, and key features of their notes.
