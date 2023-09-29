import style from './Head.module.css'
import logo from '../assets/logo twp.svg'
import PublicRoutes from "../Navigation/PublicRoutes";
import {useEffect, useState} from "react";
import PrivateRoutes from "../Navigation/PrivateRoutes";
import MobileNav from "../MobileNav/MobileNav";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Burger from "../../common/Burger/Burger";


const Head = ({burger, search}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const toggleWindow = () => {
        setIsOpen(!isOpen)
    }

    const closeWindow = () => {
        setIsOpen(false)
    }

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
        <header className={style.wrapper}>
            <div className={style.content}>
                <img src={logo} className={style.logo} onClick={() => {
                    closeWindow()
                    navigate('/')
                }}/>
                <nav className={style.nav}>
                    {
                        windowWidth <= 1175 ? (
                            burger && <Burger toggle={toggleWindow}/>
                        ) : (
                            <PublicRoutes/>
                        )
                    }
                    {
                        isOpen && <MobileNav toggle={toggleWindow}/>
                    }
                </nav>
            </div>
        </header>
    )
}


export default Head