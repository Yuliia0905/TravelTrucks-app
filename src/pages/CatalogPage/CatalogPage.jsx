import { useDispatch } from "react-redux";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Location from "../../components/Location/Location.jsx";
import css from "./CatalogPage.module.css";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
// import { selectAllCampers } from "../../redux/campers/selectors.js";
// import { selectHasMore } from "../../redux/campers/selectors.js";

const CatalogPage = () => {
  const dispatch = useDispatch();

  // const [page, setPage] = useState(1);
  const [limitPerPage, setlimitPerPage] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers({ limit: limitPerPage }));
  }, [dispatch, limitPerPage]);

  const handleNextPage = () => {
    setlimitPerPage((prevCount) => prevCount + 4);
  };

  return (
    <section className={css.section}>
      <Location />
      <CampersList />
      <div className={css.wrapper}>
        <LoadMoreBtn onClick={handleNextPage} />
      </div>
    </section>
  );
};

export default CatalogPage;
