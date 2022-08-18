import { useEffect, useState } from "react";
import { Button, OrderItem } from "../../components";
import { images } from "../../constants";
import OrderTitleLists from "../../components/OrderTitleLists/OrderTitleLists";
import { data } from "../../constants";

function OrderBody() {
  const [firstSelected, setFirstSelected] = useState("Pizza");
  const [firstData, setFirstData] = useState([]);

  const pizzaMenu = data.pizzaMenu
  const saladMenu = data.saladMenu
  const pastaMenu = data.pastaMenu

  useEffect(() => {
    switch (firstSelected) {
      case "Pizza":
        setFirstData(pizzaMenu);
        break;
      case "Salad":
        setFirstData(saladMenu);
        break;
      case "Pasta":
        setFirstData(pastaMenu)
        break;
      default:
        setFirstData(pizzaMenu);
    }
  }, [firstSelected]);

  
  return (
    <div className="flex flex-col items-center bg-color_black section__padding">
      <h1 className="section-title mb-[50px]">Choose Your favorite</h1>

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
      <div className="flex flex-col 2xl:flex-row justify-center items-center">
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
    </div>
  );
}

export default OrderBody;
