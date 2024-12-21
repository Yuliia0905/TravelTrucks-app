import css from "./Location.module.css";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Filters from "../Filters/Filters.jsx";
import { CiMap } from "react-icons/ci";
import { setLocation } from "../../redux/campers/slice.js";
import { BsMap } from "react-icons/bs";
import { selectCampers } from "../../redux/campers/selectors.js";
import { selectLocation } from "../../redux/filters/selectors.js";

const Location = () => {
  const location = useSelector(selectLocation);
  const campers = useSelector(selectCampers);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = location.trim() || "";

    if (trimmedQuery === "") {
      toast("Please enter the city to search for", {
        icon: <CiMap style={{ color: "red" }} />,
      });
      return;
    }

    dispatch(setLocation(trimmedQuery));
    const filteredCampers = campers.filter((camper) =>
      camper.location.toLowerCase().includes(trimmedQuery.toLowerCase())
    );

    if (filteredCampers.length === 0) {
      toast.error("No campers found in this location");
    }
  };

  const handleChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  return (
    <div className={css.container}>
      <Toaster position="top-right" />
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="searchInput" className={css.label}>
          Location
        </label>
        <BsMap className={css.locIcon} />
        <input
          className={css.input}
          type="text"
          onChange={handleChange}
          placeholder="Сity"
          name="searchInput"
          autoComplete="off"
          autoFocus
        />
      </form>
      <Filters />
    </div>
  );
};

export default Location;
