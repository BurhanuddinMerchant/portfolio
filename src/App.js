import { NavBar } from "./components/NavBar";
import { Contact } from "./pages/Contact/Contact";
import { Education } from "./pages/Education/Education";
import { Experiences } from "./pages/Experiences/Experiences";
import { Footer } from "./pages/Footer/Footer";
import { Home } from "./pages/Home/Home.js";
import { Organizations } from "./pages/Organizations/Organizations";
import { Projects } from "./pages/Projects/Projects";
import { Skills } from "./pages/Skills/Skills";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import React from "react";
function App() {
  return (
    <>
      <NavBar />
      <Zoom>
        <Home id="home" />
      </Zoom>
      <Fade>
        <Skills id="skills" />
      </Fade>
      <Fade>
        <Experiences id="experiences" />
      </Fade>
      <Fade>
        <Projects id="projects" />
      </Fade>
      <Fade>
        <Organizations id="organizations" />
      </Fade>
      <Fade>
        <Education id="education" />
      </Fade>
      <Fade />
      <Contact id="contact" />
      <Fade />
      <Footer />
    </>
  );
}

export default App;
