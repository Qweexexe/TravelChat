import style from './FooterSector.module.css';
import logo from "../../../components/assets/logo-black 4.svg";
import {footerlinks} from "../../../components/Navigation/links";
import {Link} from "react-router-dom";


const FooterSector = () => {
    return (
        <footer className={style.footer}>
            <img src={logo} className={style.footer_logo}/>
            <div className={style.footer_link_wrapper}>
                {
                    footerlinks.map((el, index) => (
                        <Link to={el.href} className={style.footer_links} key={index}>{el.title}</Link>
                    ))
                }
            </div>
        </footer>
    )
}


export default FooterSector