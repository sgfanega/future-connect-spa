import ContactForm from "../components/contactForm";

const contactUsStyle = {
  minHeight: "55dvh",
  padding: "3rem 0"
} as React.CSSProperties;

export default function Contact() {
  return (
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
  )
}