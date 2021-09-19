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
import {
  contactdata,
  educationdata,
  organizationdata,
  experiencedata,
  projectdata,
  homedata,
  skillsdata,
} from "./data/index.js";
function App() {
  return (
    <>
      <NavBar />
      <Zoom>
        <Home id="home" data={homedata} />
      </Zoom>
      <Fade>
        <Skills id="skills" data={skillsdata} />
      </Fade>
      <Fade>
        <Experiences id="experiences" data={experiencedata} />
      </Fade>
      <Fade>
        <Projects id="projects" data={projectdata} />
      </Fade>
      <Fade>
        <Organizations id="organizations" data={organizationdata} />
      </Fade>
      <Fade>
        <Education id="education" data={educationdata} />
      </Fade>
      <Fade />
      <Contact id="contact" data={contactdata} />
      <Fade />
      <Footer />
    </>
  );
}

export default App;
