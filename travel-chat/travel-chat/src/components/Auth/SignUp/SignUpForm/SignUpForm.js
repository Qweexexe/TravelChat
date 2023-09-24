import style from './SignUpForm.module.css'
import flex from '../../../Template/Template.module.css'
import Inputs from "../Inputs/Inputs";
import DescriptionSignUp from "../../Description/DescriptionSignUp";

const SignUpForm = () => {
    return (
            <div className={`${style.wrapper} ${flex.centered_column}`}>
                <div className={`${style.description} ${flex.centered_column}`}>
                    <h3 className={style.welcome}>Start your journey with us</h3>
                    <p className={style.welcome_description}>Create user name and password</p>
                </div>
                <Inputs/>
                <DescriptionSignUp/>
            </div>
    )
}


export default SignUpForm