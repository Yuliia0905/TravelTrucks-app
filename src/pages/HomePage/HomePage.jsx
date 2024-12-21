import css from "./HomePage.module.css";
import Button from "../../components/Button/Button.jsx";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h3 className={css.text}>
          You can find everything you want in our catalog
        </h3>
        <Button text=" View Now" to="/catalog" />
      </div>
    </div>
  );
};

export default HomePage;
