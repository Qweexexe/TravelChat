import style from './AboutSector.module.css';
import buttons from '../../../pages/Main/Main.module.css'
import {aboutInfo} from "../../../components/assets/info";
import {Link} from "react-router-dom";
import mobile from "../../../components/assets/illustration2.svg";


const AboutSector = () => {
    return (
        <section className={style.about}>
            <h1 className={style.about_head}>About us</h1>
            <div className={style.about_content}>
                <div className={style.about_content_info}>
                    {
                        aboutInfo.map((el, index) => (
                            <p className={style.about_info} key={index}>{el}</p>
                        ))
                    }
                    <div className={buttons.buttons}>
                        <Link to="/signin" className={`${buttons.sign_in} ${buttons.button}`}>Sign In</Link>
                        <Link to="/discover" className={`${buttons.discover} ${buttons.button}`}>Discover</Link>
                    </div>
                </div>
                <img src={mobile} alt="" className={style.about_img}/>
            </div>
        </section>
    )
}

export default AboutSector