import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About/Index";
import Services from "./components/sections/Services";
import Designs from "./components/sections/Designs";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/sections/FAQ";

const App = () => {
  return (
    <div className="overflow-x-hidden">
     <Header />       {/* //todo: ADD SNAP TO TAILWIND*/}
     <Hero />

     <Designs />         {/* //todo: ADD BACKFLOW SITE*/}
                         {/* //? TURN INTO SLIDER ??*/}
     <About />
     <Services />         
     <FAQ />
     <Contact /> 
     <Footer />
    </div>
  );
};

export default App;
