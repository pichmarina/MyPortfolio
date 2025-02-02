import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Person1 from "../assets/person-1.png";
import Person2 from "../assets/person-2.png";
import Person3 from "../assets/person-3.png";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">Here's What People are Saying About My Work</p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
          style={{
            "--before-content": `url(${Person1})`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div
            className="before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
            style={{
              backgroundImage: `url(${Person1})`,
              width: "200px",
              height: "200px",
              position: "absolute",
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
            }}
          ></div>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            The code is clean, efficient, and well-structure.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
          style={{
            "--before-content": `url(${Person2})`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div
            className="before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
            style={{
              backgroundImage: `url(${Person2})`,
              width: "200px",
              height: "200px",
              position: "absolute",
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
            }}
          ></div>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Highly recommended for any collaboration
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
          style={{
            "--before-content": `url(${Person3})`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div
            className="before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
            style={{
              backgroundImage: `url(${Person3})`,
              width: "200px",
              height: "200px",
              position: "absolute",
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
            }}
          ></div>

          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Attention to detail and dedication shine through in the efficient
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
