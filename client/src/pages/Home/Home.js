import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/abhilasha.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import { motion } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>

      <div className="container home-content">
        {/* Fade right replacement */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React Developer!",
                  "Software Engineer/Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>

        {/* Fade bottom replacement */}
        <motion.div
          className="home-buttons"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            className="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=9843159414"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>

          <a className="btn btn-cv" href={Resume} download="Abhilasha_Duwal_CV.pdf">
            My Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
