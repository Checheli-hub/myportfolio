import React from "react";
import { WhyTrustData } from "../whyTrustData";
import WhyTrustDashBoard from "../whyTrustDashBoard";

function WhyTrustCard() {
  return (
    <section id="whyTrust" aria-labelledby="why-trust-heading">
      <h2
        id="why-trust-heading"
        className="display-4 fw-bold text-white mt-5"
        style={{ color: "white", textAlign: "center" }}
      >
        Why Trust <span className="fw-bolder"></span>
        <span className="text-accent ms-1">CheChe Tech</span>
      </h2>
      <p
        className=" text-white mx-auto  fs-2 lh-base text-center mb-5 fw-normal my-4"
        style={{ maxWidth: "400px" }}
      >
        We prioritize High-performance code, web security, and scalable
        architecture.
      </p>
      <div className="why-grid px-4">
        {WhyTrustData.map((whyTrust) => (
          <div
            key={whyTrust.id}
            className="w-100 d-flex justify-content-center"
          >
            <WhyTrustDashBoard
              title={whyTrust.title}
              description={whyTrust.description}
              image={whyTrust.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyTrustCard;
