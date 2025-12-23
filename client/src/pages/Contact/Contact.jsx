import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import { motion } from "framer-motion";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }

      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          {/* LEFT IMAGE SECTION (LightSpeed replacement) */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <motion.img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="contact"
                  className="image"
                  initial={{ x: -120, skewX: -10, opacity: 0 }}
                  whileInView={{ x: 0, skewX: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION (Rotate replacement) */}
          <div className="col-lg-6 col-md-6">
            <motion.div
              className="card2 d-flex card border-0 px-4 py-5"
              initial={{ rotate: -8, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="row">
                <div className="social-media">
                  Contact With
                  <a href="https://www.linkedin.com/in/abhilasha-duwal-591683142/">
                    <BsLinkedin color="blue" size={30} className="ms-2" />
                  </a>
                  <a href="https://github.com/Abhilasha-Duwal">
                    <BsGithub color="black" size={30} className="ms-2" />
                  </a>
                  <a href="https://www.facebook.com/avilasha.duwal">
                    <BsFacebook color="blue" size={30} className="ms-2" />
                  </a>
                </div>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>

                <div className="row px-3">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>

                <div className="row px-3">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="row px-3">
                  <textarea
                    placeholder="Write your message"
                    className="mb-3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>

                <div className="row px-3">
                  <button className="button" onClick={handleSubmit}>
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
