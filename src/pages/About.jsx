import React from "react";
import Nav from "../ui/Nav.jsx";

const About = () => {
  return (
    <>
      <Nav />
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://img.freepik.com/premium-photo/negativ-ultra-hd-realistic-vivid-colors-highly-detailed-uhd-drawing-pen-ink-perfect-compo_986714-2188.jpg"
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="great-vibes-regular display-5 mb-4 text-dark">About Us</h2>
              <p className="lead text-secondary">
                We are passionate about bringing art, creativity, and tradition
                together. Our mission is to revive and celebrate the ancient art
                forms, preserving their beauty for future generations.
              </p>
              <p className="text-secondary mb-4">
                Founded by a team of enthusiasts, our platform offers a unique
                blend of traditional styles and modern techniques. We strive to
                connect the art community through workshops, exhibitions, and
                collaborations.
              </p>
              <h3 className="playfair h4 text-dark mb-3">Our Vision</h3>
              <p className="text-secondary mb-4">
                To be the leading platform that celebrates and promotes the
                timeless art of calligraphy, bridging the gap between the past
                and the present.
              </p>
              <h3 className="playfair h4 text-dark mb-3">Our Mission</h3>
              <ul className="list-unstyled text-secondary mb-4">
                <li>🌟 Promote and preserve traditional art forms.</li>
                <li>
                  🎨 Encourage creativity and expression through workshops.
                </li>
                <li>🖋️ Connect artists from around the world.</li>
                <li>
                  📚 Provide resources and tools for aspiring calligraphers.
                </li>
              </ul>
              <a href="/#contact" className="btn btn-dark">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
