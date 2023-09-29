import style from './ProfileEnd.module.css'
import Head from "../../components/Head/Head";
import Inputs from "./Inputs/Inputs";

const ProfileEnd = () => {
    return (
        <>
            <Head burger={false} search={false}/>
            <section className={style.wrapper}>
                <Inputs/>
            </section>
        </>
    )
}

export default ProfileEnd