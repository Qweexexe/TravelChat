import style from './SignUp.module.css'
import flex from '../../components/Template/Template.module.css'
import worldwide from '../../components/assets/World wide web_Monochromatic 1.svg'
import google from "../../components/assets/Frame 40.svg";
import facebook from "../../components/assets/Frame 40 (1).svg";
import DescriptionSignUp from "../../components/Description/DescriptionSignUp";
import Head from "../../components/Head/Head";

const SignUp = () => {
    return (
        <>
            <Head burger={false} search={false}/>
            <div className={`${style.wrapper} ${flex.centered_column}`}>
                <p className={style.welcome}>Start your journey with us</p>
                <img src={worldwide} className={style.image}/>
                <p className={style.register}>Register using by :</p>
                <div className={`${style.continue_brands} ${flex.centered_row}`}>
                    <img src={google} className={style.brand}/>
                    <img src={facebook} className={style.brand}/>
                </div>
                <div className={style.privacy_policy}>
                    By clicking Continue with Google or Continue with Facebook, you agree to our <a href="#"
                                                                                                    className={style.privacy_link}>Privacy
                    Policy</a>.
                </div>
                <DescriptionSignUp/>
            </div>
        </>
    )
}

export default SignUp