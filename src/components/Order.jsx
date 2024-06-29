import React from "react";
import Shipment from "./Shipment";

function Order({ burgers, order, deleteFromOrder }) {
  const orderIds = Object.keys(order);
  let isAvailable;
  const total = orderIds.reduce((prev, key) => {
    const burger = burgers[key];
    const count = order[key];

    isAvailable = burger && burger.status === "available";

    if (isAvailable) {
      return prev + burger.price * count;
    }
    return prev;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Ваш заказ</h2>
      <ul className="order">
        {orderIds.map((key) => {
          const burger = burgers[key];
          const count = order[key];

          if (!burger) return null;
          if (!isAvailable) {
            return (
              <li className="unavailable" key={key}>
                Извините, {burger ? burger.name : "бургер"} временно не доступен
              </li>
            );
          }
          return (
            <li key={key}>
              <span>
                <span>{count} </span>шт. {burger.name}
                <span> {count * burger.price} ₽</span>
              </span>
              <button
                onClick={() => deleteFromOrder(key)}
                className="cancelitem"
              >
                &times;
              </button>
            </li>
          );
        })}
      </ul>
      {total > 0 ? (
        <Shipment total={total} />
      ) : (
        <div className="nothingSelected">
          Выберите блюдо и добавьте к заказу
        </div>
      )}
    </div>
  );
}
export default Order;
