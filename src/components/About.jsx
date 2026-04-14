import React from "react";
import about from "../Images/about.jpg";

function About() {
  return (
    <section className="about-section mt-5 px-3" id="about">
      <div className="container pt-5 text-center" style={{ minHeight: "auto" }}>
        <h2
          className="about-title display-4 fw-bold text-white"
          style={{ color: "white", textAlign: "center" }}
        >
          About <span className="text-accent">CheChe Tech</span>
        </h2>

        <div className="about-flex-container">
          <div className="about-img-box  mt-5 d-flex justify-content-center">
            <img
              className=" object-fit-cover img-fluid rounded-4 shadow mt-5"
              src={about}
              alt="Cheche Tech - Frontend Developer and UI/UX Designer working on a project"
              style={{
                height: "300px",
                width: "100%",
              }}
              fetchPriority="high"
            />
          </div>

          <div className="about-text-box">
            <div className="my-about-con py-5 text-white">
              <h3 className="display-5 text-accent fw-bold mb-5 mx-2 text-start">
                What I Do
              </h3>
              <p className=" text-secondary mx-2 text-start fs-3 lh-lg mb-0 fw-normal my-4 ">
                I design and build modern, user-friendly digital experiences. My
                focus is on clean interfaces, responsive design, and
                performance-turning ideas into functional and visual appealing
                products.
              </p>
              <h3 className="display-5 text-accent text-start my-5 fw-bold mb-5 mx-2 ">
                My Approach
              </h3>
              <div className="approach-list" role="list">
                {[
                  "Frontend developer focused on building React applications",
                  "I build responsive and user-friendly web apps using modern JavaScript",
                  "I prioritize clean code, performance, and accessibility ",
                  "I turn ideas into functional and visually appealing products",
                  "I Continuously improve by building real-world projects",
                ].map((text, index) => (
                  <div key={index} className="d-flex align-items-start mb-4">
                    <div
                      className="rounded-circle  me-3"
                      style={{
                        minWidth: "8px",
                        height: "8px",
                        marginTop: "6px",
                        backgroundColor: "#00ff9d",
                        flexShrink: 0,
                      }}
                    ></div>
                    <p
                      className="fs-5 mb-0 text-start"
                      style={{
                        lineHeight: "1.6",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="stats-container d-flex container justify-content-between mt-5">
                <div
                  className="stat-card d-flex flex-column
                justify-content-center p-3"
                  style={{
                    lineHeight: "1.5",
                    height: "120px",
                    width: "130px",
                    backgroundColor: "#051622",
                    borderRadius: "16px",
                    color: "white",
                  }}
                >
                  <h2
                    className="stat-num display-4 text-start fw-bold mb-1 "
                    style={{
                      color: "#00ff9d",
                    }}
                  >
                    10+
                  </h2>
                  <p
                    className="stat-desc mb-0 text-secondary text-start"
                    style={{
                      fontSize: "1.6rem",
                    }}
                  >
                    Projects Completed
                  </p>
                </div>
                <div
                  className="stat-card d-flex flex-column  text-start
                justify-content-center  p-3"
                  style={{
                    lineHeight: "1.5",
                    height: "120px",
                    width: "130px",
                    backgroundColor: "#051622",
                    borderRadius: "16px",
                    color: "white",
                  }}
                >
                  <h2
                    className="stat-num display-4 text-start fw-bold mb-0 "
                    style={{
                      color: "#00ff9d",
                    }}
                  >
                    1+
                  </h2>
                  <p
                    className="stat-desc mb-0 text-secondary text-start"
                    style={{
                      fontSize: "1.6rem",
                    }}
                  >
                    Years Learning & Building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
