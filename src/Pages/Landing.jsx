import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

import TextAnimate from "../components/TextAnimate";

  //landing page
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:gap-6 md:h-full  py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-10 mt:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:bg-slate-200 before:-top-1 before:-left-1 before:rounded-t-[200px]
            before:w-full before:max-w-[400px]  before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[600px]"
              src="assets/dev-wave.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[300px] md:max-w-[600px]"
            src="assets/dev-wave.png"
          />
        )}
      </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-10 md:mt-32 text-center md:text-start">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-2xl md:text-5xl font-playfair z-10 mt-6 md:mt-32  ">
            Kanwar {""}
            <span className=" border-collapse xs:relative sm:text-blue">
              {/* //   xs:font-semibold z-20 sm:before:content-brush
            //   before:absolute before:-left-[40px] before:-top-[120px] before:w-[200px] before:h-[180px] before:overflow-hidden before:z-[-1]"
            // > */}
              Dhillon
            </span>
          </p>
          <div className="flex justify-center mt-2  md:mt-4">
            <TextAnimate />
          </div>
          <p className="my-2 mx-auto px-6 prose prose-sm md:prose-base prose-slate font-playfair font-semibold text-justify">
            Hardworking, adaptable person who enjoys coding, taking challenges
            and learning new skills.Strong skills in problem solving, analytical and attention to detail.<br/>
            I'm currently looking for a role where I can apply all my transferable skills to build greater user experience.
            </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex my-2 p-2 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 mr-1 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex my-2 md:mb-32  justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    
    </section>
  );
};
export default Landing;
