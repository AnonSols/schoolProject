// import Nav from "./Nav";
import Header from "./Header";
import Styles from "../pages/Styles";
import Gallery from "../ui/Gallery";
import Feedback from "../pages/Feedback";
import Contact from "../pages/Contact";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <>
      <section id="Homepage">
        <Header />
      </section>
      <section id="Styles">
        <Styles />
      </section>
      <section id="Gallery">
        <Gallery />
      </section>
      <section id="Feedback">
        <Feedback />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
