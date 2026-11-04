import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Download,
  GitBranch,
  GraduationCap,
  Layers3,
  BriefcaseBusiness,
  Mail,
  Menu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import "./App.css";

/* ==========================================
   PROFILE CONFIGURATION
   ========================================== */

const PROFILE = {
  github: "https://github.com/osegala",
  linkedin: "https://www.linkedin.com/in/owen-segala-4390522ba",
  email: "owen.segala@gmail.com",

  // Place the PDF inside the public folder.
  resume: "/Owen_Segala_Resume.docx.pdf",
  resumeAvailable: true,
};

/* ==========================================
   PROJECT LINKS
   ========================================== */

const PROJECTS = {
  evrenthia: "https://github.com/osegala/lifexp",
  groupProject: "https://github.com/kartikthakur7107/COSC439-GroupProject",
  authentication: "https://github.com/osegala/CIS377",
};

/* ==========================================
   TECHNICAL SKILLS
   ========================================== */

const skills = [
  {
    heading: "Languages",
    icon: Braces,
    items: ["TypeScript", "JavaScript", "Java", "Python"],
  },
  {
    heading: "Frontend",
    icon: Layers3,
    items: ["React Native", "React", "Expo", "HTML & CSS"],
  },
  {
    heading: "Backend",
    icon: Terminal,
    items: ["Node.js", "Spring Boot", "REST APIs", "JWT"],
  },
  {
    heading: "Cloud & Data",
    icon: Cloud,
    items: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Amazon Cognito",
      "PostgreSQL",
    ],
  },
];

/* ==========================================
   SOCIAL LINKS
   ========================================== */

type SocialType = "github" | "linkedin" | "email";

function SocialLink({
  type,
  className = "",
}: {
  type: SocialType;
  className?: string;
}) {
  const config = {
    github: {
      url: PROFILE.github,
      label: "GitHub",
      Icon: GitBranch,
    },
    linkedin: {
      url: PROFILE.linkedin,
      label: "LinkedIn",
      Icon: BriefcaseBusiness,
    },
    email: {
      url: `mailto:${PROFILE.email}`,
      label: "Email",
      Icon: Mail,
    },
  }[type];

  const { Icon } = config;

  return (
    <a
      className={`social-link ${className}`}
      href={config.url}
      aria-label={config.label}
      target={type === "email" ? undefined : "_blank"}
      rel={type === "email" ? undefined : "noopener noreferrer"}
    >
      <Icon size={19} aria-hidden="true" />
    </a>
  );
}

/* ==========================================
   SECTION HEADING
   ========================================== */

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-line" />
        {label}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

/* ==========================================
   HERO CODE WINDOW
   ========================================== */

function CodeWindow() {
  return (
    <div className="hero-art" aria-label="Decorative code illustration">
      <div className="code-window">
        <div className="window-head">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>

          <span>portfolio.tsx</span>

          <Code2 size={15} />
        </div>

        <div className="code-body">
          <div>
            <span className="line-number">01</span>{" "}
            <span className="syntax-purple">const</span> developer ={" "}
            <span className="syntax-blue">{"{"}</span>
          </div>

          <div>
            <span className="line-number">02</span>
            {"  "} name: <span className="syntax-green">'Owen Segala'</span>,
          </div>

          <div>
            <span className="line-number">03</span>
            {"  "} focus:{" "}
            <span className="syntax-green">'Software Engineering'</span>,
          </div>

          <div>
            <span className="line-number">04</span>
            {"  "} passion:{" "}
            <span className="syntax-green">'Building things'</span>,
          </div>

          <div>
            <span className="line-number">05</span>
            {"  "} mindset:{" "}
            <span className="syntax-green">'Always learning'</span>
          </div>

          <div>
            <span className="line-number">06</span>{" "}
            <span className="syntax-blue">{"}"}</span>
          </div>

          <div>
            <span className="line-number">07</span>
          </div>

          <div>
            <span className="line-number">08</span>{" "}
            <span className="syntax-purple">export default</span> developer
            <span className="cursor" />
          </div>
        </div>

        <div className="window-footer">
          <span>
            <span className="status-light" />
            ALL SYSTEMS READY
          </span>
          <span>TSX</span>
        </div>
      </div>

      <span className="float-tag tag-top">
        <Sparkles size={15} />
        BUILD. ITERATE. SHIP.
      </span>

      <span className="float-tag tag-bottom">
        <Zap size={15} />
        IDEAS → IMPACT
      </span>
    </div>
  );
}

/* ==========================================
   EVRENTHIA PREVIEW
   ========================================== */

function EvrenthiaPreview() {
  return (
    <div className="featured-visual evrenthia-preview">
      <div className="showcase-label">
        EVRENTHIA <span> / REAL APP SCREENSHOT</span>
      </div>

      <div className="evrenthia-screenshot-frame">
        <img
          src="/evrenthia-home.png"
          alt="Evrenthia mobile app showing its fantasy world, avatar, experience progression, and daily tasks."
          className="evrenthia-screenshot"
          loading="lazy"
        />
      </div>

      <div className="visual-caption">EVRENTHIA — GAMIFIED PRODUCTIVITY</div>
    </div>
  );
}

/* ==========================================
   FEATURED PROJECT
   ========================================== */

function FeaturedProject() {
  return (
    <article className="featured-project">
      <div className="featured-details">
        <div className="project-overline">
          <span className="project-index">01 — FEATURED PROJECT</span>
          <span className="project-type">MOBILE / FULL STACK</span>
        </div>

        <div className="project-icon">
          <Smartphone size={30} />
        </div>

        <h3>
          Evrenthia
          <span className="project-star">✳</span>
        </h3>

        <p className="project-subtitle">
          Making everyday progress feel like an adventure.
        </p>

        <p className="project-description">
          A gamified productivity application that turns everyday activities
          into an engaging experience through tasks, XP, progression,
          achievements, and avatar customization.
        </p>

        <ul className="project-highlights">
          <li>
            <Check size={16} />
            React Native mobile application built with Expo
          </li>

          <li>
            <Check size={16} />
            Serverless AWS backend using Lambda, API Gateway, and DynamoDB
          </li>

          <li>
            <Check size={16} />
            Secure authentication through Amazon Cognito
          </li>

          <li>
            <Check size={16} />
            Server-side reward validation and transactional data updates
          </li>
        </ul>

        <div className="chip-row">
          <span>React Native</span>
          <span>TypeScript</span>
          <span>AWS</span>
          <span>DynamoDB</span>
          <span>Cognito</span>
        </div>

        <a
          className="project-link"
          href={PROJECTS.evrenthia}
          target="_blank"
          rel="noopener noreferrer"
        >
          View repository <ArrowUpRight size={18} />
        </a>
      </div>

      <EvrenthiaPreview />
    </article>
  );
}

/* ==========================================
   OTHER PROJECTS
   ========================================== */

function OtherProjects() {
  return (
    <div className="projects-grid">
      {/* COSC439 Group Project */}

      <article className="project-card">
        <div className="card-top">
          <div className="card-icon">
            <Code2 size={25} />
          </div>

          <span>02 / JAVA</span>
        </div>

        <h3>COSC439 — Group Project</h3>

        <p>
          A collaborative university software development project using Java.
          Worked with a development team on programming, integrating components,
          and solving technical challenges.
        </p>

        <div className="chip-row">
          <span>Java</span>
          <span>Team Project</span>
          <span>Software Development</span>
        </div>

        <a
          className="card-footer clickable"
          href={PROJECTS.groupProject}
          target="_blank"
          rel="noopener noreferrer"
        >
          View repository <ArrowUpRight size={17} />
        </a>
      </article>

      {/* Multi-Factor Authentication */}

      <article className="project-card">
        <div className="card-top">
          <div className="card-icon">
            <ShieldCheck size={25} />
          </div>

          <span>03 / WEB</span>
        </div>

        <h3>Multi-Factor Login</h3>

        <p>
          An academic web development project featuring a login interface with
          multi-factor authentication functionality, demonstrating foundational
          web development and authentication concepts.
        </p>

        <div className="chip-row">
          <span>Web Development</span>
          <span>Authentication</span>
          <span>CSS</span>
        </div>

        <a
          className="card-footer clickable"
          href={PROJECTS.authentication}
          target="_blank"
          rel="noopener noreferrer"
        >
          View repository <ArrowUpRight size={17} />
        </a>
      </article>
    </div>
  );
}

/* ==========================================
   MAIN APPLICATION
   ========================================== */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const nav = [
    ["About", "#about"],
    ["Work", "#work"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      {/* Navigation */}

      <header className="site-header">
        <div className="container nav-inner">
          <a
            className="wordmark"
            href="#top"
            onClick={closeMenu}
            aria-label="Owen Segala, back to top"
          >
            <span className="mark">
              OS<span className="mark-dot">.</span>
            </span>

            <span className="wordmark-text">owen / segala</span>
          </a>

          <nav
            className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}

            <a
              className="nav-mobile-contact"
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              GitHub <ArrowUpRight size={15} />
            </a>
          </nav>

          <a className="nav-cta" href="#contact">
            Let's connect <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* ==================================
            HERO
           ================================== */}

        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse-dot" />
              Open to software engineering opportunities
            </div>

            <div className="micro-label">
              HELLO, I'M OWEN SEGALA
              <span> / DEVELOPER & BUILDER</span>
            </div>

            <h1 id="hero-title">
              Building ideas
              <br />
              into <span className="gradient-text">real software.</span>
            </h1>

            <p className="hero-description">
              I'm a Computer Science graduate who loves turning complex problems
              into thoughtful, working products — from mobile experiences to
              scalable cloud systems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work
                <ArrowUpRight size={18} />
              </a>

              <a className="button button-secondary" href="#about">
                More about me
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-foot">
              <div className="social-links">
                <SocialLink type="github" />
                <SocialLink type="linkedin" />
                <SocialLink type="email" />
              </div>

              <span className="hero-foot-rule" />

              <span className="hero-foot-note">BASED IN MARYLAND, USA</span>
            </div>
          </div>

          <CodeWindow />

          <a href="#about" className="scroll-cue">
            SCROLL TO EXPLORE
            <ChevronDown size={15} />
          </a>
        </section>

        {/* ==================================
            ABOUT
           ================================== */}

        <section id="about" className="section about-section container">
          <SectionHeading
            label="01 / THE PERSON"
            title="Curious by nature. Driven to build."
          />

          <div className="about-grid">
            <div className="about-intro">
              <span className="quote-mark">“</span>

              <p>
                I don't just want to write code. I want to create software that
                people actually <em>use.</em>
              </p>
            </div>

            <div className="about-body">
              <p>
                I'm Owen, a Computer Science graduate from{" "}
                <strong>Towson University</strong>. I enjoy working across the
                stack — designing intuitive interfaces, engineering reliable
                APIs, and deploying services in the cloud.
              </p>

              <p>
                Most recently, I've been developing <strong>Evrenthia</strong>,
                a gamified productivity mobile app. Building it has given me
                hands-on experience with React Native, AWS serverless
                architecture, authentication, and data consistency.
              </p>

              <div className="about-facts">
                <div>
                  <GraduationCap size={21} />

                  <span>
                    <strong>Towson University</strong>
                    <small>Computer Science</small>
                  </span>
                </div>

                <div>
                  <Cloud size={21} />

                  <span>
                    <strong>Full-stack & cloud</strong>
                    <small>Frontend to infrastructure</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================
            PROJECTS
           ================================== */}

        <section id="work" className="section work-section">
          <div className="container">
            <SectionHeading
              label="02 / SELECTED WORK"
              title="Projects with purpose."
              description="A selection of software projects I've worked on — what I built, why it matters, and the technologies behind them."
            />

            <FeaturedProject />

            <OtherProjects />
          </div>
        </section>

        {/* ==================================
            SKILLS
           ================================== */}

        <section id="skills" className="section skills-section container">
          <SectionHeading
            label="03 / THE TOOLKIT"
            title="Tools of the trade."
            description="Technologies I've worked with while building web, mobile, and cloud-based applications."
          />

          <div className="skills-grid">
            {skills.map(({ heading, icon: Icon, items }) => (
              <div className="skill-card" key={heading}>
                <div className="skill-title">
                  <Icon size={23} />
                  <h3>{heading}</h3>
                </div>

                <div className="skill-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skill-marquee" aria-hidden="true">
            <Code2 size={20} />
            DESIGN
            <span>✳</span>
            DEVELOP
            <span>✳</span>
            DEPLOY
            <span>✳</span>
            REPEAT
            <ArrowRight size={20} />
          </div>
        </section>

        {/* ==================================
            CONTACT
           ================================== */}

        <section id="contact" className="section contact-section">
          <div className="container contact-inner">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              04 / WHAT'S NEXT
            </span>

            <h2>
              Have an opportunity
              <br />
              or an <span className="gradient-text">interesting idea?</span>
            </h2>

            <p>
              I'm interested in software engineering opportunities, meaningful
              projects, and connecting with people who love building technology.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                  "Software Engineering Opportunity",
                )}`}
              >
                Get in touch <Mail size={18} />
              </a>

              <a
                className="button button-secondary"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my GitHub
                <GitBranch size={18} />
              </a>

              <a
                className="button button-secondary"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={18} />
              </a>
            </div>

            {PROFILE.resumeAvailable && (
              <div className="resume-row">
                <span>WANT THE SHORT VERSION?</span>

                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my résumé
                  <Download size={17} />
                </a>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ==================================
          FOOTER
         ================================== */}

      <footer className="site-footer container">
        <a href="#top" className="footer-mark" aria-label="Back to top">
          OS<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Owen Segala. Built with React, TypeScript
          & curiosity.
        </p>

        <div className="footer-links">
          <SocialLink type="github" />
          <SocialLink type="linkedin" />

          <a href="#top" aria-label="Back to top">
            <ArrowUpRight size={19} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
