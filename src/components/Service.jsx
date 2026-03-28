import { ServiceData } from "../serviceData";
import ServiceCard from "../ServiceCard";

function Service() {
  return (
    <section>
      <div
        className="container-fluid overflow-hidden py-5 mt-5 mb-5"
        id="service"
        style={{ minHeight: "auto" }}
      >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h2
              className="display-4 fw-bold text-white mt-5"
              style={{ color: "white", textAlign: "center" }}
            >
              Services <span className="fw-bolder">|</span>
              <span className="text-accent ms-1">Offer</span>
            </h2>
            <p
              className=" text-white mx-auto  fs-2 lh-base text-center mb-5 fw-normal my-4"
              style={{ maxWidth: "400px" }}
            >
              Mobile web solutions focused on design, performance, and user
              experience
            </p>
            <div className="row g-5  px-5 px-md-0 justify-content-center">
              {ServiceData.map((item) => (
                <ServiceCard
                  key={item.id}
                  description={item.description}
                  features={item.features}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
