// import { Link, useLoaderData } from "react-router-dom";
import "../Styling/Index.css";
import profileImage from "../Assets/bunny-rocket.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";
import Projects from "../Components/Projects";
import { useEffect, useState } from "react";

export default function Index() {
  const roles = ["software developer", "artist", "foodie", "photographer"];
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
      <div className="parent index-page d-flex align-items-center">
        <div className="child">
          <h1>
            Hi, I'm <b>Sarah</b>!
            <br />
            I'm staying curious as a <br />
            <b
              className="rotating-role"
              key={roles[roleIndex]}
              aria-live="polite"
            >
              {roles[roleIndex]}
            </b>
            .
          </h1>
          <p>
            I believe in spaces for exploration, trial-and-error, and growth ✨.
            Currently learning to make more mistakes.
          </p>
          <div className="social-media">
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
          </div>
        </div>
        <div className="image d-flex justify-content-center">
          <Image src={profileImage} fluid />
        </div>
      </div>
      <div className="projects-container">
        <Projects />
      </div>
    </>
  );
}
