import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/atoms";
import { Button, CheckOutItems } from "../../components";

function CheckOut() {
  const [cart, setCart] = useRecoilState(cartState);

  const taxes =
    Math.round(
      cart.reduce((a, b) => a + b.quantity * b.price, 0) * 0.07 * 1e2
    ) / 1e2;

  const totalBeforeTax =
    Math.round(cart.reduce((a, b) => a + b.quantity * b.price, 0) * 1e2) / 1e2;

  const orderTotalAfterTaxes = (taxes + totalBeforeTax).toFixed(2);

  return (
    <div id="checkout" className="flex flex-col xl:flex-row section__padding app__bg bg-color_black min-h-screen items-center justify-between" >
      <div className="  sm:w-[60%]  flex flex-col items-center ">
        <div className="min-h-screen w-full flex flex-col items-center">
          <h1 className="section-title mt-[60px] mb-12">Your Orders </h1>

          <div className="flex flex-col space-y-5 w-full">
            <ul className="w-full flex items-center justify-between">
              <li className="p__cormorant">PRODUCT</li>
              <li className="p__cormorant">PRICE</li>
              <li className="p__cormorant">QUANTITY</li>
              <li className="p__cormorant">TOTAL</li>
            </ul>
            <div className="border-b-[1px] border-color_gray" />

            {cart.map((item) => (
              <CheckOutItems
                key={Math.random()}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                total={item.quantity * item.price}
                id={item.id}
              />
            ))}
          </div>
          {cart.length >0 &&
          <div className=" xl:self-start mt-12" onClick={() => setCart([])}>
            <Button text="clear all" />
          </div> }
        </div>
      </div>

      <div className="bg-color_black border-2 border-color_gray rounded-lg p-12 flex flex-col justify-center items-center">
        <h1 className="p__cormorant mb-12 text-center">
          Total Items: {cart.reduce((a, b) => a + b.quantity, 0)}
        </h1>

        <h1 className="p__cormorant mb-12 text-center">Taxes: ${taxes}</h1>

        <h1 className="p__cormorant mb-12">
          {" "}
          Total Before Tax: ${totalBeforeTax}
        </h1>

        <h1 className="p__cormorant mb-12">
          {" "}
          Order Total: ${orderTotalAfterTaxes}
        </h1>
        { cart.length > 0 && (<Button text="Place Order" />)}
      </div>
    </div>
  );
}

export default CheckOut;

{
  /* <h1 className="section-title mt-[100px]">
        Cart is empty, Please place an Order
      </h1> */
}
