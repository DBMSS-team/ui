import React, { useContext } from "react";

import '../styles/Order.css';

export default function Order() {
  const listItems = [
    {
      name: "Quick Bites",
      items: [
        { name: "Shawarma", type: "veg", price: 32 },
        { name: "Egg Omlett", type: "Nveg", price: 33 },
      ],
    },
    {
      name: "Starter",
      items: [
        { name: "Shawarma", type: "veg", price: 32 },
        { name: "Egg Omlett", type: "Nveg", price: 33 },
      ],
    },
    {
      name: "Main Course",
      items: [
        { name: "Shawarma", type: "veg", price: 32 },
        { name: "Egg Omlett", type: "Nveg", price: 33 },
      ],
    },
    {
      name: "Combos",
      items: [
        { name: "Shawarma", type: "veg", price: 32 },
        { name: "Egg Omlett", type: "Nveg", price: 33 },
      ],
    },
  ];

  return (
    <div className="Order__home">
      <div className="Order__categories">
        {listItems.map((item) => (
          <div className="Order__category">{item.name}</div>
        ))}
      </div>
      <div className="Order__items">column2</div>
    </div>
  );
}
