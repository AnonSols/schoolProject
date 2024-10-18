import Nav from "./Nav";
import { motion } from "framer-motion";
import { RiScrollToBottomLine } from "react-icons/ri";
import VisitorsCount from "./VisitorsCount";

const Header = () => {
  const textVariants = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
    initial: {
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <div>
        <img
          src="/wallpaperTwo.jpg"
          alt="background"
          className="position-absolute w-100 h-100 object-cover"
          style={{ zIndex: -99 }}
        />
      </div>
      <header
        className="d-grid h-100 w-100"
        style={{ gridTemplateRows: "auto auto 1fr" }}
      >
        <Nav />
        <div className="d-flex align-items-center justify-content-end mx-4 mt-4 text-white">
          <div>
            <VisitorsCount />
          </div>
        </div>
        <section className="d-flex flex-column h-100 mx-4">
          <motion.div
            variants={textVariants}
            className="d-flex flex-column align-items-center justify-content-center text-black bg-light bg-opacity-50 rounded p-4"
            style={{ marginTop: "15%", border: "1px solid white" }}
          >
            {/* Main Hero Text */}
            <motion.h1
              className="display-3 text-dark mb-4 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to Scratchy Nib
            </motion.h1>
            <div className="container my-5 p-4 bg-white shadow rounded">
              <h1 className="great-vibes-regular display-4 text-dark mb-4">
                Calligraphy: The Art of Beautiful Writing
              </h1>
              <p className="lead text-secondary mb-4">
                Calligraphy, derived from the Greek words "kallos" (beauty) and
                "graphein" (to write), is the art of creating elegant,
                decorative, and expressive writing...
              </p>

              <h2 className="playfair h4 text-dark mb-3">Historical Origins</h2>
              <p className="text-secondary mb-4">
                Calligraphy has a rich and diverse history, spanning cultures
                and eras...
              </p>

              <h2 className="playfair h4 text-dark mb-3">
                Styles and Techniques
              </h2>
              <p className="text-secondary mb-4">
                The world of calligraphy is vast, with many different styles,
                each characterized by its own rules, techniques, and tools...
              </p>
              <ul className="list-unstyled text-secondary mb-4">
                <li>
                  <strong className="playfair">Western Calligraphy</strong> -
                  Often based on scripts like Copperplate, Italic, and Gothic...
                </li>
                <li>
                  <strong className="playfair">Arabic Calligraphy</strong> -
                  Known for its flowing, curvilinear script...
                </li>
                <li>
                  <strong className="playfair">
                    Chinese & Japanese Calligraphy
                  </strong>{" "}
                  - Considered a high art form...
                </li>
                <li>
                  <strong className="playfair">Indic Calligraphy</strong> -
                  Featuring scripts like Devanagari and Gurmukhi...
                </li>
              </ul>

              <h2 className="playfair h4 text-dark mb-3">Modern Calligraphy</h2>
              <p className="text-secondary mb-4">
                In recent years, calligraphy has evolved into a modern,
                expressive art form...
              </p>

              <h2 className="playfair h4 text-dark mb-3">
                Tools and Materials
              </h2>
              <p className="text-secondary mb-4">
                The tools of calligraphy are varied, each lending a distinct
                style to the art...
              </p>
              <ul className="list-unstyled text-secondary mb-4">
                <li>
                  <strong className="playfair">Pens</strong>: From dip pens with
                  pointed nibs to brush pens...
                </li>
                <li>
                  <strong className="playfair">Brushes</strong>: Widely used in
                  Asian calligraphy...
                </li>
                <li>
                  <strong className="playfair">Inks</strong>: High-quality,
                  richly pigmented inks...
                </li>
                <li>
                  <strong className="playfair">Papers</strong>: Smooth,
                  high-quality paper helps avoid ink bleeding...
                </li>
              </ul>

              <h2 className="playfair h4 text-dark mb-3">
                The Beauty of Calligraphy
              </h2>
              <p className="text-secondary mb-4">
                What makes calligraphy truly special is its ability to convey
                emotion through form...
              </p>

              <h2 className="playfair h4 text-dark mb-3">Conclusion</h2>
              <p className="text-secondary mb-4">
                Calligraphy is more than just beautiful writing; it's a timeless
                art that blends history, culture, and creativity...
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            variants={textVariants}
            animate="animate"
            className="mt-5"
          >
            <a href="#Styles">
              <motion.div
                variants={textVariants}
                animate="scrollButton"
                className="text-white display-1 d-flex justify-content-center cursor-pointer"
              >
                <RiScrollToBottomLine />
              </motion.div>
            </a>
          </motion.div>
        </section>
      </header>
    </>
  );
};

export default Header;
