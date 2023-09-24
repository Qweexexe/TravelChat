import style from './Head.module.css'
import logo from '../assets/logo twp.svg'
import lang from '../assets/Vector.png'
import PublicRoutes from "../Navigation/PublicRoutes";
import {useEffect, useState} from "react";
import PrivateRoutes from "../Navigation/PrivateRoutes";
import MobileNav from "../MobileNav/MobileNav";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {closeWindow, toggleWindow} from "../redux/actions/actions";


const Head = () => {
    let data = '1'
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const selector = useSelector(state => state.mobileNav.isOpened)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <img src={logo} className={style.logo} onClick={() => {
                    dispatch(closeWindow())
                    navigate('/')
                }}/>
                <div className={style.nav}>
                    {
                        windowWidth <= 1175 ? (
                            !selector && <div className={style.burger} onClick={() => dispatch(toggleWindow())}>
                                <div className={style.burger_line}></div>
                                <div className={style.burger_line}></div>
                                <div className={style.burger_line}></div>
                            </div>
                        ) : (
                            data === '0' ? <PublicRoutes/> : <PrivateRoutes/>
                        )
                    }
                    {
                        selector && <MobileNav/>
                    }
                </div>
            </div>
        </div>
    )
}


export default Head