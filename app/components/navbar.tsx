"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/icons/future-connect-logo-white.svg";
import facebookLogo from "@/public/icons/facebook-original.svg";
import linkedInLogo from "@/public/icons/linkedin-original.svg";

interface Link {
  [key: string]: string | Link;
}

export default function Navbar() {
  const navingationLinks : Link = {
    "Home": "/",
    "About Us": "/about-us",
    "Services": {
      "Int'l Studies": "/services/international-studies",
      "Nursing": "/services/nursing",
      "CNA": "/services/cna"
    },
    "Blog": "/blog"
  }

  const activeLink = usePathname();

  const html = Object.entries(navingationLinks).map(([key, navigation]) => {
    if (key == "Services") {
      return (
        <li key={key} className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{key}</a>
          <ul className="dropdown-menu">
            {Object.entries(navigation).map(([innerKey, innerNavigation]) => (
              typeof innerNavigation === 'string' 
                ? <li key={innerKey}><a href={(innerNavigation)} className="dropdown-item">{innerKey}</a></li> 
                : null
            ))}
          </ul>
        </li>
      )
    }

    return (
      <li className="nav-item" key={key}>
        {  typeof navigation === 'string' 
          ? <a href={navigation} className={`nav-link ${activeLink === navigation ? `active` : ``}`}>{key}</a>
          : null
        }
      </li>
    )
  });

  return (
    <>
    <section className="topbar container-fluid d-none d-md-block bg-primary py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 offset-lg-3 col-xl-5 offset-xl-4">
            <p className="fs-6 fw-medium text-secondary mb-0">Welcome to Future Connect, your destination for success!</p>
          </div>
          <div className="col-md-4 col-lg-2 offset-lg-1">
            <div className="d-flex justify-content-end">
              <Image
                className="img-fluid me-3"
                src={linkedInLogo}
                alt="LinkedIn Link"
                height={23}
                width={23}
                />
              <Image
                className="img-fluid"
                src={facebookLogo}
                alt="Facebook Link"
                height={23}
                width={23}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
    <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container">
        <a className="navbar-brand text-light" href="/">
          <Image 
            src={logo}
            alt="Future Connect Logo"
            height={40}
            width={40}
            />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {html}
          </ul>
          <a href="/services" className="btn btn-primary fw-medium ms-lg-3">Learn More</a>
        </div>
      </div>
    </nav>
    </>
  )
}