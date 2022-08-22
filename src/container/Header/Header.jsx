import { SubHeading } from "../../components";
import { Button } from "../../components";
import { header_bg } from "../../constants";

const Header = () => {
  return (
    <div className="h-screen w-full relative" id="home">
      <video
        className="w-full h-full object-cover"
        src={header_bg}
        autoPlay
        loop
        muted
      />
      {/* block of text here */}
      <div
        className="flex flex-col items-center justify-center absolute inset-0 text-center"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <div className="space-y-7  ">
          <div className="">
            <h1 className="section-title font-bold text-white">
              The King <br />
              Of Fine Dining
            </h1>
          </div>
          <div className=""></div>
          <Button text="Explore Menu" section="menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
