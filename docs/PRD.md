# Product Requirements Document

## Personal Portfolio Website — Alejandro T. Oletres Jr.

|                      |                                                                           |
| -------------------- | ------------------------------------------------------------------------- |
| **Document Owner**   | Alejandro T. Oletres Jr.                                                  |
| **Role Target**      | Software Engineer                                                         |
| **Status**           | Draft v1.0                                                                |
| **Reference Design** | Sidebar-profile freelancer portfolio template (see attached UI reference) |

---

## 1. Overview

Alejandro needs a personal portfolio website that presents him as a Software Engineer to prospective employers and clients. The site adapts a proven UI pattern — a persistent left profile sidebar plus a scrollable content area — and replaces its freelance-designer content with Alejandro's actual background: full-stack engineering experience, project work, and technical skill set, pulled directly from his resume.

The goal is a single-page (or lightly multi-section) site that functions as a living, more visual version of his resume — something to link from LinkedIn, GitHub, and job applications.

## 2. Goals & Objectives

- Give hiring managers a fast, visual way to assess Alejandro's skills and project experience in under 60 seconds.
- Reinforce his positioning as a **Software Engineer** (not senior/lead) with full-stack, cross-platform experience.
- Provide a downloadable copy of his resume (PDF/DOCX) directly from the site.
- Surface real project work (Requisition System, HRMS, DTR mobile app, CampConnection, etc.) with enough detail to spark interview conversation.
- Be maintainable by Alejandro alone — no CMS dependency required for v1.

## 3. Target Users

| User                                | Need                                                                                  |
| ----------------------------------- | ------------------------------------------------------------------------------------- |
| Recruiters / HR screeners           | Quick scan of role, skills, contact info, and years of experience                     |
| Hiring engineers / tech leads       | Deeper look at specific projects, stack choices, and technical depth                  |
| Potential freelance/foreign clients | Evidence of past client work (e.g., CampConnection) and ability to deliver end-to-end |
| Alejandro (site owner)              | Easy way to update content as new projects/skills are added                           |

## 4. Scope

### In Scope (v1)

- Single responsive page with sidebar + main content, adapted from the reference layout
- Sections: Profile/Hero, About, Skills, Experience Timeline, Projects, Services (optional), Contact, Resume Download
- Light/dark mode toggle (present in reference design's top-right icon)
- Mobile-responsive collapse of sidebar into a top nav/drawer

### Out of Scope (v1)

- Blog / articles section
- CMS or admin dashboard
- Multi-language support
- Client testimonials with a paid "pricing plans" section (reference template has this; not relevant to an employee job search — see Section 6 for content mapping decisions)
- Contact form backend (v1 can use a `mailto:` link or a simple form service like Formspree)

## 5. Design Reference Analysis

The provided screenshot is a freelancer-style portfolio template with this structure:

1. **Left sidebar (fixed):** circular profile photo with online-status dot, name, title, social icon row, a labeled fact table (Age / Residence / Freelance status / Address), Languages with progress bars, Skills with progress bars, Extra Skills as a checklist, and a "Download CV" button.
2. **Main hero (top):** large greeting headline ("I'm [Name] — [Role]"), short intro paragraph, a "Hire Me" CTA button, and a large photo of the person with floating decorative shapes.
3. **Services section:** heading + subtext, followed by a 3-column card grid, each with an icon, title, and short description (6 cards total, one card variant with extra copy and a CTA).
4. **Price Plans section:** heading, intended for freelance packages.
5. **Right-edge icon rail:** vertical navigation shortcuts (home, resume, about, portfolio/case, pen/blog, message).

This is a strong, professional layout. For Alejandro's use case as a job-seeking engineer (not a freelance service seller), several sections are **repurposed** rather than copied 1:1 — detailed in the mapping table below.

## 6. Content Mapping (Resume → Site Sections)

| Reference Section                                    | Adapted For Alejandro                                                                                                                                                        | Source                                          |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Sidebar profile photo, name, title                   | Photo, "Alejandro T. Oletres Jr.", "Software Engineer"                                                                                                                       | Resume header                                   |
| Sidebar fact table (Age/Residence/Freelance/Address) | Location (Molave, Zamboanga del Sur, PH), Availability status, Years of experience, Open-to-work flag                                                                        | Resume header                                   |
| Sidebar Languages                                    | Filipino (Native), English (Professional)                                                                                                                                    | New — confirm with Alejandro                    |
| Sidebar Skills (progress bars)                       | Replace with **skill category tags/pills** instead of arbitrary percentages (see Section 8 — Design Note)                                                                    | Resume: Technical Skills                        |
| Sidebar Extra Skills checklist                       | Docker, CI/CD, Git, AI-Assisted Development (Claude)                                                                                                                         | Resume: Tools & DevOps, AI-Assisted Development |
| Download CV button                                   | Downloads the finalized `.docx`/`.pdf` resume                                                                                                                                | Provided resume file                            |
| Hero "I'm [Name], [Role]"                            | "I'm Alejandro, Software Engineer"                                                                                                                                           | Resume header                                   |
| Hero intro paragraph                                 | Professional Summary paragraph (shortened to 2–3 lines)                                                                                                                      | Resume: Professional Summary                    |
| Hero "Hire Me" CTA                                   | "View My Work" or "Let's Talk" → scrolls to Projects/Contact                                                                                                                 | —                                               |
| **Services** grid                                    | Renamed **"What I Do"** — cards become: Backend Development, Frontend Development, Mobile Apps (React Native), API Integration, DevOps & Deployment, AI-Assisted Engineering | Resume: Technical Skills categories             |
| **Price Plans** section                              | **Removed** and replaced with **"Experience"** timeline (Molave Youngs Milling Corp, iPay Bayad Center)                                                                      | Resume: Professional Experience                 |
| — (new section)                                      | **"Featured Projects"** grid/cards: Requisition System, HRMS, DTR Mobile App, Delivery Cargo System, CampConnection, White House Apartment System                            | Resume: Projects                                |
| — (new section)                                      | **"Education"** small block                                                                                                                                                  | Resume: Education                               |
| Right icon rail                                      | Simplified to a sticky top nav (Home / About / Skills / Experience / Projects / Contact) for better usability outside a freelance-template context                           | —                                               |

## 7. Functional Requirements

| ID    | Requirement                                                                                                                                | Priority |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| FR-1  | Site loads as a single scrollable page with anchor navigation                                                                              | Must     |
| FR-2  | Sidebar (desktop) / collapsible drawer (mobile) displays profile summary                                                                   | Must     |
| FR-3  | "Download CV" button serves the current resume file (PDF preferred for universal viewing)                                                  | Must     |
| FR-4  | Skills are grouped by category (Backend, Frontend, Mobile, Tools) with visual tags, not arbitrary percentage bars                          | Must     |
| FR-5  | Experience section lists both roles with dates, company, and 2–3 bullet highlights each                                                    | Must     |
| FR-6  | Projects section shows each project with name, 1–2 line description, tech stack tags, and (optional) link to GitHub/live demo if available | Must     |
| FR-7  | Contact section provides email (mailto), phone, and GitHub link at minimum                                                                 | Must     |
| FR-8  | Light/dark theme toggle persists via local storage                                                                                         | Should   |
| FR-9  | Social links (GitHub at minimum; LinkedIn if created) open in new tab                                                                      | Should   |
| FR-10 | Page is responsive from 360px to 1920px viewport widths                                                                                    | Must     |
| FR-11 | Basic SEO meta tags (title, description, OG image) for shareability                                                                        | Should   |
| FR-12 | Site achieves Lighthouse performance score ≥ 90 on desktop                                                                                 | Could    |

## 8. Design Notes

- **Color palette:** Reference uses amber/orange (#F5A623-ish) as the primary accent against white cards and dark near-black text. Recommend keeping a similar warm accent for personality, or aligning to the navy/steel-blue palette already used in Alejandro's resume for brand consistency across his job-search materials. **Decision needed from Alejandro.**
- **Typography:** Clean sans-serif (the reference uses a rounded geometric sans). Any modern system font (Inter, Poppins, or the resume's Calibri-adjacent choice) will work.
- **Skill display:** Recommend replacing arbitrary percentage bars (subjective and hard to defend in an interview) with grouped skill tags/pills, matching the resume's "Backend / Frontend / Mobile / Tools" categorization for consistency.
- **Photo:** Use the same professional headshot already applied to the resume for visual consistency across materials.
- **Iconography:** Reuse simple line icons (code brackets, layout, server, smartphone) for the "What I Do" cards, matching the reference style but swapped to engineering-relevant icons instead of design/photography/sound icons.

## 9. Technical Requirements

| Area                 | Recommendation                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Stack                | React (Vite) or Next.js — leverages Alejandro's existing React/Next.js expertise, doubles as a portfolio proof point |
| Styling              | Tailwind CSS — already in his stack, fast to implement the card-grid + sidebar layout                                |
| Hosting              | Vercel or Netlify (free tier, trivial deploy from GitHub)                                                            |
| Resume file          | Stored as a static asset (`/resume.pdf`) and linked from Download CV button                                          |
| Analytics (optional) | Lightweight, privacy-friendly analytics (e.g., Plausible) to track recruiter visits                                  |
| Version control      | Public GitHub repo — doubles as a live example of code quality for reviewers                                         |

## 10. Success Metrics

- Site is live and linked from resume, LinkedIn, and GitHub profile within 2 weeks.
- Resume download completes without errors across major browsers.
- Page loads in under 2 seconds on a standard broadband connection.
- At least one interview or client inquiry attributable to the portfolio link within the first month of job search activity (self-reported).

## 11. Open Questions

1. Does Alejandro want a color palette matching his resume (navy/steel) or keeping something closer to the reference template's warm amber tone?
2. Should project cards link out to live demos or GitHub repos, or stay description-only (some projects are internal company systems with no public repo)?
3. Is a contact form needed, or is `mailto:` sufficient for v1?
4. Should the site include a LinkedIn profile link (none currently listed on the resume)?

## 12. Milestones (Suggested)

| Milestone                                         | Target |
| ------------------------------------------------- | ------ |
| Content finalized (copy for all sections)         | Week 1 |
| Static design/wireframe approved                  | Week 1 |
| Development (build all sections, responsive)      | Week 2 |
| QA across devices/browsers + resume download test | Week 2 |
| Deploy to production domain                       | Week 3 |
