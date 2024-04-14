"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjvnayzg");
  
  if (state.succeeded) {
    return <p className="fs-4 text-center fw-medium">Thank You For Your Submission!<br/> I will contact you as soon as possible.</p>
  }

  return (
    <form className="container" method="POST" onSubmit={handleSubmit}>
      <div className="row gy-3 text-primary">

        <div className="col-12">
          <label htmlFor="name">Full Name</label>
          <input className="form-control" id="name" type="text" name="name" placeholder="Enter Name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="col-12">
          <label htmlFor="email">Email Address</label>
          <input className="form-control" id="email" type="email" name="email" placeholder="Enter Email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="col-12">
          <label htmlFor="serviceSelection">Select Your Service</label>
          <select className="form-select" id="serviceSelection" name="serviceSelection" aria-label="Service Selection" required>
            <option value="Other">Other</option>
            <option value="Package 1">International Admissions</option>
            <option value="Package 2">Nursing</option>
            <option value="Package 3">CNA</option>
            <option value="Package 4">Other</option>
          </select>
          <ValidationError prefix="Service Selection" field="serviceSelection" errors={state.errors} />
        </div>

        <div className="col-12">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" name="message" rows={5} placeholder="Enter Your Message" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit" disabled={state.submitting}>
            Get in Touch!
          </button>
        </div>

        <ValidationError errors={state.errors} />
      </div>
    </form>
  )
}