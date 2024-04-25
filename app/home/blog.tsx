import CarouselCenterMode from "../components/carouselCenterMode";

const blogStyle ={ 
  padding: "3rem 0"
} as React.CSSProperties;

export default function Blog() {
  return (
    <section className="container-fluid home-blog bg-body-secondary overflow-hidden" style={blogStyle}>
      <h2 className="display-2 fw-medium text-tertiary text-center">Recent Blogs</h2>
      <hr className="custom-hr-tertiary"/>
      <div className="row justify-content-center">
        <div className="col-10 col-md-8 col-lg-6">
          <CarouselCenterMode/>
        </div>
      </div>
  </section>
  );
}