import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Contacts() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const data = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xyzkrleo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (response.ok) {
        setStatus("Success!");
        e.target.reset();
      } else {
        setStatus("Error!" + (result?.error || "Something went wrong"));
      }
    } catch (error) {
      setStatus("Error! Network error");
    }
    setLoading(false);
  };

  return (
    <section>
      <div
        id="contacts"
        className="container-fluid py-5 text-center "
        style={{
          minHeight: "100vh",
          padding: "100px 20px",
          backgroundColor: "#050c1b",
        }}
      >
        <div className="text-center text-white mb-5">
          <h2
            className="about-title display-4  fw-bold text-white"
            style={{ color: "white", textAlign: "center" }}
          >
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-white mt-4">
            Have a project in mind ? Let's build something impactful
          </p>
        </div>

        <div className="lets-connect px-2">
          <div
            className="p-5 shadow-lg contact-box"
            style={{
              backgroundColor: "#0f172a",
              borderRadius: "15px",
              border: "1px solid #1e293b",
            }}
          >
            <h2 className="text-white mb-4 fs-1 fw-bold"> Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg custom-input"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg custom-input"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className=" form-control form-control-lg custom-input"
                  rows={8}
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                id="submit-button"
                className="btn btn-lg w-100 py-3 fw-bold"
                style={{
                  backgroundColor: "#00ff88",
                  color: "#050c1b",
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status ? (
              <p
                role="alert"
                aria-live="polite"
                className={`mt-3 ${status.toLowerCase().includes("success") ? "text-success" : "text-danger"} `}
              >
                {status}
              </p>
            ) : null}
          </div>
          <div
            className="  p-5 shadow-lg getin-touch-box"
            style={{
              backgroundColor: "#0f172a",
              borderRadius: "15px",
              border: "1px solid #1e293b",
            }}
          >
            <h2 className=" text-start text-white mb-3 fs-1 fw-bold">
              Get In Touch
            </h2>
            <p
              style={{
                maxWidth: "250px",
                lineHeight: "1.6",
              }}
              className="text-secondary fs-4 text-start"
            >
              Open to new opportunities and collaborations? Let's discuss how we
              can work together
            </p>

            <div className="email-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="email-link"
                href={`mailto:${"mercifulservanta@gmail.com"}`}
              >
                <FaRegEnvelope
                  className="icon-mail"
                  size={24}
                  color="#00ff88"
                />
                <span className="email-text fs-3 text-white">
                  mercifulservanta@gmail.com
                </span>
              </a>
            </div>
            <hr className="text-white" />

            <h3 className="text-white text-start mt-3">Follow Me</h3>
            <div className="social-link">
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid #22c55e",
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Checheli-hub"
                >
                  <FaGithub size={18} color="white" />
                </a>
              </div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid  #22c55e",
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/kudus-yusuf-4b3a9233b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                >
                  <FaLinkedin size={18} color="white" />
                </a>
              </div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid  #22c55e",
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <a
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@cheche_tech?_r=1&_t=ZS-95Ls4XOZX9M"
                >
                  <FaTiktok size={18} color="white" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-white text-start mt-3">Telephone</h2>

              <div className="text-start">
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  rel="noopener noreferrer"
                  className="text-white fs-4"
                  href="tel:+2347015919347"
                >
                  <FiPhone size={24} color=" #22c55e" />
                  <span className="px-3">+234 701 591 9347</span>
                </a>
              </div>
              <div className="text-start">
                <a
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                  className="text-white fs-4"
                  href="tel:+2349138320624"
                >
                  <FiPhone size={24} color=" #22c55e" />
                  <span className="px-3">+234 913 832 0624</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="  p-5 shadow-lg philosophy-box"
            style={{
              backgroundColor: "#22c55e",
              borderRadius: "10px",
              border: "1px solid #1e293b",
              lineHeight: 1.6,
            }}
          >
            <h2 className="text-white text-start">CHECHE TECH Philosophy</h2>
            <p
              className="fs-4 text-start"
              style={{
                color: "#011627",
              }}
            >
              I don't just write code : I craft digital architecture.My Focus is
              on building scalable, performant, and maintainable front-end
              systems.Every line of code written with future in mind- ensuring
              that products aren't just launched, but are built to grow and
              evolve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
