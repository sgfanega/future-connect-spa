"use client";

import CountUp from "react-countup";

const aboutUsStyle = {
  minHeight: "70dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "5rem 0"
} as React.CSSProperties;

interface About {
  whatWeDoDescription: string;
  missionStatement: string;
  collegeFund: number;
  collegesAndUniversities: number,
  countries: number;
}

export default function About({ whatWeDoDescription, missionStatement, collegeFund, collegesAndUniversities, countries} : About) {
  return (
  <section className="container-fluid home-about-us bg-body-tertiary overflow-hidden" style={aboutUsStyle}>
    <div className="container">
      <div className="row justify-content-center gy-5">
        <div className="col-10 col-md-3 col-xxl-3 align-self-center">
          <h2 className="display-1 fw-medium text-secondary text-center">What <br/>We Do</h2>
          <hr className="custom-hr-primary"/>
        </div>  
        <div className="col-10 col-md-7 col-xl-5 col-xxl-6">
          <p className="fs-4 text-md-end text-secondary">{whatWeDoDescription}</p>
        </div>
      </div>
      <div className="row justify-content-center pt-5">
        <div className="col-10 col-xl-7 col-xxl-8 text-center">
        <p className="fs-4 text-secondary">&quot;{missionStatement}&quot;</p>
        <p className="fs-6 fst-italic text-black-50">- Meca Fanega, Founder</p>
        </div>
      </div>
      <div className="row justify-content-center text-center pt-5 gy-2">
        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
          <p className="display-1 fw-bold text-secondary mb-0">
            <CountUp end={collegeFund} decimals={2} duration={8} prefix="$"/><span className="text-tertiary">+</span>
          </p>
          <p className="fs-5 fw-bold text-secondary mb-0">assisted in Scholarship Funds</p>
        </div>
        <div className="col-12 col-md-4 col-lg-4 col-xxl-2">
          <p className="display-1 fw-bold text-secondary mb-0">
            <CountUp end={collegesAndUniversities} duration={10}/><span className="text-tertiary">+</span>
          </p>
          <p className="fs-5 fw-bold text-secondary mb-0">Colleges & Universities</p>
        </div>
        <div className="col-12 col-md-2 col-lg-2 col-xxl-2">
          <p className="display-1 fw-bold text-secondary mb-0">
            <CountUp end={countries} duration={12}/><span className="text-tertiary">+</span>
          </p>
          <p className="fs-5 fw-bold text-secondary mb-0">Countries</p>
        </div>
      </div>
    </div>
  </section>
  )
}