import { NavLink } from "react-router-dom";
import css from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={css.logo}>
      <NavLink to="/">
        <svg width="136" height="16">
          <use href="/icons/sprite.svg#logo" />
        </svg>
      </NavLink>
    </div>
  );
};

export default Logo;
