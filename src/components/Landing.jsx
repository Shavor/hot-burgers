import React, { useState } from "react";
import restaurants from "./../sample-restaurants";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

Landing.propTypes = {
  display: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function Landing() {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  let history = useHistory();

  const restor = restaurants.map((item) => (
    <li onClick={() => getTitle(item)} key={item.id}>
      {item.title}
    </li>
  ));

  const displayList = () => {
    setDisplay(!display);
  };

  const getTitle = (item) => {
    const { title, url } = item;
    setTitle(title);
    setUrl(url);
    displayList();
  };

  const goToRestaraunt = () => {
    history.push(`/restaurant/:${url}`);
  };

  return (
    <>
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div
            onClick={() => displayList()}
            className="restaurant_select_top-header font-effect-outline"
          >
            {title ? title : "Выберите ресторан"}
          </div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
          {display ? (
            <div className="restaurant_select_bottom">
              <ul>{restor}</ul>
            </div>
          ) : null}
        </div>
        {title && !display ? (
          <button onClick={goToRestaraunt}>Перейти в ресторан</button>
        ) : null}
      </div>
    </>
  );
}
export default Landing;
