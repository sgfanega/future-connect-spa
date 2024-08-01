

interface Banner {
  companyName: string;
  tagLine: string;
  imageSrc: ImageSrc;
}

interface ImageSrc {
  altText: string;
  title: string;
  sourceUrl: string;
}

export default async function Banner({ companyName, tagLine, imageSrc} : Banner) {  

  const bannerStyle = {
    minHeight: "70dvh",
    position: "relative",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc.sourceUrl})`,
    backgroundPosition: "60% 30%",
    backgroundSize: "cover"
  } as React.CSSProperties;

  return (
  <section className="container-fluid home-banner d-flex flex-column justify-content-center align-items-center" style={bannerStyle}>
    <h1 className="display-1 fw-bold text-tertiary text-uppercase">{companyName}</h1>
    <p className="fs-4 fw-medium text-primary text-uppercase">{tagLine}</p>
  </section>
  )
}