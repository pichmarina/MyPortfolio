import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1Image from "../assets/project-1.jpeg";
import project2Image from "../assets/project-2.jpeg";
import project3Image from "../assets/project-3.jpeg";
import project4Image from "../assets/project-4.jpeg";
import project5Image from "../assets/project-5.jpeg";
import project6Image from "../assets/project-6.jpeg";
import project7Image from "../assets/project-7.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-white z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Explore this project to see how we tackled challenges and implemented
          solutions to achieve our goals.
        </p>
      </div>
      <img src={image} alt={title} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transiton={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          I have worked on a variety of projects that have helped me grow as a
          developer. Here are a few of my favorites.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* Row 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" image={project1Image} />
          <Project title="Project 2" image={project2Image} />

          {/* Row 2 */}
          <Project title="Project 3" image={project3Image} />
          <Project title="Project 4" image={project4Image} />
          <Project title="Project 5" image={project5Image} />

          {/* Row 3 */}
          <Project title="Project 6" image={project6Image} />
          <Project title="Project 7" image={project7Image} />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
