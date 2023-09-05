import { motion } from "framer-motion";
import Coyote from "../../assets/coyote.png";
const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView="show"
    >
      <div id="hero" className="pt-[120px] bg-parchment">

        {/* 1 */}
        <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
          <section className="h-1/2 px-5 flex items-center">
            <div className="ml-5 px-5 pt-[250px] pl-[70px]">
              <div className="py-1 mb-1">
                <h1 className="text-2xl font-bold">The Laughing Coyote</h1>
                <h3 className="text-2xl font-bold">
                  Web design for small businesses and creatives
                </h3>
              </div>
              <p className="pb-5">
                Why should you prefer a custom-made website, when you can simply
                use wix or wordpress? Why should you prefer a custom-made
                website, when you can simply use wix or wordpress? Because a
                custom website fits your business, personality, goals... and you
                alone.
              </p>
              <button className="dropshadow-lg bg-teal px-2 py-1 text-orange-300 hover:text-parchment dropshadow-md">
               Contact
              </button>
            </div>
          </section>

          <section className="pt-[25px]">
            <img src={Coyote} alt="" className="w-3/4" />
          </section>
        </div>

        {/* 1 */}
      </div>
    </motion.section>
  );
};

export default Hero;
