import FeaturedCoursesSlider from "./FeaturedCoursesSlider";
import OurInstructorsSlider from "./OurInstructorsSlider";

const OurInstructors = (props) => {
  return <div>
      <div className="container-fluid py-5">
          <div className="container py-5">
              <div className="section-title text-center position-relative mb-5">
                  <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">المعلمون في معهد إتقان</h6>
                  <h1 className="display-4">لدينا فريق كامل من المبرمجين لتعليمك</h1>
              </div>
              <OurInstructorsSlider />
          </div>
      </div>
  </div>
};

export default OurInstructors;