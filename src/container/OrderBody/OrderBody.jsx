import { useEffect, useState } from "react";
import { Button, OrderItem } from "../../components";
import { images } from "../../constants";
import OrderTitleLists from "../../components/OrderTitleLists/OrderTitleLists";
import { data } from "../../constants";

function OrderBody() {
  const [firstSelected, setFirstSelected] = useState("Pizza");
  const [firstData, setFirstData] = useState([]);

  const [secondSelected, setSecondSelected] = useState("Dessert");
  const [secondData, setSecondData] = useState([]);

  const pizzaMenu = data.pizzaMenu;
  const saladMenu = data.saladMenu;
  const pastaMenu = data.pastaMenu;
  const dessertMenu = data.dessertMenu;

  useEffect(() => {
    switch (firstSelected) {
      case "Pizza":
        setFirstData(pizzaMenu);
        break;
      case "Salad":
        setFirstData(saladMenu);
        break;
      case "Pasta":
        setFirstData(pastaMenu);
        break;
      default:
        setFirstData(pizzaMenu);
    }
  }, [firstSelected]);

  useEffect(() => {
    switch (secondSelected) {
      case "Dessert":
        setSecondData(dessertMenu);
        break;
      default:
        setSecondData(dessertMenu);
    }
  }, [secondSelected]);

  return (
    <div
      className="flex flex-col items-center bg-color_black section__padding"
      id="order_body"
    >
      <h1 className="section-title mb-[50px] mt-3">Choose Your favorite</h1>

      <ul
        className="flex items-center p__cormorant mb-12 sm:space-x-[200px] space-x-[90px] 
      border-t-[1px] border-b-[1px]  border-color_golden cursor-pointer "
      >
        {data.orderTitleListOne.map((title) => (
          <OrderTitleLists
            category={title.category}
            key={title.category + title.id}
            setSelected={setFirstSelected}
            active={firstSelected === title.category}
          />
        ))}
      </ul>

      {/* food items here */}
      <div className="flex flex-col 2xl:flex-row justify-center items-center mb-[150px]">
        {firstData.map((data) => (
          <OrderItem
            image={data.img}
            alt={data.alt}
            desc={data.desc}
            name={data.name}
            price={data.price}
          />
        ))}
      </div>

      <div className="order__banner h-[400px] w-screen flex flex-col items-center justify-center">
        {/* <h1 className="section-title">Melt into your mouth</h1>
            <p className="p__opensans">what are you waiting for?</p> */}
      </div>

      <h1 className="section-title mb-[50px] my-[90px]">
        Some Sweet Treats for you
      </h1>

      <ul
        className="flex items-center p__cormorant mb-12 sm:space-x-[200px] space-x-[90px] 
      border-t-[1px] border-b-[1px]  border-color_golden cursor-pointer "
      >
        {data.orderTitleListTwo.map((title) => (
          <OrderTitleLists
            category={title.category}
            key={title.category + title.id}
            setSelected={setSecondSelected}
            active={secondSelected === title.category}
          />
        ))}
      </ul>

      <div className="flex flex-col 2xl:flex-row justify-center items-center mb-[100px]">
        {secondData.map((data) => (
          <OrderItem
            image={data.img}
            alt={data.alt}
            desc={data.desc}
            name={data.name}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderBody;