import style from './ProfileEnd.module.css'
import Head from "../../components/Head/Head";
import Inputs from "./Inputs/Inputs";
import flex from "../../components/Template/Template.module.css";

const ProfileEnd = () => {
    return (
        <>
            <Head burger={false} search={false}/>
            <div className={`${style.description} ${flex.centered_column}`}>
                <h1 className={style.welcome}>Complete your profile</h1>
                <p className={style.step}>Step 2/2</p>
                <p className={style.additional}>Add profile Information</p>
            </div>
            <section className={style.wrapper}>
                <Inputs/>
            </section>
        </>
    )
}

export default ProfileEnd