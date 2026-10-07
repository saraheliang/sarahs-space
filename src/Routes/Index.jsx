// import { Link, useLoaderData } from "react-router-dom";
import "../Styling/Index.css";
import bunnyRocket from "../Assets/bunny-rocket.png";
import sugarFrog from "../Assets/sugar-frog.png";
import bagel from "../Assets/bagel.png";
import dsi from "../Assets/dsi.png";
import plate from "../Assets/plate.png";
import laptop from "../Assets/laptop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";
import Projects from "../Components/Projects";
import { useEffect, useState } from "react";

export default function Index() {
  const roles = [
    "software developer",
    "artist",
    "foodie",
    "photographer",
    "creative/creative technologist",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    document.title = "Sarah's Space";
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [roles.length]);

  return (
    <>
      {/* TO DO - format this to be bottom center */}
      <div className="home-container">
        <div className="header">
          {/* <h1>Sarah's Space</h1> */}
          <h4>Welcome to my space — take a look around.</h4>
        </div>

        <div className="room-objects-container">
          <div className="room-object laptop">
            <Image src={laptop} fluid />
          </div>
          <div className="room-object">
            <Image src={dsi} fluid />
          </div>
          <div className="room-object">
            <Image src={plate} fluid />
          </div>
          <div className="room-object bagel">
            <Image src={bagel} fluid />
          </div>
        </div>

        <div className="description">
          <h1>
            Hi, I'm <b>Sarah</b>!
            <br />
            I'm staying curious as a{" "}
            <b
              className="rotating-role"
              key={roles[roleIndex]}
              aria-live="polite"
            >
              {roles[roleIndex]}
            </b>
          </h1>
          <p>
            I believe in spaces for exploration, trial-and-error, and growth ⁠—
            currently learning to make more mistakes.
          </p>
          {/* <div className="social-media">
            <a
              href="https://www.linkedin.com/in/saraheliang/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/saraheliang"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div> */}
        </div>
      </div>
      {/* <div className="projects-container">
        <Projects />
      </div> */}
    </>
  );
}
