import { useEffect, useState } from "react";
import { Button, OrderItem } from "../../components";
import { images } from "../../constants";
import OrderTitleLists from "../../components/OrderTitleLists/OrderTitleLists";
import { data } from "../../constants";

function OrderBody() {
  const [selected, setSelected] = useState("Pizza");

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
            setSelected={setSelected}
            active={selected === title.category}
          />
        ))}
      </ul>

      {/* food items here */}
      <div className="flex flex-col 2xl:flex-row justify-center items-center">
        {data.pizzaMenu.map((pizza) => (
          <OrderItem
            image={pizza.img}
            alt={pizza.alt}
            desc={pizza.desc}
            name={pizza.name}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderBody;
