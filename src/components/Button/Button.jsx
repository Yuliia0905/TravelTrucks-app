import { NavLink } from "react-router-dom";
import css from "./Button.module.css";

const Button = ({ text, to }) => {
  return (
    <NavLink to={to} className={css.btn}>
      {text}
    </NavLink>
  );
};

export default Button;
