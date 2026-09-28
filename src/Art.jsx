import "./Art.css";
import artBlueprint from "./assets/art-blueprint.jpg";

import art1 from "./assets/art1.jpg";
import art2 from "./assets/art2.jpg";
import art3 from "./assets/art3.jpg";
import art4 from "./assets/art4.png";
import art5 from "./assets/art5.jpg";

function Art() {
  return (
    <main className="art-page">

      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="art-nav">

        <a href="/" className="art-logo">
          M A N O J N A
        </a>

        <div className="art-nav-links">

          <a href="/photography">
            PHOTOGRAPHY →
          </a>

          <a href="/electronics">
            ELECTRONICS →
          </a>

          <a href="#contact">
            CONTACT ME →
          </a>

        </div>

      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section className="art-hero">

        <div className="art-blueprint-wrap">

          <div className="art-blueprint-glow"></div>

          <img
            src={artBlueprint}
            alt=""
            className="art-blueprint"
          />

        </div>


        <div className="art-hero-content">

          <div className="art-intro-top">

            <span>ART PORTFOLIO</span>

            <div className="art-intro-line"></div>

            <span>EST. 2026</span>

          </div>


          <span className="art-kicker">
            04 / SKETCHBOOK
          </span>


          <h1>
            ART
          </h1>


          <p>
            DRAW / PAINT / CREATE
          </p>


          <a
            href="#pencil"
            className="art-explore"
          >
            <span>
              EXPLORE MY WORK
            </span>

            <span className="art-explore-arrow">
              →
            </span>
          </a>

        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="art-intro">

        <span>
          01
        </span>

        <p>
          Some things I made because I felt like it.
        </p>

      </section>


      {/* =========================
          PENCIL
      ========================= */}

      <section
        className="sketch-section"
        id="pencil"
      >

        <div className="section-title">

          <span>
            02
          </span>

          <h2>
            PENCIL
          </h2>

        </div>


        <div className="sketch-grid">

          <div className="sketch sketch-one">

            <img
              src={art1}
              alt="Pencil sketch"
            />

            <span>
              01 / PENCIL
            </span>

          </div>


          <div className="sketch sketch-two">

            <img
              src={art2}
              alt="Pencil sketch"
            />

            <span>
              02 / PENCIL
            </span>

          </div>


          <div className="sketch sketch-three">

            <img
              src={art3}
              alt="Pencil sketch"
            />

            <span>
              03 / PENCIL
            </span>

          </div>


          <div className="sketch sketch-four">

            <img
              src={art4}
              alt="Pencil sketch"
            />

            <span>
              04 / PENCIL
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          PAINTING
      ========================= */}

      <section className="painting-section">

        <div className="section-title">

          <span>
            03
          </span>

          <h2>
            PAINT
          </h2>

        </div>


        <div className="painting-wrap">

          <img
            src={art5}
            alt="Painting"
          />

          <div className="painting-glow"></div>

        </div>

      </section>


      {/* =========================
          ENDING
      ========================= */}

      <section className="art-ending">

        <span>
          MORE SOON.
        </span>

      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="home-contact"
      >

        <div className="contact-heading">

          <span>
            04
          </span>

          <h2>
            CONTACT ME
          </h2>

        </div>


        <div className="contact-grid">


          {/* EMAIL */}

          <a
            href="mailto:sidhanmanojna@gmail.com"
            className="contact-item"
          >

            <span>
              EMAIL
            </span>

            <strong>
              sidhanmanojna@gmail.com
            </strong>

            <span className="contact-arrow">
              ↗
            </span>

          </a>


          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/capture.it_mxnx/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <span>
              INSTAGRAM
            </span>

            <strong>
              @capture.it_mxnx
            </strong>

            <span className="contact-arrow">
              ↗
            </span>

          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/manojna-siddhantapu-ba3603309/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <span>
              LINKEDIN
            </span>

            <strong>
              LINKEDIN
            </strong>

            <span className="contact-arrow">
              ↗
            </span>

          </a>


          {/* SPOTIFY */}

          <a
            href="https://open.spotify.com/user/q7gedv8nbyzbn7hn1iwzx7jsi?si=4fe635bbc5f84fd6"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <span>
              SPOTIFY
            </span>

            <strong>
              SPOTIFY
            </strong>

            <span className="contact-arrow">
              ↗
            </span>

          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <div className="home-footer">

        <span>
          CAPTURE / CREATE / PRESERVE
        </span>

        <span>
          © 2026
        </span>

      </div>


    </main>
  );
}

export default Art;