import ContactImg from "../assets/coyote.png";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <section
  
      className=" h-screen flex 2xl:flex-row flex-col justify-center
      items-center bg-parchment"
    >
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
        className="mr-5 md:p-5 p-1"
      >
        <div id="contact" className="text-onyx text-2xl">
          <h2 className="text-black font-bold md:text-5xl text-3xl pb-5">
            Contact
          </h2>
          <ul>
            <li>kfsdlfksda</li>
            <li>sfdksdl</li>
            <li>dfkl;sdkfap</li>
          </ul>
          {/* <ContactForm /> */}
        </div>
      </motion.div>
      <motion.div className="my-10 drop-shadow-lg p-5 flex md:justify-end justify-center">
        <motion.img
          initial={{
            x: 400,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={ContactImg}
          alt=""
          className="md:w-3/4 w-full"
        />
      </motion.div>
    </section>
  );
};

export default ContactInfo;
