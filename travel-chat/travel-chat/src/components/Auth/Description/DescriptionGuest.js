import style from "./Description.module.css";
import {Link} from "react-router-dom";


const DescriptionSignUp = () => {
    return (
        <div className={`${style.description_wrapper} ${style.centered_column}`}>
                <div className={`${style.description_el} ${style.centered_row}`}>
                    <p className={style.description}>Don't have an account?</p>
                    <Link to="/signup" className={style.description_link}>Sign Up</Link>
                </div>
                <div className={`${style.description_el} ${style.centered_row}`}>
                    <p className={style.description}>Have an account?</p>
                    <Link to="/signin" className={style.description_link}>Log in</Link>
                </div>
            </div>
    )
}

export default DescriptionSignUp