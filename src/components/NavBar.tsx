import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import hamburger from "../assets/icons/misc/hamburger.svg";
export const NavBar = () => {
  const [navState, setNavState] = useState({
    width: window.innerWidth,
    showNav: window.innerWidth >= 700,
  });
  const handleHide = (e: any) => {
    setNavState({ ...navState, showNav: !navState.showNav });
  };
  const handleClick = (e: any) => {};
  return (
    <>
      <div className="navbar">
        <div className="hamburger" onClick={handleHide}>
          <img src={hamburger} alt="ham" />
        </div>
        {navState.showNav ? (
          <nav>
            <div onClick={handleClick}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </div>
            <div onClick={handleClick}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </div>
            <div onClick={handleClick}>
              <Link
                to="experiences"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experiences
              </Link>
            </div>
            <div onClick={handleClick}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </div>
            <div onClick={handleClick}>
              <Link
                to="organizations"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Organizations
              </Link>
            </div>
            <div onClick={handleClick}>
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Education
              </Link>
            </div>
            <div onClick={handleClick}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </div>
            <div onClick={handleClick}>
              <a
                href="https://bmresume.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </nav>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
