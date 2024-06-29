import React, { useEffect, useState } from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "./../sample-burgers";
import Burger from "./Burger";
import base from "../base";

function App({
  match: {
    params: { restaurant },
  },
}) {
  let [burgers, setBurger] = useState({});
  let [order, setOrder] = useState({});

  useEffect(() => {
    const localStorageRef = localStorage.getItem(restaurant);
    if (localStorageRef) {
      setOrder(JSON.parse(localStorageRef));
    }

    const ref = base.syncState(`${restaurant}/burgers`, {
      context: {
        setState: ({ burgers }) => setBurger({ ...burgers }),
        state: { burgers },
      },
      state: "burgers",
    });

    return () => {
      base.removeBinding(ref);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(restaurant, JSON.stringify(order));
  });

  const addBurger = (burger) => {
    burgers = { ...burgers };
    burgers[`burger ${Date.now()}`] = burger;
    setBurger(burgers);
  };

  const deleteBurger = (key) => {
    burgers = { ...burgers };
    delete burgers[key];
    setBurger(burgers);
  };

  const deleteFromOrder = (key) => {
    order = { ...order };
    delete order[key];
    setOrder(order);
  };

  const updateBurger = (newBurger, index) => {
    burgers = { ...burgers };
    burgers[index] = newBurger;
    setBurger(burgers);
  };

  const loadBurger = () => {
    setBurger(sampleBurgers);
  };

  const addToOrder = (key) => {
    order = { ...order };
    order[key] = order[key] + 1 || 1;
    setOrder(order);
  };

  return (
    <div className="burger-paradise">
      <div className="menu">
        <Header title="Hot Burger" />
        <ul className="burgers">
          {Object.keys(burgers).map((key) => (
            <Burger
              addToOrder={addToOrder}
              key={key}
              index={key}
              details={burgers[key]}
            />
          ))}
        </ul>
      </div>
      <Order
        deleteFromOrder={deleteFromOrder}
        burgers={burgers}
        order={order}
      />
      <MenuAdmin
        burgers={burgers}
        addBurger={addBurger}
        loadBurger={loadBurger}
        updateBurger={updateBurger}
        deleteBurger={deleteBurger}
      />
    </div>
  );
}
export default App;
