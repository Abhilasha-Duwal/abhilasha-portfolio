import React from "react";
import "./Projects.css";
import ecopanel from "../../assets/images/ecopanel.png";
import dibtech from "../../assets/images/dibtech.png";
import dgmarket from "../../assets/images/dgmarket.png";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="row"
          id="ads"
        >
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src={dgmarket}
                  alt="dgMarket Website"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">PostgreSQL</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                    dgMarket Nepal Website
                  </h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://www.dgmarket.com.np/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React App</span>
                <img
                  src={dibtech}
                  alt="dibtech Website"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">Tailwind CSS</span>
                <span className="card-detail-badge">Next JS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Dibtech Nepal Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://dibtech.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front-End</span>
                <img src={ecopanel} alt="Nepal Ecopanel Website" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTMl</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>

                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Nepal Eco Panel Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://nepalecopanel.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
