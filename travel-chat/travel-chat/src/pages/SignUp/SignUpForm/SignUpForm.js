import style from './SignUpForm.module.css'
import flex from '../../../components/Template/Template.module.css'
import Inputs from "../Inputs/Inputs";
import DescriptionSignUp from "../../../components/Description/DescriptionSignUp";
import Head from "../../../components/Head/Head";

const SignUpForm = () => {
    return (
        <>
            <Head burger={false} search={false}/>
            <div className={`${style.wrapper} ${flex.centered_column}`}>
                <div className={`${style.description} ${flex.centered_column}`}>
                    <h3 className={style.welcome}>Start your journey with us</h3>
                    <p className={style.welcome_description}>Create user name and password</p>
                </div>
                <Inputs/>
                <DescriptionSignUp/>
            </div>
        </>
    )
}


export default SignUpForm