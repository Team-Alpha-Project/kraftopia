import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";
// import Districts from "./components/Districts";

const Home = () => {
  const data = {
    name: "kraftopia",
    video: (
      <video
        src="/images/home.mp4"
        alt="hero section"
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        className="img-style"
      />
    ),
  };

  return (
    <>
      <HeroSection myData={data} />;
      <FeatureProducts />
      {/* <Districts /> */}
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
