import React from "react";
import "./Menus.css";
import Abhilasha from "../../assets/images/Abhilasha.jpg"
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* Zoom replacement */}
          <motion.div
            className="navbar-profile-pic"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={Abhilasha}
              alt="profile pic"
            />
          </motion.div>

          {/* Fade left replacement */}
          <motion.div
            className="nav-items"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="nav-item">
              <NavLinks showText />
            </div>
          </motion.div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <NavLinks />
          </div>
        </div>
      )}
    </>
  );
};

/* 🔁 Reusable Nav Links */
const NavLinks = ({ showText = false }) => (
  <>
    <NavLink to="home" icon={<FcHome />} text="Home" showText={showText} />
    <NavLink to="about" icon={<FcAbout />} text="About" showText={showText} />
    <NavLink
      to="education"
      icon={<FcReadingEbook />}
      text="Education"
      showText={showText}
    />
    <NavLink
      to="techstack"
      icon={<FcBiotech />}
      text="Tech Stack"
      showText={showText}
    />
    <NavLink
      to="projects"
      icon={<FcVideoProjector />}
      text="Projects"
      showText={showText}
    />
    <NavLink
      to="work"
      icon={<FcPortraitMode />}
      text="Work Experience"
      showText={showText}
    />
    <NavLink
      to="contact"
      icon={<FcBusinessContact />}
      text="Contact"
      showText={showText}
    />
  </>
);

const NavLink = ({ to, icon, text, showText }) => (
  <div className="nav-link">
    <Link to={to} spy smooth offset={-100} duration={100}>
      {icon}
      {showText && text}
    </Link>
  </div>
);

export default Menus;
