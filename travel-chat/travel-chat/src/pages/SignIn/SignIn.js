import style from './SignIn.module.css'
import flex from '../../components/Template/Template.module.css'
import {Link} from "react-router-dom";
import Inputs from "./Inputs/Inputs";
import DescriptionSignIn from "../../components/Description/DescriptionSignIn";
import Head from "../../components/Head/Head";

const SignIn = () => {
    return (
        <>
            <Head burger={false} search={false}/>
            <div className={`${style.wrapper} ${flex.centered_column}`}>
                <h1 className={style.welcome}>Welcome back!</h1>
                <Inputs/>
                <form className={style.remember}>
                    <div className={`${style.remember_check_wrapper} ${flex.centered_row}`}>
                        <input type="checkbox" value="Remember me" className={style.remember_check}/>
                        <p className={style.input_remember}>Remember me</p>
                    </div>
                    <Link to="/" className={`${style.forgot_password}`}>Forgot password?</Link>
                </form>
                <section className={`${style.continue_with} ${flex.centered_row}`}>
                    <div className={style.line}></div>
                    <p className={style.continue_with_text}>Or continue with</p>
                    <div className={style.line}></div>
                </section>
                <section className={`${style.continue_brands} ${flex.centered_row}`}>
                    <svg width="50" height="50" className={style.brand} viewBox="0 0 50 44" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.2188 14.3711L20.2684 17.4207C20.8781 16.7887 21.6082 16.2851 22.4156 15.9398C23.2229 15.5944 24.0913 15.4142 24.9695 15.4098C25.8476 15.4055 26.7178 15.577 27.5286 15.9143C28.3394 16.2516 29.0744 16.7479 29.6903 17.3739L32.7372 14.3228C31.7208 13.2973 30.5106 12.4842 29.1771 11.9308C27.8436 11.3773 26.4134 11.0946 24.9696 11.0989C23.5258 11.1033 22.0972 11.3947 20.7671 11.9562C19.437 12.5177 18.2317 13.3381 17.2216 14.3696L17.2188 14.3711Z"
                            fill="#F0432C"/>
                        <path
                            d="M17.2586 29.6763L20.3055 26.6294C19.696 26.0152 19.2137 25.2869 18.8861 24.486C18.5585 23.6852 18.3921 22.8276 18.3965 21.9624C18.4008 21.0972 18.5758 20.2413 18.9115 19.4438C19.2471 18.6463 19.7367 17.9228 20.3523 17.3148L17.3036 14.2656C16.2877 15.2741 15.4806 16.4729 14.9283 17.7935C14.3761 19.1142 14.0896 20.5307 14.0853 21.9622C14.0809 23.3936 14.3588 24.8119 14.903 26.1358C15.4471 27.4598 16.247 28.6635 17.2567 29.6781L17.2586 29.6763Z"
                            fill="#FFBF00"/>
                        <path d="M27.1553 24.1488V24.1938H27.2003L27.1553 24.1488Z" fill="#24AA49"/>
                        <path
                            d="M24.9766 32.8849C26.4099 32.8867 27.8295 32.6048 29.1533 32.0553C30.4771 31.5058 31.6791 30.6997 32.6898 29.6833L29.6406 26.6332C29.0294 27.248 28.3027 27.7359 27.5023 28.0688C26.7018 28.4018 25.8435 28.5732 24.9766 28.5732C24.1096 28.5732 23.2513 28.4018 22.4508 28.0688C21.6504 27.7359 20.9237 27.248 20.3125 26.6332L17.2656 29.6801C18.2758 30.6967 19.4773 31.5033 20.8007 32.0533C22.1241 32.6034 23.5434 32.886 24.9766 32.8849Z"
                            fill="#24AA49"/>
                        <path
                            d="M35.7043 19.8593L27.2002 19.871V24.1938H31.2239C30.8909 25.1288 30.3511 25.9766 29.6447 26.6739L32.6939 29.7236C33.9706 28.4554 34.9136 26.891 35.4389 25.1698C35.9641 23.4486 36.0553 21.6242 35.7043 19.8593Z"
                            fill="#3384FC"/>
                    </svg>
                    <svg width="50" height="50" className={style.brand} viewBox="0 0 50 44" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_362_603)">
                            <path
                                d="M25 34C31.6274 34 37 28.6274 37 22C37 15.3726 31.6274 10 25 10C18.3726 10 13 15.3726 13 22C13 28.6274 18.3726 34 25 34Z"
                                fill="#3B5998"/>
                            <path
                                d="M29.5 34V25H32.5L33.25 21.25H29.5V19.75C29.5 18.25 30.2515 17.5 31.75 17.5H33.25V13.75C32.5 13.75 31.57 13.75 30.25 13.75C27.4938 13.75 25.75 15.9107 25.75 19V21.25H22.75V25H25.75V34H29.5Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_362_603">
                                <rect width="24" height="24" fill="white" transform="translate(13 10)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </section>
                <DescriptionSignIn/>
            </div>
        </>

    )
}

export default SignIn