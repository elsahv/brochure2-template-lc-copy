import AboutImg from "../assets/screenshots/designs/-hero.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
   
      className="2xl:h-screen h-[100%] pt-[50px] pb-[250px] bg-parchment"
      id="about"
    >
      <div className="py-5 flex 2xl:flex-row flex-col justify-center text-onyx">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="2xl:w-1/2 w-3/4 2xl:px-[150px] md:pl-[25px] sm:px-1 ml-5 2xl:text-lg sm:text-2xl"
        >
          <h2 className="text-black font-bold 2xl:text-4xl sm:text-5xl 2xl:my-5 lg:mt-5 sm:mt-[200px]">
            About
          </h2>
          <p>
            This is a made up fish expo website. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Delectus quaerat labore quod, iure
            nihil dolorum at nesciunt? Quibusdam quasi natus repudiandae in
            repellat animi, vitae velit modi, sunt, ipsam facilis.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ea ipsam corrupti suscipit sapiente quisquam odit dolorum totam ad
            in ab magni eos enim illo iusto delectus sed, unde autem!
          </p>
          <div className="flex gap-4">
            <button className="bg-teal-700 text-white bg-teal p-2 my-5 drop-shadow-lg">
              <a href="">Here's a button!</a>
            </button>
            <button className="bg-orange-500 text-white p-2 my-5 drop-shadow-lg">
              <a href="">Here's another button!</a>
            </button>
          </div>
        </motion.div>
        <div className="2xl:m-0 sm:ml-[50px] p-5">
          <motion.img
            src={AboutImg}
            alt=""
            height="600px"
            width="400px"
            initial={{
              x: 400,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="universal-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
