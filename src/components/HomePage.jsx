import React, { useState } from "react";
import mylogo from "../images/mylogo.jpg";
import { BsDot, BsFileEarmark } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiArrowDown } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import cv from "../Resume/cv.pdf";

function HomePage({ handleScroll }) {
  const [activeBtn, setActiveBtn] = useState(null);

  const handleBtnClick = (e, targetId) => {
    e.preventDefault();
    setActiveBtn(targetId);
    handleScroll(e, targetId);

    if (targetId === "#resume") {
      const link = document.createElement("a");
      link.href = cv;
      link.setAttribute("download", "cv.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <div className="logo-wrapper" id="HomePage">
        <div className="logo-con">
          <img src={mylogo} alt="Logo" />
        </div>

        <h1 className="d-flex flex-column align-items-center  text-center lh-1 mt-5">
          <span className=" text-white display-5 fw-normal ">
            <span className="me-4">I'm</span>
            <span
              style={{
                color: "#00ff9d",
              }}
              className=" fw-bolder display-4 text-uppercase"
            >
              CHECHE
            </span>
          </span>
          <span
            style={{ color: "#00ff9d" }}
            className="display-1 fw-bolder text-uppercase mt-1"
          >
            TECH
          </span>
        </h1>
        <h2
          className="text-secondary fs-3  mt-3 mb-4 text-center px-4"
          style={{ maxWidth: "300px", letterSpacing: "1px", fontWeight: "600" }}
        >
          UI/UX Designer & Front-End Developer
        </h2>
        <div className="tags">
          &lt;
          <span>DESIGN</span>
          <BsDot size={24} className="mx-2" />
          <span>INTERFACE</span>
          <BsDot size={24} className="mx-2" />
          <span>EXPERIENCE</span>
          &gt;
        </div>
        <div>
          <p
            className="text-secondary text-center fs-2 fw-normal my-4"
            style={{
              maxWidth: "300px",
              letterSpacing: "1px",
              fontWeight: "600",
            }}
          >
            <Typewriter
              words={[
                "Designing user-focused experiences and building modern, responsive web interfaces.",
              ]}
              loop={0}
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
              cursorBlinking={true}
            />
            <span className="cursor"></span>
          </p>
        </div>
        <div className="d-flex flex-column fs-5 fw-2 align-items-center gap-3 mt-4 px-4 w-100">
          <button
            onClick={(e) => handleBtnClick(e, "#projects")}
            className={`view-project-btn btn fs-4 fw-bold py-3 ${activeBtn === "#projects" ? "active-green" : ""}`}
            style={{
              width: "90%",
              maxWidth: "120px",
              borderRadius: "12px",
              border: "2px solid #4afe80",
            }}
          >
            View Projects
          </button>
          <button
            onClick={(e) => handleBtnClick(e, "#resume")}
            className={`view-resume-btn btn fw-bold fs-5 py-3 d-flex align-items-center justify-content-center gap-2 ${activeBtn === "#resume" ? "active-green" : ""}`}
            style={{
              width: "90%",
              maxWidth: "200px",
              border: "2px solid #4afe80",
              borderRadius: "12px",
              backgroundColor:
                activeBtn === "#resume" ? "#4afe80" : "transparent",
              color: activeBtn === "#resume" ? "#000" : "#4afe80",
              transition: "0.3s",
              boxSizing: "border-box",
            }}
          >
            <BsFileEarmark size={13} className="me-3" />
            View Resume
          </button>
          <button
            onClick={(e) => handleBtnClick(e, "#service")}
            className={`service-btn btn fs-4 fw-bold py-3 ${activeBtn === "#service" ? "active-green" : ""}`}
            style={{
              width: "90%",
              maxWidth: "120px",
              borderRadius: "12px",
              border: "2px solid #4afe80",
            }}
          >
            Services
          </button>
        </div>
      </div>
      <div className="d-flex align-item-center justify-content-center mt-5 pt-5 gap-5 fs-3 text-white ">
        <a
          href="https://github.com/checheli-hub"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaGithub />
        </a>
        <a
          href="
https://www.linkedin.com/in/kudus-yusuf-4b3a9233b?utm_source
=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="mailto:abdulkudusyusuf79@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FiMail />
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-5 mt-5 fs-2 text-success">
        <FiArrowDown
          onClick={(e) => handleBtnClick(e, "#about")}
          className="bounce"
        />
      </div>
    </div>
  );
}

export default HomePage;
