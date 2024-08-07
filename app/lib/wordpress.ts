// GraphQL Queries

async function fetchData(query: string) {
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

  return data.pages.nodes[0]
}

// Retrieves data from about us page
export async function getAboutUsPageContent() {
  const query = `
  query getAboutUsPageContent {
    pages(where: {title: "About Us"}) {
      nodes {
        title
        slug
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
  `;
  
  return fetchData(query);
}

// Retrieves counter data from about us section in home page
export async function getCounterContent() {
  const query = `
    query getFrontPageContent {
      pages(where: {title: "Home"}) {
        nodes {
          home {
            collegeFund
            collegesAndUniversities
            countries
          }
        }
      }
    }
  `;

  return fetchData(query);
}

export async function getFrontPageContent() {
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
          healthcareImage {
            node {
              altText
              sourceUrl
              title
            }
          }
          bannerBackgroundImage {
            node {
              altText
              sourceUrl
              title
            }
          }
          intlAdmissionImage {
            node {
              altText
              sourceUrl
              title
            }
          }
        }
      }
    }
  }
  `;

  return fetchData(query);
}