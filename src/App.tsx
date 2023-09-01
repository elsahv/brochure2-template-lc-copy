import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Designs from "./components/Designs";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
     <Header />
     <Hero />
     <About />
     <Clients />   {/*COMBINE TOGETHER*/}     
     <Designs />   {/*COMBINE TOGETHER*/}
     <ContactInfo /> 
     <Footer />
    </div>
  );
};

export default App;
