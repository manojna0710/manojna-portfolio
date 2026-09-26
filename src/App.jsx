import "./App.css";
import cameraBlueprint from "./assets/camera-blueprint.jpg";

// ===============================
// EVENTS
// ===============================
import event1 from "./assets/events/event1.jpeg";
import event2 from "./assets/events/event2.jpeg";
import event3 from "./assets/events/event3.JPG";
import event4 from "./assets/events/event4.JPG";
import event5 from "./assets/events/event5.jpg";
import event6 from "./assets/events/event6.jpeg";
import event7 from "./assets/events/event7.jpeg";
import event8 from "./assets/events/event8.JPG";
import event9 from "./assets/events/event9.jpg";
import event10 from "./assets/events/event10.jpeg";
import event11 from "./assets/events/event11.JPG";
import event12 from "./assets/events/event12.JPG";
import event13 from "./assets/events/event13.jpeg";
import event14 from "./assets/events/event14.JPG";
import event15 from "./assets/events/event15.jpeg";
import event16 from "./assets/events/event16.jpeg";
import event18 from "./assets/events/event18.JPG";
import event19 from "./assets/events/event19.JPG";
import event20 from "./assets/events/event20.jpeg";
import event21 from "./assets/events/event21.JPG";
import event22 from "./assets/events/event22.JPG";
import event23 from "./assets/events/event23.JPG";
import event24 from "./assets/events/event24.JPG";


// ===============================
// NATURE
// ===============================
import nature1 from "./assets/nature/nature1.JPG";
import nature2 from "./assets/nature/nature2.JPG";
import nature3 from "./assets/nature/nature3.jpg";
import nature4 from "./assets/nature/nature4.JPG";
import nature5 from "./assets/nature/nature5.jpg";
import nature6 from "./assets/nature/nature6.jpg";
import nature7 from "./assets/nature/nature7.JPG";
import nature8 from "./assets/nature/nature8.jpg";
import nature9 from "./assets/nature/nature9.jpeg";


// ===============================
// WILDLIFE
// ===============================
import wildlife1 from "./assets/wildlife/wildlife1.JPG";
import wildlife2 from "./assets/wildlife/wildlife2.JPG";
import wildlife3 from "./assets/wildlife/wildlife3.png";
import wildlife4 from "./assets/wildlife/wildlife4.JPG";
import wildlife5 from "./assets/wildlife/wildlife5.JPG";
import wildlife6 from "./assets/wildlife/wildlife6.JPG";
import wildlife7 from "./assets/wildlife/wildlife7.png";
import wildlife8 from "./assets/wildlife/wildlife8.png";
import wildlife9 from "./assets/wildlife/wildlife9.JPG";
import wildlife10 from "./assets/wildlife/wildlife10.JPG";
import wildlife11 from "./assets/wildlife/wildlife11.png";
import wildlife12 from "./assets/wildlife/wildlife12.png";
import wildlife13 from "./assets/wildlife/wildlife13.JPG";

// ===============================
// CAMERA BLUEPRINT
// ===============================
function CameraBlueprint() {
  return (
    <div className="camera-wrap">

      <div className="camera-glow purple"></div>
      <div className="camera-glow blue"></div>
      <div className="camera-glow red"></div>

      <div className="camera-blueprint">
        <div className="blueprint-glow purple"></div>
        <div className="blueprint-glow magenta"></div>
        <div className="blueprint-glow blue"></div>

        <img
          className="camera-blueprint-image"
          src={cameraBlueprint}
          alt="Camera blueprint"
        />
      </div>

      <div className="technical-line line-top"></div>
      <div className="technical-line line-bottom"></div>

      <div className="camera-label label-one">
        OPTICAL SYSTEM / 01
      </div>

      <div className="camera-label label-two">
        LIGHT / MOMENTS / PEOPLE
      </div>

      <div className="camera-label label-three">
        CAPTURE / CREATE / PRESERVE
      </div>

      <div className="camera-crosshair">
        +
      </div>

    </div>
  );
}


// ===============================
// IMAGE CARD
// ===============================
function PhotoCard({ image, number, title }) {
  return (
    <div className="photo-card">

      <img src={image} alt={title} />

      <div className="photo-overlay">
        <span>{number}</span>
        <span>{title}</span>
      </div>

      <div className="photo-corner"></div>

    </div>
  );
}


// ===============================
// APP
// ===============================
function App() {

  const events = [
    event1, event2, event3, event4,
    event5, event6, event7, event8,
    event9, event10, event11, event12,
    event13, event14, event15, event16,
    event18, event19, event20, event21,
    event22, event23, event24
  ];
  
  const nature = [
    nature1, nature2, nature3,
    nature4, nature5, nature6,
    nature7, nature8, nature9
  ];
  
  const wildlife = [
    wildlife1, wildlife2, wildlife3,
    wildlife4, wildlife5, wildlife6,
    wildlife7, wildlife8, wildlife9,
    wildlife10, wildlife11, wildlife12,
    wildlife13
  ];


  return (
    <main>

      {/* =====================================
          BACKGROUND GRAPHICS
      ====================================== */}

      <div className="grid-background"></div>
      <div className="grain"></div>

      <div className="crosshair crosshair-1">+</div>
      <div className="crosshair crosshair-2">+</div>
      <div className="crosshair crosshair-3">+</div>


      {/* =====================================
          NAVIGATION
      ====================================== */}

      <nav>

        <div className="nav-logo">
          M A N O J N A
        </div>

        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="nav-menu">
          <span></span>
          <span></span>
        </div>

      </nav>


      {/* =====================================
          HERO
      ====================================== */}

      <section className="hero">

        <div className="hero-left">

          <div className="eyebrow">
            <span>PHOTOGRAPHY PORTFOLIO</span>
            <div></div>
            <span>EST. 2026</span>
          </div>

          <div className="hero-title">

            <div className="section-number">
              01
            </div>

            <h1>
              Manojna
            </h1>

            <p>
              Capturing the{" "}
              <span className="gradient-text">natural aesthetics.</span>
            </p>

          </div>

          <a href="#work" className="explore">
            <span>EXPLORE MY WORK</span>
            <span className="arrow">→</span>
          </a>

          <div className="hero-description">
            LIGHT <span>/</span> MOMENTS <span>/</span>
            PEOPLE <span>/</span> NATURE <span>/</span> STORIES
          </div>

        </div>


        <div className="hero-right">

          <CameraBlueprint />

          <div className="side-text">
            THROUGH<br />
            A DIFFERENT<br />
            LENS
          </div>

        </div>

      </section>


      {/* =====================================
          SELECTED WORK
      ====================================== */}

      <section id="work" className="work">

        <div className="section-header">

          <div className="section-heading">

            <span className="section-number">
              02
            </span>

            <h2>
              SELECTED WORK
            </h2>

          </div>

          <span className="scroll-label">
            [ SCROLL ↓ ]
          </span>

        </div>


        {/* EVENTS */}

        <div className="category">

          <div className="category-title">

            <span>01</span>

            <div>
              <h3>EVENTS</h3>
              <p>PEOPLE / ENERGY / MOMENTS</p>
            </div>

            <span className="count">
              23
            </span>

          </div>


          <div className="gallery events-gallery">

            {events.map((image, index) => (
              <PhotoCard
                key={index}
                image={image}
                number={`0${index + 1}`}
                title="EVENTS"
              />
            ))}

          </div>

        </div>


        {/* NATURE */}

        <div className="category">

          <div className="category-title">

            <span>02</span>

            <div>
              <h3>NATURE</h3>
              <p>LIGHT / FORM / STILLNESS</p>
            </div>

            <span className="count">
              09
            </span>

          </div>


          <div className="gallery nature-gallery">

            {nature.map((image, index) => (
              <PhotoCard
                key={index}
                image={image}
                number={`0${index + 1}`}
                title="NATURE"
              />
            ))}

          </div>

        </div>


        {/* WILDLIFE */}

        <div className="category">

          <div className="category-title">

            <span>03</span>

            <div>
              <h3>WILDLIFE</h3>
              <p>WILD / RAW / ALIVE</p>
            </div>

            <span className="count">
              13
            </span>

          </div>


          <div className="gallery wildlife-gallery">

            {wildlife.map((image, index) => (
              <PhotoCard
                key={index}
                image={image}
                number={`0${index + 1}`}
                title="WILDLIFE"
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          ABOUT
      ====================================== */}

<section id="about" className="about">

<div className="about-number">
  04
</div>

<div className="about-content">

<h2 className="about-main-title">
  About Me
</h2>

<h3 className="about-subtitle">
  Behind the
  <em> lens.</em>
</h3>

<p>
  I'm pursuing a B.Tech in Electronics and Communication
  Engineering, but photography has always been something
  I've genuinely loved.
</p>

<p>
  I mostly find myself drawn to nature, wildlife and the
  little details that make a moment worth remembering.
  I also love photographing events — the people, energy
  and moments that happen once and never quite repeat.
</p>

<p>
  For me, photography is simply about noticing things
  differently and turning those moments into something
  I can keep.
</p>

</div>

</section>


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer id="contact">

      <div className="footer-top">
        <a
          href="https://www.instagram.com/capture.it_mxnx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM: capture.it_mxnx
        </a>

        <a href="mailto:sidhanmanojna@gmail.com">
          EMAIL: sidhanmanojna@gmail.com
        </a>
      </div>

        <div className="footer-name">
          MANOJNA
        </div>

        <div className="footer-bottom">

          <span>
            CAPTURE / CREATE / PRESERVE
          </span>

          <span>
            © 2026
          </span>

        </div>

      </footer>

    </main>
  );
}

export default App;