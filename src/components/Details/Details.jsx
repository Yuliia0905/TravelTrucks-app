import { useSelector } from "react-redux";
import { selectDetails } from "../../redux/campers/selectors.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import css from "./Details.module.css";
// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";

// import { NavLink } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const backLink = useRef(location?.state ?? "/");
  const details = useSelector(selectDetails);
  console.log(details);

  const camperLoading = useSelector((state) => state.campers.camperLoading);
  const camperError = useSelector((state) => state.campers.camperError);

  // Стан завантаження
  if (camperLoading) {
    return <div>Завантаження...</div>; // Можна додати спінер чи стилізувати
  }

  // Стан помилки
  if (camperError) {
    return <div>Помилка: {camperError}</div>;
  }

  // Якщо дані відсутні
  if (!details) {
    return <div>Деталі кемпера недоступні</div>;
  }

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <div>
      <Link className={css.backLink} to={backLink.current}>
        ← Go back
      </Link>
      <h3 className={css.detailsTitle}>{details.name}</h3>
      <div className={css.ratingLocContainer}>
        <div className={css.ratingContainer}>
          <FaStar className={css.starIcon} />
          <p className={css.reviews}>
            {details.rating}({details.reviews ? details.reviews.length : 0}
            Reviews)
          </p>
        </div>
        <div className={css.locationContainer}>
          <svg width="16" height="16">
            <use href="/sprite.svg#map" />
          </svg>
          <p className={css.location}>{details.location}</p>
        </div>
      </div>
      <p className={css.detailsPrice}>&#x20AC;{details.price}</p>
      {/* <div className={css.imgContainer}> */}
      {details.gallery.length > 0 ? (
        <ul className={css.imgContainer}>
          {details.gallery.map((item, index) => (
            <li key={index} className={css.detailsItem}>
              <img
                src={item.thumb}
                alt={`Gallery image ${index + 1}`}
                className={css.detailsImage}
              />
            </li>
          ))}
        </ul>
      ) : (
        defaultImg
      )}
      {/* </div> */}
      <p className={css.text}>{details.description}</p>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="features"
        >
          Cast
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="reviews"
        >
          Reviwes
        </NavLink>
      </nav>
    </div>
  );
};

export default Details;
