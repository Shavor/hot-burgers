import React from "react";
import PropTypes from "prop-types";

Burger.propTypes = {
  name: PropTypes.string,
  index: PropTypes.string,
  addToOrder: PropTypes.func,
};

function Burger({ details, index, addToOrder }) {
  const { image, name, price, desc, status } = details;
  const isAbailable = status === "available";

  return (
    <li className="menu-burger">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="burger-details">
        <h3 className="burger-name">
          {name} <span className="price">{price} ₽</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={() => addToOrder(index)}
          className="buttonOrder"
          disabled={!isAbailable}
        >
          {isAbailable ? "Заказать" : "Временно нет"}
        </button>
      </div>
    </li>
  );
}
export default Burger;
