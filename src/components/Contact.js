import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/contact.css";

const contactOptions = [
  { name: "YouTube", url: "", icon: faYoutube }, // No URL, will not display
  { name: "Twitter", url: "", icon: faTwitter }, // No URL, will not display
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aarti-chaudhary-7531011b4/",
    icon: faLinkedin,
  },
  { name: "GitHub", url: "https://github.com/aartic88", icon: faGithub },
  {
    name: "Instagram",
    url: "",
    icon: faInstagram,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-list">
        {contactOptions
          .filter((option) => option.url) // Filter out options without URLs
          .map((option, index) => (
            <a
              key={index}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              aria-label={option.name}
            >
              <FontAwesomeIcon icon={option.icon} size="2x" /> {/* Icon */}
            </a>
          ))}
      </div>
    </section>
  );
};

export default Contact;
