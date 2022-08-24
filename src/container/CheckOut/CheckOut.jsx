import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/atoms";
import { Button, CheckOutDetailsList, CheckOutItems } from "../../components";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const [cart, setCart] = useRecoilState(cartState);
  const navigate = useNavigate();

  const totalItems = cart.reduce((a, b) => a + b.quantity, 0);

  const totalBeforeTax =
    Math.round(cart.reduce((a, b) => a + b.quantity * b.price, 0) * 1e2) / 1e2;

  const taxes = Math.round(totalBeforeTax * 0.0725 * 1e2) / 1e2;

  const orderTotalAfterTaxes = (taxes + totalBeforeTax).toFixed(2);

  return (
    <div className="section__padding app__bg">
      <h1 className="section-title mt-[60px] ">
        {cart.length > 0 ? "Your Orders" : "You Have No Orders Yet"}
      </h1>
      <div
        id="checkout"
        className="flex flex-col 2xl:flex-row   
      min-h-screen items-center justify-between 2xl:items-start mt-12"
      >
        <div className=" w-full 2xl:w-[60%]  flex flex-col items-center ">
          <div className="min-h-screen w-full flex flex-col items-center ">
            <div className="flex flex-col space-y-5 w-full">
              <ul className="w-full flex items-center justify-between p__cormorant">
                <li>PRODUCT</li>
                <li>PRICE</li>
                <li>QUANTITY</li>
                <li>TOTAL</li>
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
              <div className=" self-start my-12" onClick={() => setCart([])}>
                <Button text="Clear All" />
              </div>
            )}
          </div>
        </div>

        <div className="flex-col-center font-openSans tracking-wide text-white w-[70%] 2xl:w-[20%] space-y-12 self-start md:w-[50%] mt-[-20%] 2xl:mt-0">
          <CheckOutDetailsList category={"Total Items:"} info={totalItems} />
          <CheckOutDetailsList category={"Tax:"} info={`$${taxes}`} />
          <CheckOutDetailsList
            category={"Pre Tax:"}
            info={`$${totalBeforeTax}`}
          />
          <CheckOutDetailsList
            category={"Order Total:"}
            info={`$${orderTotalAfterTaxes}`}
          />

          {cart.length > 0 && (
            <a
              href="#payment"
              className="bg-[#FFA41C] relative group duration-500 ease-in-out py-3 flex__center font-medium w-full rounded-lg text-color_black cursor-pointer "
              onClick={() => navigate("/checkout/payment")}
            >
              <div className="absolute inset-0 bg-color_black opacity-30 hidden group-hover:flex w-full h-full" />
              CheckOut
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
