import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="About Us" title="Who We Are" />
        <About setPlayState={setPlayState} />
        <Title subTitle="Our PROGRAMS" title="What We Offer" />
        <Services />
        <Title subTitle="Our GALLERY" title="Activities and Events" />
        <Gallery />
        <Title subTitle="CONTACT US" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
