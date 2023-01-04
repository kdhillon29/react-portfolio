import { useEffect, useState } from "react";

import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./Pages/DotGroup";
import Navbar from "./Pages/Navbar";
import Landing from "./Pages/Landing"
import Skills from "./Pages/Skills";
import LineGradient from "./components/LineGradient";
import { motion } from "framer-motion";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setisTopOfPage] = useState(true);

  const isAboveMediaScreen = useMediaQuery("(min-width:1060px)");
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setisTopOfPage(true) : setisTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="app bg-deep-blue ">
      <Navbar
      isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isAboveMediaScreen={isAboveMediaScreen}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediaScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
      <div className="w-5/6 mx-auto md:h-full  ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto mt-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto  mb-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
