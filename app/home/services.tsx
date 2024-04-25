import Image from "next/image";

import internationalStudiesImage from "@/public/home/international-studies-image.jpg";
import nursingImage from "@/public/home/nursing-image.jpg";

interface Services {
  healthcareDescription: string;
  intlAdmissionDescription: string;
}

const servicesStyle = {
  minHeight: "70dvh",
  padding: "5rem 0"
} as React.CSSProperties;

export default function Services({ healthcareDescription, intlAdmissionDescription} : Services) {
  return (
    <section className="container-fluid home-services bg-body-primary overflow-hidden" style={servicesStyle}>
        <div className="container">
          <h2 className="display-1 fw-medium text-tertiary text-center">Services</h2>
          <hr className="custom-hr-tertiary"/>
          <div className="row justify-content-center my-5">
            <div className="col-10 col-lg-6 col-xl-5 col-xxl-4 align-self-lg-center text-md-center text-xxl-end mb-3">
              <Image
                className="img-fluid rounded-3"
                src={internationalStudiesImage}
                alt=""
                width={600}
                height={600}
                />
            </div>
            <div className="col-10 col-lg-6 col-xl-7 col-xxl-6">
              <h3 className="display-5 fw-medium text-tertiary">International Admission</h3>
              <p className="fs-4 text-primary">{intlAdmissionDescription}
              </p>
              <a href="/services/international-admissions" className="btn btn-primary fs-6">Learn More</a>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-10 col-lg-6 col-xl-5 col-xxl-4 order-lg-second align-self-lg-center text-md-center mb-3">
              <Image
                className="img-fluid rounded-3"
                src={nursingImage}
                alt=""
                width={600}
                height={600}
                />
            </div>
            <div className="col-10 col-lg-6 col-xl-7 col-xxl-6 order-lg-first">
              <h3 className="display-5 fw-medium text-tertiary">Healthcare</h3>
              <p className="fs-4 text-primary">{healthcareDescription}</p>
              <a href="/services/healthcare" className="btn btn-primary fs-6">Learn More</a>
            </div>
          </div>
        </div>
      </section>

  )
}