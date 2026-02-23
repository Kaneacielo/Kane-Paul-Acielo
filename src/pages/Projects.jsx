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

export default function Projects() {
  return (
    <section className="section">
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
  );
}