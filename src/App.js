import { NavBar } from "./components/NavBar";
import { Contact } from "./pages/Contact/Contact";
import { Education } from "./pages/Education/Education";
import { Experiences } from "./pages/Experiences/Experiences";
import { Footer } from "./pages/Footer/Footer";
import { Home } from "./pages/Home/Home.js";
import { Organizations } from "./pages/Organizations/Organizations";
import { Projects } from "./pages/Projects/Projects";
import { Skills } from "./pages/Skills/Skills";
import React from "react";
function App() {
  return (
    <>
      <NavBar />
      <Home id="home" />
      <Skills id="skills" />
      <Experiences id="experiences" />
      <Projects id="projects" />
      <Organizations id="organizations" />
      <Education id="education" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
