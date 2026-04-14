import { ServiceData } from "../serviceData";
import ServiceCard from "../ServiceCard";

function Service() {
  return (
    <section id="service" aria-labelledby="service-title">
      <div className="container py-5 mt-5 mb-5">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2
              className="service-title display-4 fw-bold text-white mt-5"
              style={{ color: "white", textAlign: "center" }}
            >
              Services <span className="fw-bolder">|</span>
              <span className="text-accent ms-1">Offer</span>
            </h2>
            <p className="service-description text-white mx-auto  fs-2 lh-base text-center mb-5 fw-normal my-4">
              Mobile web solutions focused on design, performance, and user
              experience
            </p>
          </div>
        </div>

        <div className="service-grid  px-4">
          {ServiceData.map((item) => (
            <div key={item.id} className="w-100 d-flex justify-content-center">
              <ServiceCard
                description={item.description}
                features={item.features}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
