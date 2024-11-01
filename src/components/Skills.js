import React from "react";
import "../styles/skills.css";

const skills = [
  { name: "JavaScript" },
  { name: "React" },
  { name: "CSS" },
  { name: "Node.js" },
  { name: "Adobe Photoshop" },
  { name: "Adobe Illustrator" },
  // add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
