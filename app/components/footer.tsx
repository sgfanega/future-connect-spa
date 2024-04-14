import Image from "next/image";
import logo from "@/public/icons/future-connect-logo-white-words.png";
import linkedInLogo from "@/public/icons/linkedin-original.svg";
import facebookLogo from "@/public/icons/facebook-original.svg";

export default function footer() {
  return (
    <>
    <footer className="container-fluid bg-body-primary">
      <div className="container pt-5 pb-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-3 mb-5 mb-md-0 text-center">
            <Image 
              className="img-fluid"
              src={logo}
              alt="Future Connect Logo"
              height={125}
              />
          </div>
          <div className="col-4 col-md-3">
            <p className="fs-4 text-tertiary">Navigation</p>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none custom-link-primary">Home</a></li>
              <li><a href="/about-us" className="text-decoration-none custom-link-primary">About Us</a></li>
              <li><a href="/blog" className="text-decoration-none custom-link-primary">Blog</a></li>
              <li><a href="/privacy-policy" className="text-decoration-none custom-link-primary">Privacy Policy</a></li>
              <li><a href="/ca-privacy-policy" className="text-decoration-none custom-link-primary">CA Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-4 col-md-3">
            <p className="fs-4 text-tertiary">Services</p>
            <ul className="list-unstyled">
              <li><a href="/services/international-studies" className="text-decoration-none custom-link-primary">International Studies</a></li>
              <li><a href="/services/nursing" className="text-decoration-none custom-link-primary">Nursing</a></li>
              <li><a href="/services/cna" className="text-decoration-none custom-link-primary">CNA</a></li>
            </ul>
          </div>
          <div className="col-5 col-md-3">
            <p className="fs-4 text-tertiary">Connect With Us</p>
            <div className="d-flex pb-3 pb-md-0">
              <Image
                className="img-fluid me-3"
                src={linkedInLogo}
                alt="LinkedIn Logo with link"
                height={25}
                width={25}
              />
              <Image
                className="img-fluid"
                src={facebookLogo}
                alt="Facebook Logo with link"
                height={25}
                width={25}
              />
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </footer>
    <section className="container-fluid d-flex flex-column flex-md-row justify-content-center bg-body-secondary text-tertiary text-center py-1">
      <p className="fs-6 mb-0">Copyright © 2024 Future Connect, LLC</p>
      <p className="fs-6 mb-0 px-3">•</p>
      <p className="fs-6 mb-0">Developed by Fanega Web Development</p>
    </section>
    </>
  )
}