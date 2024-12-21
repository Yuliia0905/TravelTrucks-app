import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operations.js";
import Details from "../../components/Details/Details.jsx";

const CamperPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <section>
      <Details />
    </section>
  );
};

export default CamperPage;
