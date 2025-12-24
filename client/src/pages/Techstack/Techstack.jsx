import React from "react";
import "./Techstack.css";
import { motion } from "framer-motion";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <div className="container techstack" id="techstack">
      {/* RubberBand replacement */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{
          scale: [1, 1.05, 1],
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
      </motion.div>

      {/* Tech cards */}
      <div className="row">
        {TechstackList.map((tech, index) => (
          <motion.div
            key={tech._id}
            className="col-md-3"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
