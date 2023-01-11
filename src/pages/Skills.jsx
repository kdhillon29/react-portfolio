import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Bars from "../components/Bars";

const Skills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 mt-6">
      {/* HEADER AND IMAGE SECTION */}
          <p className="font-playfair font-semibold text-4xl mb-4">
            MY <span className="text-red">SKILLS</span>
          <LineGradient width="w-1/4" />
          </p>
          
      <div className=" flex justify-between flex-col sm:flex-row sm:gap-8 mt-2">
        
      <div className="my-2 md:mt-6 sm:order-2 ">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>

        <motion.div
          className=" w-100 sm:w-2/3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="my-2">
            <Bars/>
            {/* Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at. */}
          </p>
        </motion.div>

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-8 gap-32">
        {/* EXPERIENCE */}
        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"></div>
          <p className="mt-5">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae?
          </p>
         </div>
        </motion.div> */}

        {/* INNOVATIVE */}
        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"></div>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, amet.
          </p>
        </div>
        </motion.div> */}
        {/* IMAGINATIVE */}
        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"></div>
           <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, delectus?
          </p>
          </div>
        </motion.div> */}
      </div>

      
    </section>
  );
};

export default Skills;