import content from "./data";
import { motion } from "framer-motion";


const Designs = () => {
  return (
    <section className=" dropshadow-lg py-[100px] bg-parchment border-6 border-onyx"
      id="fish-gallery"
    >
      {/* //* RECENT CLIENTS*/}

      <motion.h2 className="flex justify-start font-bold pt-[70px] pl-[70px]"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1.5 }}
      >
        Endless Designs
      </motion.h2>
      <div className="flex justify-center">
        <div className="bg-orange-400 border-black border-y-2 mx-5 grid gap-1 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-5">
          {content.map((item, index) => (
            <div className="border-4 border-onyx" key={index}>
              <a href={item.url}>
              <motion.img  className="h-[100%] border-1 border-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                src={item.image}
                alt=""
              />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* //todo: ADD DESIGNS*/}
    </section>
  );
};

export default Designs;
