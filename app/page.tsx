import React, { Suspense } from "react";
import Banner from "./home/banner";
import Loading from "./components/loading";
import About from "./home/about";
import Services from "./home/services";
import Blog from "./home/blog";
import Contact from "./home/contact";

async function getFrontPageContent() {
  const query = `
  query getFrontPageContent {
    pages(where: {title: "Home"}) {
      nodes {
        home {
          collegeFund
          collegesAndUniversities
          countries
          healthcareDescription
          intlAdmissionDescription
          missionStatement
          tagline
          title
          whatWeDoDescription
        }
      }
    }
  }
  `;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    }
  );

  const { data } = await res.json();

  return data.pages.nodes[0].home
}

export default async function Home() {
  const data = await getFrontPageContent();
  
  return (
    <main className="home">
      <Suspense fallback={<Loading/>}>
        <Banner companyName={data.title} tagLine={data.tagline}/>
        <About whatWeDoDescription={data.whatWeDoDescription} missionStatement={data.missionStatement} collegeFund={data.collegeFund}
          collegesAndUniversities={data.collegesAndUniversities} countries={data.countries}
        />
        <Services intlAdmissionDescription={data.intlAdmissionDescription} healthcareDescription={data.healthcareDescription}/>
        <Blog/>
        <Contact/>
      </Suspense>
    </main>
  );
}
