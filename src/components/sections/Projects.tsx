import type React from "react";
import { asset } from "../../lib/asset";

interface Project {
  name: string;
  desc: string;
  stack: string[];
  note?: string;
  image?: string;
  link?: string;
  /** Tag text for the link chip. Defaults to "Live". */
  linkLabel?: string;
}

const CUBE_FACES = [
  { label: "FRONT FACE", color: "var(--cube-red)" },
  { label: "RIGHT FACE", color: "var(--cube-orange)" },
  { label: "TOP FACE", color: "var(--cube-yellow)" },
  { label: "LEFT FACE", color: "var(--cube-green)" },
  { label: "BOTTOM FACE", color: "var(--cube-blue)" },
  { label: "BACK FACE", color: "var(--cube-white)" },
];

const projects: Project[] = [
  {
    name: "The ONE by Camp Connection",
    desc: "Comprehensive camp management platform with modules for Guest Groups, Programs, Donors, Camp Store, R/V Tent, Operations, and Communications — serving camps across the USA with both web and mobile apps.",
    stack: ["React", "Firebase", "CLIQ Payment API"],
    note: "Foreign Client · California, USA",
    image: "/theone-landing.png",
    link: "https://theoneapp.camp/",
  },
  {
    name: "Human Resource Management System (HRMS)",
    desc: "Web platform that automates payroll computation and generates payroll reports and MBOS remittance files using DTR data, with Docker containerized dev environment.",
    stack: ["Angular", "NestJS", "Tailwind CSS", "TypeScript", "Docker"],
    image: "/hrms-landing.png",
  },
  {
    name: "Westmin Lending Platform",
    desc: "Lending web platform for Westmin Lending Corporation offering accessible loans and credit lines for farmers, traders, and local enterprises across Mindanao, with a 7-step digital loan application and ID verification flow.",
    stack: ["React", "TypeScript", "Tailwind CSS", "NestJS"],
    note: "Westmin Lending Corp · Branch of Molave Youngs Milling Corp",
    image: "/westmin-landing.jpg",
    link: "https://westmin.mymcgroup.com/",
  },
  {
    name: "MYMC Group Landing Page",
    desc: "Public-facing marketing site for Molave Youngs Milling Group — introduces the company, its agricultural and industrial products, and drives user engagement.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    note: "Molave Youngs Milling Group",
    image: "/mymc-landing.jpg",
    link: "https://go.mymcgroup.com/",
  },
  {
    name: "Procurement System",
    desc: "Internal procurement app that lets offices submit item requests, generates purchase orders, and lets admins award suppliers with dynamic quantities and rates.",
    stack: ["Angular", "NestJS", "MySQL", "Socket.IO", "TypeScript"],
    image: "/procurement-landing.png",
  },

  {
    name: "DTR Mobile App",
    desc: "React Native app that records employee time-in/out by scanning a QR-coded ID, with on-site photo capture to verify attendance. Works offline and syncs to the HRMS backend when connectivity is restored.",
    stack: ["React Native", "NestJS", "TypeScript", "Redux"],
    image: "/dtr-mobile-landing.jpg",
  },
  {
    name: "Delivery Cargo System",
    desc: "Truck-monitoring system that tracks load status, computes odometer-based driver incentives, and produces daily, monthly, and annual logistics reports.",
    stack: ["Next.js", "NestJS", "TypeScript", "MUI", "RTK Query", "Docker"],
  },

  {
    name: "NetSuite Proof of Delivery",
    desc: "Proof-of-delivery capture for field deliveries — drivers photograph the store, truck, and unloaded goods, collect the receiver's signature, and stamp the GPS location on site. Each visit posts back to the NetSuite transaction record as a Proof of Delivery subtab so operations can verify a drop without chasing paperwork.",
    stack: ["NetSuite", "SuiteScript"],
    image: "/netsuite-pod-landing.png",
  },

  {
    name: "User Management System",
    desc: "Centralized user management that grants one set of credentials access to every company system, with per-user route permissions assigned from the admin side.",
    stack: ["NestJS", "TypeScript", "MySQL"],
  },

  {
    name: "Raket — Cross-Border Payments",
    desc: "Hackathon build for Filipino freelancers getting paid from abroad. Gemini parses an uploaded quote into a structured invoice — client, line items, rates, and dates — then clients pay by card, Morph settles on-chain in seconds, and pesos land in GCash with a verifiable receipt and BIR-ready tax records.",
    stack: ["Next.js", "TypeScript", "Turborepo", "Gemini API", "Morph"],
    note: "Hackathon · TeamPagadian",
    image: "/raket-landing.png",
    link: "https://github.com/LodiAniez/teampagadian-hackathon",
    linkLabel: "Repo",
  },
];

export function Projects() {
  return (
    <section
      className="section"
      id="projects"
      aria-labelledby="projects-heading"
      data-reveal
    >
      <div className="section-inner">
        <div
          className="section-header"
          style={
            { "--section-color": "var(--cube-green)" } as React.CSSProperties
          }
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title" id="projects-heading">
            Featured Projects
          </h2>
        </div>

        <div className="projects-grid" data-reveal-stagger>
          {projects.map(({ name, desc, stack, note, image, link, linkLabel }, index) => {
            const face = CUBE_FACES[index % CUBE_FACES.length];
            const num = String(index + 1).padStart(2, "0");

            const inner = (
              <>
                {/* Cube face label */}
                <div
                  className="project-face-label"
                  style={{ "--face-color": face.color } as React.CSSProperties}
                >
                  <span
                    className="project-face-dot"
                    style={{ background: face.color }}
                  />
                  <span className="project-face-name">{face.label}</span>
                  <span className="project-face-num">— {num}</span>
                </div>

                {/* Preview image */}
                {image && (
                  <div className="project-preview">
                    <img
                      src={asset(image)}
                      alt={`${name} preview`}
                      className="project-preview-img"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Name + note */}
                <div className="project-meta">
                  <h3 className="project-name">{name}</h3>
                  {note && <p className="project-note">{note}</p>}
                </div>

                <p className="project-desc">{desc}</p>

                {/* Stack tags */}
                <div className="project-stack" aria-label="Tech stack">
                  {stack.map((tag) => (
                    <span key={tag} className="stack-tag">
                      {tag}
                    </span>
                  ))}
                  {link && (
                    <span className="stack-tag project-link-tag">
                      ↗ {linkLabel ?? "Live"}
                    </span>
                  )}
                </div>
              </>
            );

            const cardStyle = {
              "--face-color": face.color,
              borderTop: `3px solid ${face.color}`,
            } as React.CSSProperties;

            return link ? (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card project-card--linked"
                style={cardStyle}
              >
                {inner}
              </a>
            ) : (
              <article key={name} className="project-card" style={cardStyle}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
