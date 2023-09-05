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
        Package rates
      </h2>
      {/* <span>Which wild animal are you??</span> */}   
      <div className="flex justify-center">
        <div className="2xl:px-[150px] px-5 pb-[50px] grid gap-x-6 gap-y-10 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-5 my-5">
          {content.map((item, index) => (
            <div className="border-2 border-black rounded-lg"
              key={index}
            >
              <img
                className=" rounded-t-lg w-[100%] h-[270px] border-t-2 border-b-2 border-black"
                src={item.image}
                alt=""
              />
              <div className="p-2 bg-parchment rounded-b-lg">
                <h3 className="text-lavender font-bold text-lg">{item.title}</h3>
                <ul className="">
                  <li>{item.item1}</li>
                  <li>{item.item2}</li>
                  <li>{item.item3}</li>
                  <li>{item.item4}</li>
                  <li>{item.item5}</li>
                  <li>{item.item6}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
   

      </motion.div>
      dsfmdlk
    </section>
  );
};

export default Gallery;
