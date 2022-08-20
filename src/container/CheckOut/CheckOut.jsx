import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/atoms";
import { Button, CheckOutItems } from "../../components";

function CheckOut() {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div
      className="app__bg min-h-screen w-full section__padding flex flex-col items-center"
      id="checkout"
    >
      {cart.length > 0 ? (
        <div className="app__bg min-h-screen w-full flex flex-col items-center">
          <h1 className="section-title mt-[60px] mb-12">Your Orders </h1>

          <div className="flex flex-col space-y-5 w-full">
            <ul className="w-full flex items-center justify-between">
              <li className="p__cormorant">PRODUCT</li>
              <li className="p__cormorant">PRICE</li>
              <li className="p__cormorant">QUANTITY</li>
              <li className="p__cormorant">TOTAL</li>
            </ul>
            <div className="border-b-[1px] border-color_gray" />
            {/* <ul className="w-full flex items-center justify-between">
              <li className="p__cormorant w-[100px] h-[100px] flex flex-col sm:flex-row items-center">
                <img
                  src={cart[0].image}
                  alt=""
                  className="object-cover mr-5"
                />
                <h2> {cart[0].name} </h2>
              </li>

              <li className="p__cormorant ml-[-50px]">${cart[0].price}</li>
              <li className="p__cormorant">{cart[0].quantity}</li>
              <li className="p__cormorant">${cart.reduce((a,b)=> a + b.quantity * b.price, 0)}</li>
            </ul>
            <div className="border-b-[1px] border-color_gray" /> */}
            {cart.map((item) => (
              <CheckOutItems
                key={Math.random()}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                total={item.quantity * item.price}
              />
            ))}
          </div>
          <div className=" self-start mt-12" onClick={() => setCart([])}>
            <Button text="clear all" />
          </div>

          <h1 className="p__cormorant self-end mb-12"> Grand Total: ${(cart.reduce((a,b)=>a + b.quantity * b.price,0)).toFixed(2)}</h1>
        </div>
      ) : (
        <h1 className="section-title mt-[100px]">
          Cart is empty, Please place an Order
        </h1>
      )}
    </div>
  );
}

export default CheckOut;
