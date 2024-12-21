import css from "./CamperListItem.module.css";
import Button from "../Button/Button.jsx";
import { FaStar } from "react-icons/fa";
import { BsCupHot, BsFuelPump } from "react-icons/bs";

const CamperListItem = ({
  id,
  rating,
  description,
  gallery,
  price,
  name,
  reviews,
  location,
  kitchen,
  AC,
  transmission,
  engine,
}) => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img src={gallery[0].thumb} alt={name} className={css.img} />
      </div>
      <div className={css.descContainer}>
        <div className={css.titlePriceContainer}>
          <h3 className={css.name}>{name}</h3>
          <div className={css.priceHeart}>
            <p className={css.price}>&#x20AC;{price}</p>
            <svg width="26" height="24">
              <use href="/sprite.svg#heart" />
            </svg>
          </div>
        </div>

        <div className={css.ratingLocContainer}>
          <div className={css.ratingContainer}>
            <FaStar className={css.starIcon} />
            <p className={css.reviews}>
              {rating}({reviews ? reviews.length : 0} Reviews)
            </p>
          </div>
          <div className={css.locationContainer}>
            <svg width="16" height="16">
              <use href="/sprite.svg#map" />
            </svg>
            <p className={css.location}>{location}</p>
          </div>
        </div>

        <p className={css.description}>{description}</p>

        <ul className={css.categoriesList}>
          {transmission === "automatic" && (
            <li className={css.categoriesListItem}>
              <svg width="20" height="16">
                <use href="/sprite.svg#automatic" />
              </svg>
              Automatic
            </li>
          )}
          {AC && (
            <li className={css.categoriesListItem}>
              <svg width="20" height="20">
                <use href="/sprite.svg#automatic" />
              </svg>
              AC
            </li>
          )}
          <li className={css.categoriesListItem}>
            <BsFuelPump className={css.icon} />
            {engine === "patrol" ? "Patrol" : "Diesel"}
          </li>
          {kitchen && (
            <li className={css.categoriesListItem}>
              <BsCupHot className={css.icon} />
              Kitchen
            </li>
          )}
        </ul>

        <Button text="Show more" to={`/catalog/${id}`} />
      </div>
    </div>
  );
};

export default CamperListItem;
