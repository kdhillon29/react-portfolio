import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { ProjectList } from "../data/Projects";
//conteiner comment added
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

const Project = ({ title,desc,imgUrl,stack,demo,github,imgType='jpeg' }) => {
  // const imgType='jpeg' || 'png';
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-xl bg-green-300 p-2 font-playfair">{title}</p>
        <p className="mt-2 text-center text-gray-800 font-semibold">
         {desc}
        </p>
        <strong className="bg-slate-300 p-2 mb-2">{stack}</strong>
        <button className="bg-green hover:bg-gray-100 text-gray-800 font-semibold mb-2 py-2 px-4 border border-gray-400 rounded shadow">
        
        <a  href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
         </button>
         <button className="bg-blue hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        
        <a  href={github} target="_blank" rel="noopener noreferrer">Github Repo</a>
         </button>

      </div>
      <div className="bg-indigo-300   " >
           <img src={`/assets/${imgUrl}`} alt={title} className="w-96 h-96  " />
      </div>
      {/* <img src={`/assets/${imgUrl}`} alt={title} width="200" height="500" /> */}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20  ">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          {/* <p className="font-playfair font-semibold text-3xl">
            <span className="text-red">PRO</span>JECTS
          </p> */}
          <p className="mt-4 mb-6 text-4xl text-center font-bold text-fuchsia-400">
          Project Portfolio 
          <LineGradient width="" className="" /> 
        </p>
          <div className="flex justify-center ">
          </div>
        </div>
       
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-1"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {ProjectList.map(project=>{
            const {title,desc,imgUrl,stack,demo,github} =project
            console.log(title)
            return   <Project {...{title,desc,imgUrl,stack,demo,github}}  />
            })}
         
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