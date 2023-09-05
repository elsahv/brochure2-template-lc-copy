 
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const About = () => {
  return (
    <section className="2xl:h-screen h-[100%] pt-[50px] pb-[250px] bg-parchment"
      id="about"
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
   
    </section>
  );
};

export default About;
