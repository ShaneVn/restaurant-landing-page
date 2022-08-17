import React from "react";
import { Button, OrderItem } from "../../components";
import { images } from "../../constants";

function OrderBody() {
  return (
    <div className="flex flex-col items-center bg-color_black section__padding">
      <h1 className="section-title mb-[50px]">Choose Your favorite</h1>

      <div
        className="flex items-center p__cormorant mb-12 sm:space-x-[200px] space-x-[90px] py-2
      border-t-[1px] border-b-[1px]  border-color_golden cursor-pointer  "
      >
        <h1 className="nav-hover">Pizza</h1>
        <h1 className="nav-hover">Steak</h1>
        <h1 className="nav-hover">Pasta</h1>
      </div>

      {/* food items here */}
      <div className="flex justify-center items-center ">
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
        </div>
        {/* <OrderItem image={images.product02} text="Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto" title="Hawaiian Paradise"/> */}
      </div>
    </div>
  );
}

export default OrderBody;
