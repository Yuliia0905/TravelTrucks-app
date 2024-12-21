import { useSelector } from "react-redux";
import { selectDetails } from "../../redux/campers/selectors.js";
// import css from "./Details.module.css";
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";

// import { NavLink } from "react-router-dom";

const Details = () => {
  const details = useSelector(selectDetails);
  //   console.log(details);

  return (
    <div>
      {/* <h3 className={css.detailsTitle}>{details.name}</h3>
      <div className={css.detailsRatingBlock}>
        <div className={css.detailsRating}>
          <FaStar className={css.detailsStarIcon} />
          <p className={css.detailsReviews}>
            {details.rating} ({details.reviews ? details.reviews.length : 0}
            Reviews)
          </p>
        </div>
        <div className={css.detailsRating}>
          <svg width="16" height="16">
            <use href="/sprite.svg#map" />
          </svg>
          <p className={css.detailsLocationTitle}>{details.location}</p>
        </div>
      </div>
      <div>
        <p className={css.detailsPrice}>&#x20AC;{details.price}</p>
      </div>
      {details.gallery.length > 0 ? (
        <ul className={css.detailsList}>
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
        <TbPhotoCancel className={css.detailsIconImage} />
      )}

      <p className={css.detailsDescription}> {details.description}</p>

      <div className={css.detailsNavigations}>
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <div className={css.detailsNavigationsContent}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </div> */}
    </div>
  );
};

export default Details;
