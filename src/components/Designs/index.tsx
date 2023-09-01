import content from "./data";
import { motion } from "framer-motion";


const Designs = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      id="fish-gallery"
      className="border border-t-black border-b-black dropshadow-lg py-5"
    >
      {/* //* RECENT CLIENTS*/}

      <h2 className="flex justify-center text-2xl font-bold px-5">
        Endless Designs
      </h2>
      <div className="flex justify-center">
        <div className="px-[50px] grid gap-x-2 gap-y-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-5 my-5">
          {content.map((item, index) => (
            <div className="border-2 border-onyx rounded-lg" key={index}>
              <a href={item.url}>
              <img
                className="rounded-lg h-[100%]"
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
