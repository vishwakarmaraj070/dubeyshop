import React from "react";
import Navbar from "./component/Navbar";
import IntroSection from "./pages/IntroSection";
import Footer from "./component/Footer";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Gallery from "./pages/Gallery";

const App = (props) => {
  return (
    <div id="dubey-app">
      {/* header */}
      <header>
        <Navbar />
        <IntroSection />
      </header>
      <AboutUs />
      <Team />
      <Testimonial />
      <Product />
      <Gallery />
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
