import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from "prop-types";

MenuAdmin.propTypes = {
  addBurger: PropTypes.func.isRequired,
  loadBurger: PropTypes.func.isRequired,
};

function MenuAdmin({
  addBurger,
  loadBurger,
  burgers,
  updateBurger,
  deleteBurger,
}) {
  return (
    <div className="menu-admin">
      <h2>управление меню</h2>
      {Object.keys(burgers).map((key) => (
        <EditBurgerForm
          key={key}
          index={key}
          burger={burgers[key]}
          updateBurger={updateBurger}
          deleteBurger={deleteBurger}
        />
      ))}
      <AddBurgerForm addBurger={addBurger} />
      <button onClick={loadBurger}>Загрузить бургеры</button>
    </div>
  );
}
export default MenuAdmin;
