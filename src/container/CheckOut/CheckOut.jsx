import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/atoms";
import { Button, CheckOutItems } from "../../components";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const [cart, setCart] = useRecoilState(cartState);
  const navigate = useNavigate();

  const totalBeforeTax =
    Math.round(cart.reduce((a, b) => a + b.quantity * b.price, 0) * 1e2) / 1e2;

  const taxes = Math.round(totalBeforeTax * 0.0725 * 1e2) / 1e2;

  const orderTotalAfterTaxes = (taxes + totalBeforeTax).toFixed(2);

  return (
    <div
      id="checkout"
      className="flex flex-col 2xl:flex-row section__padding app__bg bg-color_black min-h-screen items-center justify-between"
    >
      <div className=" w-full 2xl:w-[60%]  flex flex-col items-center ">
        <div className="min-h-screen w-full flex flex-col items-center ">
          <h1 className="section-title mt-[60px] mb-12">
            {cart.length > 0 ? "Your Orders" : "You Have No Orders Yet"}
          </h1>

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
          {cart.length > 0 && (
            <div className=" xl:self-start my-12" onClick={() => setCart([])}>
              <Button text="Clear All" />
            </div>
          )}
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
        {cart.length > 0 && (
          <div onClick={() => navigate("/checkout/payment")}>
            {" "}
            <Button text="Check Out" />{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOut;
