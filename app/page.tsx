import React, { Suspense } from "react";
import { getFrontPageContent } from "./lib/wordpress";
import Banner from "./home/banner";
import Loading from "./components/loading";
import About from "./home/about";
import Services from "./home/services";
import Blog from "./home/blog";
import Contact from "./home/contact";

export default async function Home() {
  const data = await getFrontPageContent();

  const homeData = data.home;

  return (
    <main className="home">
      <Suspense fallback={<Loading/>}>
        <Banner companyName={homeData.title} tagLine={homeData.tagline} imageSrc={homeData.bannerBackgroundImage.node}/>
        <About whatWeDoDescription={homeData.whatWeDoDescription} missionStatement={homeData.missionStatement} collegeFund={homeData.collegeFund}
          collegesAndUniversities={homeData.collegesAndUniversities} countries={homeData.countries}
        />
        <Services intlAdmissionDescription={homeData.intlAdmissionDescription} healthcareDescription={homeData.healthcareDescription}/>
        {/* <Blog/> */}
        <Contact/>
      </Suspense>
    </main>
  );
}
