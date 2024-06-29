import React, { createRef } from "react";

function AddBurgerForm({ addBurger }) {
  const nameRef = createRef();
  const priceRef = createRef();
  const statusRef = createRef();
  const descRef = createRef();
  const imageRef = createRef();

  const creatBurger = (e) => {
    e.preventDefault();
    const burger = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value || 0),
      status: statusRef.current.value,
      descr: descRef.current.value,
      img: imageRef.current.value,
    };
    e.currentTarget.reset();
    addBurger(burger);
  };

  return (
    <form onSubmit={creatBurger} className="burger-edit">
      <input
        ref={nameRef}
        name="name"
        type="text"
        placeholder="Название"
        autoComplete="off"
      />
      <input
        ref={priceRef}
        name="price"
        type="number"
        placeholder="Цена:"
        autoComplete="off"
      />
      <select ref={statusRef} name="status" className="status">
        <option value="available">Доступно</option>
        <option value="unavailable">Убрать из меню</option>
      </select>
      <textarea ref={descRef} name="desc" placeholder="Описание" />
      <input
        ref={imageRef}
        name="image"
        type="text"
        placeholder="Изображение"
        autoComplete="off"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
export default AddBurgerForm;
