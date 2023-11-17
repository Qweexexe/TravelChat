import style from "./Description.module.css";
import { Link } from "react-router-dom";

const DescriptionSignIn = () => {
  return (
    <div className={`${style.description_wrapper} ${style.centered_column}`}>
      <div className={`${style.description_el} ${style.centered_row}`}>
        <p className={style.description}>Don't have an account?</p>
        <Link to="/signup" className={style.description_link}>
          Sign Up
        </Link>
      </div>
      <div className={`${style.description_el} ${style.centered_row}`}>
        <p className={style.description}>Don't want to log in?</p>
        <Link to="/discover" className={style.description_link}>
          Enter as a guest
        </Link>
      </div>
    </div>
  );
};

export default DescriptionSignIn;
