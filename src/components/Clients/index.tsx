import content from "./data";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section
      id="fish-gallery"
      className="bg-onyx border-4 border-black"
    >
      {/* //* RECENT CLIENTS*/}

<motion.div
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 2.5 }}

>
      <h2 className="text-parchment drop-shadow-lg pt-[120px] flex justify-end font-bold pr-[200px]">
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
                className=" rounded-t-lg w-[100%] h-[370px] border-t-2 border-b-2 border-black"
                src={item.image}
                alt=""
              />
              <div className="p-2 bg-parchment rounded-b-lg">
                <h3 className="text-lavender font-bold">{item.title}</h3>
                <p className="text-lavender pb-2">{item.paragraph}</p>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
      {/* //todo: ADD DESIGNS*/}
    </section>
  );
};

export default Gallery;
