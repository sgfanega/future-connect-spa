import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import Breadcrumbs from "../components/breadcrumbs";
import { getAboutUsPageContent, getCounterContent } from "../api";
import Counter from "./counter";
import ContactForm from "../components/contactForm";

export default async function AboutUs() {

  const data = await getAboutUsPageContent();

  const counterData = await getCounterContent();

  const counterSettings = {
    duration: 10,
    suffix: "+"
  }

  return (
    <main className="about-us container-fluid">
      <div className="container">
        <h2 className="display-1 fw-medium text-tertiary m-0 pt-5">About Us</h2>
        <Breadcrumbs/>
        <div className="row justify-content-center pb-5">
          <div className="col-12 col-lg-6 order-2 orderlg-1">
            <div className="fs-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content)}}/>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2 py-3 py-lg-0">
            <Image 
              className="img-fluid rounded-3 w-100"
              src={data.featuredImage.node.sourceUrl} 
              alt={data.featuredImage.node.altText}
              width={500}
              height={400}
            />
          </div>
          <div className="col-12 col-lg-7 col-xl-6 order-3 py-5">
            <div className="row">
              <div className="col-12 text-center">
                <Counter end={counterData.home.collegeFund} decimals={2} prefix={"$"} description="in Scholarship Funds" {...counterSettings} />  
              </div>
              <div className="col-12 text-center">
                <Counter end={counterData.home.collegesAndUniversities} decimals={0} prefix={""} description="Colleges & Universities" {...counterSettings} />  
              </div>
              <div className="col-12 text-center">
                <Counter end={counterData.home.countries} decimals={0} prefix={""} description="Countries" {...counterSettings} />  
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-6 order-4">
            <div className="">
              <h3 className="fs-1 text-secondary text-center">Contact Us Now!</h3>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}