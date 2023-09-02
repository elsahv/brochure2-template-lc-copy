import content from "./data";
import { motion } from "framer-motion";


const Designs = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      id="fish-gallery"
      className=" dropshadow-lg py-[100px] bg-parchment border-6 border-onyx"
    >
      {/* //* RECENT CLIENTS*/}

      <h2 className="flex justify-start text-2xl font-bold pl-[70px]">
        Endless Designs
      </h2>
      <div className="flex justify-center">
        <div className="bg-orange-400 border-black border-y-2 mx-1 grid gap-1 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-5">
          {content.map((item, index) => (
            <div className="border-4 border-onyx" key={index}>
              <a href={item.url}>
              <img
                className="h-[100%] border-1 border-black"
                src={item.image}
                alt=""
              />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* //todo: ADD DESIGNS*/}
    </motion.section>
  );
};

export default Designs;
