import React from "react";
import Abhilasha from "../../assets/images/Abhilasha.jpg";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: [40, -10, 0],
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Abhilasha} alt="profile_pic" />
          </div>

          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am Abhilasha Duwal, a graduate of the Bachelor of Science in
              Computer Science and Information Technology (BSc. CSIT) program at
              Tribhuvan University, completed in 2022 AD. My expertise spans
              both frontend and backend development, encompassing technologies
              such as HTML5, CSS3, Bootstrap, React, Redux and Redux Toolkit,
              Node.js, and TypeScript. Proficient in database management with
              MySQL, PostgreSQL, MongoDB, and SQLite, I specialize in
              constructing RESTful APIs using frameworks like Express and
              Fastify. Furthermore, I have acquired proficiency in
              containerization using Docker.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
