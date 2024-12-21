import { useState } from "react";
import css from "./Filters.module.css";

const Filters = () => {
  const [filters, setFilters] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    van: false,
    fullyIntegrated: false,
    alcove: false,
  });

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // запобігає перезавантаженню сторінки при натисканні на "submit"
    console.log("Selected filters:", filters);

    // Тут можна зробити пошук або відправити фільтри на сервер
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className={css.filterTitle}>Filters</h3>
      <h4 className={css.filterName}>Vehicle equipment</h4>
      <div className={css.iconsContainer}>
        <label className={css.filterLabel}>
          <input
            className={css.hiddenCheckbox}
            type="checkbox"
            name="ac"
            checked={filters.ac}
            onChange={handleFilterChange}
          />
          <span>
            <svg width="32" height="32">
              <use href="/sprite.svg#wind" />
            </svg>
            AC
          </span>
        </label>

        <label className={css.filterLabel}>
          <input
            className={css.hiddenCheckbox}
            type="checkbox"
            name="automatic"
            checked={filters.automatic}
            onChange={handleFilterChange}
          />
          <span>
            <svg width="32" height="32">
              <use href="/sprite.svg#automatic" />
            </svg>
            Automatic
          </span>
        </label>

        <label className={css.filterLabel}>
          <input
            className={css.hiddenCheckbox}
            type="checkbox"
            name="kitchen"
            checked={filters.kitchen}
            onChange={handleFilterChange}
          />
          <span>
            <svg width="32" height="32">
              <use href="/sprite.svg#kitchen" />
            </svg>
            Kitchen
          </span>
        </label>

        <label className={css.filterLabel}>
          <input
            className={css.hiddenCheckbox}
            type="checkbox"
            name="tv"
            checked={filters.tv}
            onChange={handleFilterChange}
          />
          <span>
            <svg width="32" height="32">
              <use href="/sprite.svg#tv" />
            </svg>
            TV
          </span>
        </label>

        <label className={css.filterLabel}>
          <input
            className={css.hiddenCheckbox}
            type="checkbox"
            name="bathroom"
            checked={filters.bathroom}
            onChange={handleFilterChange}
          />
          <span>
            <svg width="32" height="32">
              <use href="/sprite.svg#shower" />
            </svg>
            Bathroom
          </span>
        </label>
      </div>

      <h4 className={css.filterName}>Vehicle type</h4>
      <div className={css.iconsContainer}>
        <label className={css.filterLabel}>
          <input
            className={css.hiddenCheckbox}
            type="checkbox"
            name="van"
            checked={filters.van}
            onChange={handleFilterChange}
          />
          <span>
            <svg width="32" height="32">
              <use href="/sprite.svg#van" />
            </svg>
            Van
          </span>
        </label>

        <label className={css.filterLabel}>
          <input
            className={css.hiddenCheckbox}
            type="checkbox"
            name="fullyIntegrated"
            checked={filters.fullyIntegrated}
            onChange={handleFilterChange}
          />
          <span>
            <svg width="32" height="32">
              <use href="/sprite.svg#integrated" />
            </svg>
            Fully integrated
          </span>
        </label>

        <label className={css.filterLabel}>
          <input
            className={css.hiddenCheckbox}
            type="checkbox"
            name="alcove"
            checked={filters.alcove}
            onChange={handleFilterChange}
          />
          <span>
            <svg width="32" height="32">
              <use href="/sprite.svg#alcove" />
            </svg>
            Alcove
          </span>
        </label>
      </div>
      <button type="submit" className={css.filterBtn}>
        Search
      </button>
    </form>
  );
};

export default Filters;
