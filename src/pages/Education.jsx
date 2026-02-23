const education = [
  {
    school: "Your School Name",
    program: "BS Information Technology (Edit this)",
    year: "2022 – Present",
    details: "Relevant coursework: Web Development, Networking, UI/UX, etc.",
  },
];

const achievements = [
  {
    title: "UI/UX Project Completion",
    year: "2025",
    details: "Designed and developed multiple minimalist web interfaces.",
  },
  {
    title: "Thesis / Research Project",
    year: "2025",
    details: "Completed Content Reliability Analysis using ML/NLP evaluation.",
  },
];

export default function Education() {
  return (
    <>
      <section className="section">
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

      <section className="section">
        <h2>Achievements</h2>
        <div className="gridSmall">
          {achievements.map((a) => (
            <div className="card" key={a.title}>
              <h3>{a.title}</h3>
              <p className="muted">{a.year}</p>
              <p className="muted">{a.details}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}