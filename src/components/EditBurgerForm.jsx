import React from "react";

function EditBurgerForm({ burger, updateBurger, index, deleteBurger }) {
  const handlChange = (e) => {
    const newBurger = {
      ...burger,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    updateBurger(newBurger, index);
  };

  return (
    <div className="burger-edit">
      <input
        onChange={handlChange}
        value={burger.name}
        name="name"
        type="text"
        placeholder="Название"
        autoComplete="off"
      />
      <input
        onChange={handlChange}
        value={burger.price}
        name="price"
        type="number"
        placeholder="Цена:"
        autoComplete="off"
      />
      <select
        onChange={handlChange}
        value={burger.status}
        name="status"
        className="status"
      >
        <option value="available">Доступно</option>
        <option value="unavailable">Не доступно</option>
      </select>
      <textarea
        value={burger.desc}
        onChange={handlChange}
        name="desc"
        placeholder="Описание"
      />
      <input
        onChange={handlChange}
        value={burger.image}
        name="image"
        type="text"
        placeholder="Изображение"
        autoComplete="off"
      />
      <button onClick={() => deleteBurger(index)}>Удалить бургер</button>
    </div>
  );
}

export default EditBurgerForm;
