import content from "./data";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      id="fish-gallery"
      className=""
    >
      {/* //* RECENT CLIENTS*/}

      <h2 className="text-onyx flex justify-end text-2xl font-bold pr-[200px]">
        Most Recent Clients
      </h2>
      <div className="flex justify-center">
        <div className=" 2xl:px-[150px] px-5 grid gap-x-6 gap-y-10 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-5 my-5">
          {content.map((item, index) => (
            <div
              className="border-2 border-black rounded-lg"
              key={index}
            >
              <a href={item.url}>
              {/* <div className="underline pl-5 pt-2 text-seasalt">tags</div> */}
              <img
                className="w-[100%] h-[370px] border-t-2 border-b-2 border-black"
                src={item.image}
                alt=""
              />
              <div className="p-2">
                <h2 className="text-lavender font-bold">{item.title}</h2>
                <h2 className="text-lavender pb-2">{item.paragraph}</h2>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* //todo: ADD DESIGNS*/}
    </motion.section>
  );
};

export default Gallery;
