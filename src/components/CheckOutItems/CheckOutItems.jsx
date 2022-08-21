import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/atoms";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CheckOutItems({ image, name, price, quantity, total, id }) {
  const [cart, setCart] = useRecoilState(cartState);
  const decreaseItems = () => {
    const deleteItemIndex = cart.findIndex((index) => index.id === id);

    if (cart[deleteItemIndex].quantity > 1) {
      setCart((cart) =>
        cart.map((item) => {
          if (item.id === id && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart((cart) => cart.filter((item) => item.id !== id));
    }
  };

  const increaseItmes = () => {
    setCart((cart) =>
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex flex-col  ">
      <ul className="w-full flex items-center xl:justify-between  sm:flex-col xl:flex-row  ">
        <li className="p__cormorant w-[100px] h-[100px] flex flex-col sm:flex-row  items-center ">
          <img
            src={image}
            alt=""
            className=" mr-5 object-cover w-full h-full"
          />
          <div className="pb-5">
            <h2> {name} </h2>
          </div>
        </li>

        <li className="p__cormorant xl:ml-[20px]">${price}</li>
        <div className="flex lg:space-x-6 space-x-3 items-center justify-center border-[1px] border-color_gray rounded-md lg:py-2 lg:px-5 mx-6 lg:mx-0 py-2 px-2">
          <div
            className=" cursor-pointer text-white nav-hover"
            onClick={increaseItmes}
          >
            <AiOutlinePlus fontSize={15} />
          </div>
          <li className="p__cormorant">{quantity}</li>
          <div
            className=" cursor-pointer text-white nav-hover"
            onClick={decreaseItems}
          >
            <AiOutlineMinus fontSize={15} />
          </div>
        </div>
        <li className="p__cormorant">${total.toFixed(2)}</li>
      </ul>

      <div className="border-b-[1px] border-color_gray mt-5" />
    </div>
  );
}

export default CheckOutItems;
