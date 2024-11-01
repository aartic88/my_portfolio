import React from "react";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import "./styles/main.css";
import Gallery from "./components/Gallery.js";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Gallery />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
