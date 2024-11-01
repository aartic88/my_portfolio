import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {/* List of projects */}
      <div class="project-list">
        <div class="project">
          <h3>Luetek Academy Application</h3>
          <p>
            <a
              href="https://academy.luetek.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Luetek Academy
            </a>
          </p>
          <p>
            <strong>Contribution:</strong> Frontend Development
          </p>
          <ul>
            <li>
              <strong>PDF Reader for Children’s Books:</strong> Integrated a PDF
              reader, enabling seamless reading of children's books and
              educational content directly on the platform.
            </li>
            <li>
              <strong>Course Creation and Material Management:</strong>{" "}
              Developed features for instructors to create courses and upload
              materials in Markdown format, providing a flexible, structured
              content management experience.
            </li>
            <li>
              <strong>Coding Challenges:</strong> Added coding challenges to
              reinforce learning, allowing users to test their understanding and
              application of key concepts.
            </li>
          </ul>
        </div>

        <div class="project">
          <h3>Stock Screener Application</h3>
          <p>
            <a
              href="https://stocks.luetek.com/stocks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Stock Screener
            </a>
          </p>
          <p>
            <strong>Contribution:</strong> Full-Stack Development using React
            and NestJs
          </p>
          <ul>
            <li>
              Built the application to help users analyze and filter stocks
              based on various financial metrics and criteria.
            </li>
            <li>Developed a REST API-based server and UI design elements.</li>
            <li>
              Implemented stock analysis features, including buy/sell/hold
              recommendations and key metric visualization using ChartJS.
            </li>
            <li>
              Designed web architecture with layered architecture, controllers,
              services, DTOs, and cron jobs.
            </li>
            <li>
              Wrote unit tests for APIs to ensure functionality of key features.
            </li>
            <li>
              Utilized TypeORM for efficient data modeling and management.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
