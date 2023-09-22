import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Team Alpha",
    video: (
      <video
        src="/images/about.mp4"
        alt="hero section"
        width="100%"
        height="325rem"
        autoPlay
        loop
        muted
        className="img-style"
      />
    ),
  };

  return (
    <>
      <HeroSection myData={data} />
      {myName}
    </>
  );
};

export default About;
