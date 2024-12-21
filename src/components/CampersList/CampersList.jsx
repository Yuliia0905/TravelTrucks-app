import { useSelector } from "react-redux";
import css from "./CampersList.module.css";
import {
  selectAllCampers,
  selectCampers,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors.js";
import Loader from "../Loader/Loader.jsx";

import CamperListItem from "../CamperListItem/CamperListItem.jsx";
import { selectLocation } from "../../redux/filters/selectors.js";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  // console.log("Current campers state in component:", campers);
  const allCampers = useSelector(selectAllCampers);
  // console.log("Current Allcampers state in component:", allCampers);

  const location = useSelector(selectLocation);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const filteredCampers = location
    ? allCampers.filter((camper) =>
        camper.location.toLowerCase().includes(location.toLowerCase())
      )
    : campers;

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      <ul className={css.list}>
        {filteredCampers.map((camper) => (
          <li className={css.item} key={camper.id}>
            <CamperListItem {...camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CampersList;
