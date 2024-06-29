import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Header(props) {
  const { title } = props;

  return (
    <header className="top">
      <div className="wrap">
        <div className="header-content">
          <div className="header-rating">
            <div className="header-rating_tag">Рейтинг</div>
            <div className="header-rating_icon">★★★★</div>
          </div>
        </div>
        <div className="header-divider"></div>
        <h1 className="font-effect-fire-animation">{title}</h1>
        <h3>
          <span>
            Быстрая доставка <span className="sub-header">#бургеров</span>
          </span>
        </h3>
      </div>
    </header>
  );
}
export default Header;
