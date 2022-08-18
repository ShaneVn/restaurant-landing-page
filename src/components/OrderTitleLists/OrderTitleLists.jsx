import React from "react";

function OrderTitleLists({ category, active, setSelected }) {
  return (
    <div>
      <li  className={ `py-2 nav-hover ${active && "text-color_golden duration-200 ease-in" }`}
      onClick={()=>setSelected(category)}>{category}</li>
    </div>
  );
}

export default OrderTitleLists;
