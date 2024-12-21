import { FaLongArrowAltDown } from "react-icons/fa";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      Load more <FaLongArrowAltDown />
    </button>
  );
};

export default LoadMoreBtn;
