import style from './SignIn.module.css'
import flex from '../../Template/Template.module.css'
import {Link} from "react-router-dom";
import google from '../../assets/Frame 40.svg'
import facebook from '../../assets/Frame 40 (1).svg'
import DescriptionSignUp from "../Description/DescriptionSignUp";
import Inputs from "./Inputs/Inputs";

const SignIn = () => {
    return (
        <div className={`${style.wrapper} ${flex.centered_column}`}>
            <p className={style.welcome}>Welcome back!</p>
            <Inputs/>
            <div className={style.remember}>
                <div className={`${style.remember_check_wrapper} ${flex.centered_row}`}>
                    <input type="checkbox" value="Remember me" className={style.remember_check}/>
                    <p className={style.input_remember}>Remember me</p>
                </div>
                <Link to="/" className={`${style.forgot_password}`}>Forgot password?</Link>
            </div>
            <div className={`${style.continue_with} ${flex.centered_row}`}>
                <div className={style.line}></div>
                <p className={style.continue_with_text}>Or continue with</p>
                <div className={style.line}></div>
            </div>
            <div className={`${style.continue_brands} ${flex.centered_row}`}>
                <img src={google} className={style.brand}/>
                <img src={facebook} className={style.brand}/>
            </div>
            <DescriptionSignUp/>
        </div>
    )
}

export default SignIn