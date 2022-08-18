import React from "react";

function OrderTitleLists({ category, active, setSelected }) {
  return (
    <div>
      <li  className={ `py-2  ${active && "text-color_gray duration-200 ease-in" }`}
      onClick={()=>setSelected(category)}>{category}</li>
    </div>
  );
}

export default OrderTitleLists;
