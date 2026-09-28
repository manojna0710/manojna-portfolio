import "./Electronics.css";
import electronicsBrain from "./assets/electronics-brain.jpg";
import { Link } from "react-router-dom";

function Electronics() {
  return (
    <main className="electronics-page">

    <nav className="electronics-nav">
      <Link to="/" className="electronics-logo">
        M A N O J N A
      </Link>

      <div className="electronics-nav-links">
        <Link to="/photography">PHOTOGRAPHY →</Link>
        <Link to="/art">ART →</Link>
        <Link to="#contact">
          CONTACT ME →
        </Link>
      </div>
    </nav>

      <section className="electronics-projects" id="projects">

      <div className="electronics-hero-content">
        <div className="electronics-intro-top">
          <span>ELECTRONICS PORTFOLIO</span>
          <div className="electronics-intro-line"></div>
          <span>EST. 2026</span>
        </div>

        <h1>ELECTRONICS</h1>

        <p className="electronics-tagline">
          DESIGN / BUILD / EXPERIMENT
        </p>

        <Link to="#pid" className="electronics-explore">
          <span>EXPLORE MY WORK</span>
          <span className="electronics-explore-arrow">→</span>
        </Link>
      </div>

      <div className="electronics-brain-wrap">
        <img
          src={electronicsBrain}
          alt=""
          className="electronics-brain"
        />
      </div>

      </section>


      <section className="electronics-projects">

        <div className="electronics-section-heading">
          <span>02</span>
          <h2>SELECTED PROJECTS</h2>
        </div>


        <article className="electronics-project" id="pid">
          <span className="project-number">01</span>

          <div className="project-content">
            <h3>PID AUTONOMOUS CAR</h3>

            <p>
            An autonomous vehicle that uses ultrasonic distance sensing,
            motor control and PID feedback to continuously adjust its speed
            and maintain a defined target distance.
            </p>

            <div className="project-tech">
              <span>ATMEGA32A</span>
              <span>HC-SR04</span>
              <span>L293D</span>
              <span>PID</span>
              <span>EMBEDDED C</span>
            </div>
          </div>
        </article>


        <article className="electronics-project">
          <span className="project-number">02</span>

          <div className="project-content">
            <h3>RC CAR</h3>

            <p>
            A remotely controlled embedded vehicle built around a custom
            electronics system, combining motor control, wireless communication
            and microcontroller-based control.
            </p>

            <div className="project-tech">
              <span>MICROCONTROLLER</span>
              <span>MOTOR CONTROL</span>
              <span>WIRELESS</span>
            </div>
          </div>
        </article>


        <article className="electronics-project">
          <span className="project-number">03</span>

          <div className="project-content">
            <h3>ECG</h3>

            <p>
              An ECG project focused on capturing and processing
              electrical signals from the human heart.
            </p>

            <div className="project-tech">
              <span>SIGNAL PROCESSING</span>
              <span>SENSORS</span>
              <span>EMBEDDED</span>
            </div>
          </div>
        </article>


        <article className="electronics-project">
          <span className="project-number">04</span>

          <div className="project-content">
            <h3>POMODORO TIMER</h3>

            <p>
              A custom Arduino-based Pomodoro timer with
              interrupt-driven timing, buttons, LCD display
              and EEPROM storage.
            </p>

            <div className="project-tech">
              <span>ARDUINO UNO</span>
              <span>LCD</span>
              <span>EEPROM</span>
              <span>INTERRUPTS</span>
            </div>
          </div>
        </article>


        <article className="electronics-project">
          <span className="project-number">05</span>

          <div className="project-content">
            <h3>ARDUINO MINI PROJECTS</h3>

            <p>
              Small experiments, games and interactive builds
              made while exploring embedded systems.
            </p>

            <div className="project-tech">
              <span>ARDUINO</span>
              <span>SENSORS</span>
              <span>GAMES</span>
              <span>EXPERIMENTS</span>
            </div>
          </div>
        </article>

      </section>

      {/* =========================
    CONTACT
========================= */}

        <section id="contact" className="home-contact"> 

        <div className="contact-heading">
          <span>04</span>
          <h2>CONTACT ME</h2>
        </div>

        <div className="contact-grid">

          <a
            href="mailto:sidhanmanojna@gmail.com"
            className="contact-item"
          >
            <span>EMAIL</span>
            <strong>sidhanmanojna@gmail.com</strong>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://www.instagram.com/capture.it_mxnx/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>INSTAGRAM</span>
            <strong>@capture.it_mxnx</strong>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/manojna-siddhantapu-ba3603309/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>LINKEDIN</span>
            <strong>LINKEDIN</strong>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://open.spotify.com/user/q7gedv8nbyzbn7hn1iwzx7jsi?si=4fe635bbc5f84fd6"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>SPOTIFY</span>
            <strong>SPOTIFY</strong>
            <span className="contact-arrow">↗</span>
          </a>

        </div>

        </section>

        {/* =========================
          FOOTER
        ========================= */}

        <div className="home-footer">
        <span>HYDERABAD / INDIA</span>
        <span>CAPTURE / BUILD / CREATE</span>
        </div>

      

      <div className="home-footer">
        <span>CAPTURE / BUILD / CREATE</span>
        <span>© 2026</span>
      </div>

    </main>
  );
}

export default Electronics;