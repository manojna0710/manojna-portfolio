import "./Home.css";
import phoenix from "./assets/phoenix.jpg";

function Home() {
  return (
    <main className="home-page">

      <div className="home-grain"></div>

      {/* =========================
          HERO
      ========================= */}

      <section className="home-hero">

        {/* LEFT SIDE */}

        <div className="home-left">

          <div className="home-intro">
            <span>CREATIVE PORTFOLIO</span>
            <span>EST. 2026</span>
          </div>


          <div className="home-name-row">
            <div className="home-title-wrap">
              <h1>Manojna</h1>
              <div className="home-title-glow"></div>
            </div>
          </div>


          <p className="home-subtitle">
            PHOTOGRAPHY / ELECTRONICS / ART
          </p>


          {/* OPTIONS */}

          <div className="home-options">

            <a
              href="/photography"
              className="home-option photography-option"
            >
              <span className="option-number">01</span>
              <span className="option-name">PHOTOGRAPHY</span>
              <span className="option-arrow">↗</span>
            </a>


            <a
              href="/electronics"
              className="home-option electronics-option"
            >
              <span className="option-number">02</span>
              <span className="option-name">ELECTRONICS</span>
              <span className="option-arrow">↗</span>
            </a>


            <a
              href="/art"
              className="home-option art-option"
            >
              <span className="option-number">03</span>
              <span className="option-name">ART</span>
              <span className="option-arrow">↗</span>
            </a>

          </div>

        </div>


        {/* =========================
            PHOENIX
        ========================= */}

        <div className="phoenix-side">

          <div className="phoenix-glow phoenix-glow-blue"></div>
          <div className="phoenix-glow phoenix-glow-purple"></div>
          <div className="phoenix-glow phoenix-glow-pink"></div>

          <div className="phoenix-fade"></div>

          <img
            src={phoenix}
            alt=""
            className="phoenix-image"
          />

          <div className="phoenix-label">
            REBIRTH / BUILD / CREATE
          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section className="home-contact">

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

    </main>
  );
}

export default Home;