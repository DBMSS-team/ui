import React, { useState } from "react";

import "../styles/Order.css";

export default function Order() {
  const [clickedItem, setclickedItem] = useState("Quick Bites");
  const listItems = [
    {
      name: "Quick Bites",
      items: [
        { name: "Shawarma", type: "V", price: 32 },
        { name: "Egg Omlett", type: "N", price: 33 },
      ],
    },
    {
      name: "Starter",
      items: [
        { name: "steew", type: "N", price: 2 },
        { name: "Egg Omlett", type: "N", price: 33 },
      ],
    },
    {
      name: "Main Course",
      items: [
        { name: "adrs", type: "V", price: 52 },
        { name: "Egg Omlett", type: "N", price: 33 },
      ],
    },
    {
      name: "Combos",
      items: [
        { name: "Shawarma", type: "V", price: 32 },
        { name: "Egg Omlett", type: "N", price: 33 },
        { name: "Shawarma", type: "V", price: 32 },
        { name: "Shawarma", type: "V", price: 32 },
        { name: "Shawarma", type: "V", price: 32 },
      ],
    },
  ];

  return (
    <div className="Order__home">
      <div className="Order__categories">
        {listItems.map((item) => (
          <div
            onClick={() => setclickedItem(item.name)}
            className={
              clickedItem === item.name
                ? "Order__category Order__category-selected"
                : "Order__category"
            }
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="Order__items">
        <div className="Order__item__category">{clickedItem}</div>
        {listItems
          .find((item) => item.name === clickedItem)
          .items.map((item) => (
            <div className="Order__item__details">
              <div className="Order__item__line">
                <div className="Order__item__type">
                  {item.type === "V" ? (
                    <img src="/Images/Veg.svg" />
                  ) : (
                    <img src="/Images/NonVeg.svg" />
                  )}
                </div>
                <div className="Order__item__name">{item.name}</div>
              </div>
              <div className="Order__item__price">{"₹ " + item.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
