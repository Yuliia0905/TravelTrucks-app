import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./AppBar.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;