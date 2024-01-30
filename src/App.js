import React from "react";
import myVideo from "../src/videos/maintanance-video-compressed.mp4";
import Navbar from "./components/Navbar";
import HomeVideoComponent from "./homeComponents/HomeVideoComponent";
import CarouselSection from "./homeComponents/CarouselSection";
import ProfessionalServices from "./homeComponents/ProfessionalServices";
import SoftHardServices from "./homeComponents/SoftHardServices";
import WhyUs from "./homeComponents/WhyUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomeVideoComponent />
      <CarouselSection />
      <ProfessionalServices />
      <SoftHardServices />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;
