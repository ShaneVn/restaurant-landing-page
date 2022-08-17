import React from "react";
import { Button } from "../../components";
import { images } from "../../constants";

function OrderBody() {
  return (
    <div className="flex flex-col items-center bg-color_black section__padding">
      <h1 className="section-title mb-[90px]">Choose Your favorite</h1>
      <div className="flex flex__center">
        <div className="flex flex-col justify-center items-center space-y-14 flex-1">
          <div
            className="h-[300px] w-[300px] "
            style={{ boxShadow: "8px 8px #fdc500" }}
          >
            <img src={images.product01} alt="" />
          </div>
          <div className="text-center w-[50%]">
            <h1 className="p__cormorant">Supreme Pizza</h1>
            <p className="body_text text-center">
              Marinara sauce, basil, italian sausage, roma tomatoes, olives, and
              pesto
            </p>
          </div>
          <Button text="Add To Cart" />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default OrderBody;
