import React from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

/* ✅ Achievement images (create: src/assets/achievements/) */
import ach1a from "./assets/achievements/ach1-1.jpg";
import ach1b from "./assets/achievements/ach1-2.jpg";
import ach2a from "./assets/achievements/ach2-1.jpg";

const projects = [
  {
    title: "Finders Keepers: Digital Lost and Found",
    description: "A minimalist interface for Lost and Found items.",
    tech: ["React", "UI Design"],
    link: "https://github.com/Kaneacielo/Kane-Paul-Acielo",
  },
  {
    title: "Content Reliability Analysis (Thesis)",
    description:
      "A study on automated fake news detection using text preprocessing and machine learning evaluation.",
    tech: ["NLP", "Machine Learning"],
    link: "https://github.com/Kaneacielo/Kane-Paul-Acielo",
  },
  {
    title: "Network Monitoring & Maintenance",
    description:
      "Documentation and workflow for monitoring connectivity, troubleshooting, and preventive maintenance.",
    tech: ["Networking", "Troubleshooting"],
    link: "https://github.com/Kaneacielo/Kane-Paul-Acielo",
  },
];

const skills = [
  { title: "React", hint: "Components, hooks, UI", icon: "⚛️" },
  { title: "JavaScript", hint: "Logic, DOM, APIs", icon: "🟨" },
  { title: "HTML/CSS", hint: "Layouts, responsive design", icon: "🎨" },
  { title: "Git & GitHub", hint: "Version control, deploy", icon: "🔧" },
  { title: "Troubleshooting", hint: "Identify & fix issues", icon: "🛠️" },
  { title: "Network Monitoring", hint: "Connectivity checks", icon: "📡" },
  { title: "Device Repair", hint: "Hardware support", icon: "💻" },
  { title: "Maintenance", hint: "Preventive tasks", icon: "✅" },
];

/* ✅ NEW: Education, Achievements, Others */
const education = [
  {
    school: "Batangas State University TNEU Lipa",
    program: "BS Information Technology - Business Analytics",
    year: "2022 – Present",
    details: "Relevant coursework: Web Development, Networking, UI/UX, etc.",
  },
];

/* ✅ UPDATED: Achievements now supports images + short + details */
const achievements = [
  {
    title: "Koopnektado (Certificate of Participation) ",
    year: "2025",
    short: "Participated seminar on Digital Business Tools for Cooperative Efficiency",
    details:
      "Participated seminar on Digital Business Tools for Cooperative Efficiency",
    images: [ach1a, ach1b],
  },
  {
    title: "Thesis / Research Project",
    year: "2025",
    short: "Content Reliability Analysis",
    details:
      "Completed Content Reliability Analysis using NLP and ML evaluation, including preprocessing, model validation, and performance testing.",
    images: [ach2a],
  },
];

const others = [
  "Basic hardware troubleshooting and repair",
  "Network cabling and connectivity checks",
  "Technical documentation and reporting",
  "Team collaboration and support meetings",
];

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="navInner">
          <div className="brand">Kane Paul Acielo</div>
          <nav className="links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#achievements">Certifications</a>
            <a href="#others">Others</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div className="heroImage">
            <img src={profile} alt="Kane Paul Acielo" />
          </div>

          <div className="heroContent">
            <p className="tag">Junior IT • UI/UX Designer</p>

            <h1>
              Hi, I’m <span className="accent">Kane</span>.
            </h1>

            <p className="sub">
              I build clean, reliable web interfaces and provide ICT support like
              troubleshooting, monitoring, and maintenance.
            </p>

            <div className="cta">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <a
                key={p.title}
                className="card"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{p.title}</h3>
                <p className="muted">{p.description}</p>
                <div className="chips">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="arrow">Open →</span>
              </a>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skillsGrid">
            {skills.map((s) => (
              <SkillCard
                key={s.title}
                title={s.title}
                hint={s.hint}
                icon={s.icon}
              />
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>About</h2>
          <div className="panel">
            <p className="muted">
              I’m an ICT-focused developer and support staff who enjoys building
              modern, simple interfaces. My work includes internet troubleshooting,
              monitoring, support meetings, device repair, and preventive maintenance
              of ICT equipment.
            </p>
          </div>
        </section>

        {/* ✅ EDUCATION */}
        <section id="education" className="section">
          <h2>Education</h2>
          <div className="gridSmall">
            {education.map((e) => (
              <div className="card" key={e.school + e.program}>
                <h3>{e.school}</h3>
                <p className="muted">
                  {e.program} • {e.year}
                </p>
                <p className="muted">{e.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ ACHIEVEMENTS (Carousel Cards + Click Modal) */}
        <section id="achievements" className="section">
          <h2>Certifications</h2>
          <div className="gridSmall">
            {achievements.map((a) => (
              <AchievementCard key={a.title} achievement={a} />
            ))}
          </div>
        </section>

        {/* ✅ OTHERS */}
        <section id="others" className="section">
          <h2>Others</h2>
          <div className="panel">
            <ul className="list">
              {others.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="contact">
            <a className="iconBtn" href="mailto:youremail@example.com">
              <MailIcon />
              Email
            </a>

            <a
              className="iconBtn"
              href="https://github.com/Kaneacielo"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>

            <a
              className="iconBtn"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Kane Paul Acielo</p>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Small Components ---------- */

function SkillCard({ title, hint, icon }) {
  return (
    <div className="skillCard">
      <div className="skillIcon" aria-hidden="true">
        <span style={{ fontSize: 18 }}>{icon}</span>
      </div>
      <div>
        <div className="skillName">{title}</div>
        <div className="skillHint">{hint}</div>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m5 7 7 6 7-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2c5.52 0 10 4.58 10 10.23 0 4.52-2.87 8.35-6.84 9.7-.5.1-.68-.22-.68-.48v-1.7c0-.58-.2-.96-.43-1.16 1.41-.16 2.89-.71 2.89-3.22 0-.72-.25-1.31-.66-1.77.07-.16.29-.82-.06-1.71 0 0-.54-.18-1.77.68-.52-.15-1.07-.22-1.62-.22-.55 0-1.1.07-1.62.22-1.23-.86-1.77-.68-1.77-.68-.35.89-.13 1.55-.06 1.71-.41.46-.66 1.05-.66 1.77 0 2.5 1.47 3.06 2.88 3.22-.18.16-.35.44-.41.85-.37.17-1.33.47-1.92-.56 0 0-.35-.65-1.01-.7 0 0-.64-.01-.04.4 0 0 .43.21.73 1.02 0 0 .38 1.2 2.22.79v1.17c0 .26-.18.58-.68.48C4.87 20.58 2 16.75 2 12.23 2 6.58 6.48 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4H4v16h16V4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9.5V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"
        fill="currentColor"
      />
      <path
        d="M10.5 19v-5.3c0-1.9 1.1-3.2 2.8-3.2 1.6 0 2.2 1.1 2.2 3V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- Achievement Components ---------- */

function AchievementCard({ achievement }) {
  const { title, year, short, details, images = [] } = achievement;
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <>
      <button
        className="card achCard"
        onClick={() => setOpen(true)}
        type="button"
      >
        <div className="achMedia">
          {images.length > 0 && (
            <>
              <img src={images[index]} alt={title} />
              {images.length > 1 && (
                <>
                  <button className="achNav left" onClick={prev} type="button">
                    ‹
                  </button>
                  <button className="achNav right" onClick={next} type="button">
                    ›
                  </button>
                </>
              )}
            </>
          )}
        </div>

        <div className="achBody">
          <h3>{title}</h3>
          <p className="muted">{year}</p>
          <p className="muted">{short}</p>
          <span className="arrow">View →</span>
        </div>
      </button>

      {open && (
        <AchievementModal
          title={title}
          year={year}
          details={details}
          images={images}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function AchievementModal({ title, year, details, images, onClose }) {
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // ✅ Optional: prevent background scrolling when modal is open
  React.useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div>
            <h3>{title}</h3>
            <p className="muted">{year}</p>
          </div>
          <button className="closeBtn" onClick={onClose} type="button">
            ✕
          </button>
        </div>

        {/* ✅ Scrollable area */}
        <div className="modalBody">
          <div className="modalCarousel">
            {images.length > 0 && (
              <>
                <img src={images[index]} alt={title} />
                {images.length > 1 && (
                  <>
                    <button className="modalNav left" onClick={prev} type="button">
                      ‹
                    </button>
                    <button className="modalNav right" onClick={next} type="button">
                      ›
                    </button>
                  </>
                )}
              </>
            )}
          </div>

          <p className="modalText">{details}</p>
        </div>
      </div>
    </div>
  );
}