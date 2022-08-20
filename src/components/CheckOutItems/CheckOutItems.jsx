import React from "react";

function CheckOutItems({ image, name, price, quantity, total }) {
  return (
    <div className="flex flex-col ">
      <ul className="w-full flex items-center justify-between">
        <li className="p__cormorant w-[100px] h-[100px] flex flex-col sm:flex-row items-center">
          <img src={image} alt="" className=" mr-5 object-cover" />
          <h2> {name} </h2>
        </li>

        <li className="p__cormorant ml-[-50px]">${price}</li>
        <li className="p__cormorant">{quantity}</li>
        <li className="p__cormorant">${total}</li>
      </ul>
      <div className="border-b-[1px] border-color_gray mt-5" />
    </div>
  );
}

export default CheckOutItems;
