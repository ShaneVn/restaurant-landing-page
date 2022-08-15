import { SubHeading } from "../../components";
import { Button } from "../../components";

const Header = () => {
  return (
    <div className="bg-black ">
      <div
        className="flex items-center justify-between min-h-screen section__padding app__header "
        id="home"
      >
        {/* block of text here */}
        <div
          className="app__wrapper_info"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <div class="space-y-7  ">
            <SubHeading title={"Chase The New Flavor"} />
            <div className="lg:w-[70%]">
              <h1 className="section-title">The Key To Fine Dining</h1>
            </div>
            <div className="lg:w-[70%]">
              <p className="body_text mb-12 ">
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
                aliquam amet tellus
              </p>
            </div>
            <Button text="Explore Menu" section="menu"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
