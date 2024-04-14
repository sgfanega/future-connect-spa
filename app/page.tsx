"use client";

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

import internationalStudiesImage from "@/public/home/international-studies-image.jpg";
import nursingImage from "@/public/home/nursing-image.jpg";
import CarouselCenterMode from "./components/carouselCenterMode";
import ContactForm from "./components/contactForm";

const bannerStyle = {
  minHeight: "70dvh",
  position: "relative",
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/home/banner-image.jpg')",
  backgroundPosition: "60% 30%",
  backgroundSize: "cover"
} as React.CSSProperties;

const aboutUsStyle = {
  minHeight: "70dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "5rem 0"
} as React.CSSProperties;

const servicesStyle = {
  minHeight: "70dvh",
  padding: "5rem 0"
} as React.CSSProperties;

const blogStyle ={ 
  padding: "3rem 0"
} as React.CSSProperties;

const contactUsStyle = {
  minHeight: "55dvh",
  padding: "3rem 0"
} as React.CSSProperties;

export default function Home() {
  return (
    <main className="home">

      <section className="container-fluid home-banner d-flex flex-column justify-content-center align-items-center" style={bannerStyle}>
        <h1 className="display-1 fw-bold text-tertiary">FUTURE CONNECT</h1>
        <p className="fs-4 fw-medium text-primary">WHERE YOUR STORY BEGINS</p>
      </section>
    
      <section className="container-fluid home-about-us bg-body-tertiary overflow-hidden" style={aboutUsStyle}>
        <div className="row justify-content-center gy-5">
          <div className="col-10 col-md-3 col-xxl-2 align-self-center">
            <h2 className="display-1 fw-medium text-secondary text-center">What <br/>We Do</h2>
            <hr className="custom-hr-primary"/>
          </div>  
          <div className="col-10 col-md-7 col-xl-5 col-xxl-3">
            <p className="fs-4 text-md-end text-secondary">At Future Connect, we guide individuals to their own unique path of success, whether it is to attend their dream college/university,
            or become professionals in the healthcare industry. We believe in delivering you services that provide long-lasting connections, a detailed action plan,
            and walk you through the process comfortably and efficiently.</p>
          </div>
        </div>
        <div className="row justify-content-center pt-5">
          <div className="col-10 col-xl-7 col-xxl-5 text-center">
          <p className="fs-4 text-secondary">&quot;At Future Connect, we believe that every successful story once started with a dream. So dream big, share it with us, and we will help you make it happen.&quot;</p>
          <p className="fs-6 fst-italic text-black-50">- Future Connect Team</p>
          </div>
        </div>
        <div className="row justify-content-center text-center pt-5 gy-2">
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-4">
            <p className="display-1 fw-bold text-secondary mb-0">
              <CountUp end={34200635.63} decimals={2} duration={5} prefix="$"/><span className="text-tertiary">+</span>
            </p>
            <p className="fs-5 fw-bold text-secondary mb-0">assisted in Scholarship Funds</p>
          </div>
          <div className="col-12 col-md-4 col-lg-2 col-xxl-2">
            <p className="display-1 fw-bold text-secondary mb-0">
              <CountUp end={50} duration={5}/><span className="text-tertiary">+</span>
            </p>
            <p className="fs-5 fw-bold text-secondary mb-0">Collges & Universities</p>
          </div>
          <div className="col-12 col-md-2 col-lg-2 col-xxl-1">
            <p className="display-1 fw-bold text-secondary mb-0">
              <CountUp end={15} duration={5}/><span className="text-tertiary">+</span>
            </p>
            <p className="fs-5 fw-bold text-secondary mb-0">Countries</p>
          </div>
        </div>
      </section>

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
              <p className="fs-4 text-primary">Interested in pursuing your college education abroad? At Future Connect, we 
                help aspiring students reach their dreams not only to gain international degrees 
                but to also gain impacting experiences as professionals. When you decide to 
                pursue your college education abroad, you are signing up for experiential education, 
                where you get to experience history, culture, fashion, food and the arts. So for 
                those of you who aspire to open new avenues, both academically and personally, 
                inquire below.
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
              <p className="fs-4 text-primary">Passed the NCLEX? Want to start working in the U.S? 
                Look no further, as it is easier than ever to obtain a permanent resident as a Nurse.
                We partnered with a licensed attorney with three decades of experience and has extensive 
                legal practice concentrating in U.S Immigration and Naturalization. Moreover, we have 
                nursing homes and hospitals that are willing to sponsor your I-140 Immigration Petition 
                either as a Nurse or CNA. Need we say more? Start your American Journey today!
              </p>
              <a href="/services/healthcare" className="btn btn-primary fs-6">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid home-blog bg-body-secondary overflow-hidden" style={blogStyle}>
        <h2 className="display-2 fw-medium text-tertiary text-center">Recent Blogs</h2>
        <hr className="custom-hr-tertiary"/>
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <CarouselCenterMode/>
          </div>
        </div>
      </section>

      <section className="container-fluid home-contact-us bg-body-tertiary overflow-hidden" style={contactUsStyle}>
        <div className="container">
          <h2 className="display-2 fw-medium text-secondary text-center">Contact Us</h2>
            <hr className="custom-hr-primary"/>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-xl-">
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
