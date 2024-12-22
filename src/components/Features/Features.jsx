import { useSelector } from "react-redux";
import css from "./Features.module.css";
import { selectDetails } from "../../redux/campers/selectors.js";
import { BsCupHot, BsFuelPump } from "react-icons/bs";

const Features = () => {
  const details = useSelector(selectDetails);

  return (
    <div className={css.featuresContainer}>
      <ul className={css.categoriesList}>
        {details.transmission === "automatic" && (
          <li className={css.categoriesListItem}>
            <svg width="20" height="16">
              <use href="/sprite.svg#automatic" />
            </svg>
            Automatic
          </li>
        )}
        {details.AC && (
          <li className={css.categoriesListItem}>
            <svg width="20" height="20">
              <use href="/sprite.svg#automatic" />
            </svg>
            AC
          </li>
        )}
        <li className={css.categoriesListItem}>
          <BsFuelPump className={css.icon} />
          {details.engine === "patrol" ? "Patrol" : "Diesel"}
        </li>
        {details.kitchen && (
          <li className={css.categoriesListItem}>
            <BsCupHot className={css.icon} />
            Kitchen
          </li>
        )}
      </ul>

      <p className={css.vehicle}>Vehicle details</p>
      <div className={css.lowContainer}>
        <ul>
          <li>Form</li>
          <li>Length</li>
          <li>Width</li>
          <li>Height</li>
          <li>Tank</li>
          <li>Consumption</li>
        </ul>
        <ul>
          <li>{details.form}</li>
          <li>{details.length}</li>
          <li>{details.width}</li>
          <li>{details.height}</li>
          <li>{details.tank}</li>
          <li>{details.consumption} </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
