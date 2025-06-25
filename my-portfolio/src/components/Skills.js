import "../styles/Skills.css"; // Import the CSS file

export default function Skills() {
  const skills = ["Bootstrap", "HTML", "CSS", "JavaScript", "React", "Gatsby","Redux"];
  return (
    <section id="skills">
      <h2 className="skills-heading">My Skills...</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
