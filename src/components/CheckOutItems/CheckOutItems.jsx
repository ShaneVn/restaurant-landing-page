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
    <div className="flex flex-col ">
      <ul className="w-full flex items-center justify-between">
        <li className="p__cormorant w-[100px] h-[100px] flex flex-col sm:flex-row items-center">
          <img
            src={image}
            alt=""
            className=" mr-5 object-cover w-full h-full"
          />
          <h2> {name} </h2>
        </li>

        <li className="p__cormorant ml-[20px]">${price}</li>
        <div className="flex space-x-6 items-center justify-center border-[1px] border-color_gray rounded-md py-2 px-5">
          <div className=" cursor-pointer text-white nav-hover" onClick={increaseItmes}>
            <AiOutlinePlus fontSize={15} />
          </div>
          <li className="p__cormorant">{quantity}</li>
          <div className=" cursor-pointer text-white nav-hover" onClick={decreaseItems}>
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
