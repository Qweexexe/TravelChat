import React from "react";
import style from './Main.module.css'
import MainSector from "../../Layouts/MainLayout/MainSector/MainSector";
import MiddleSector from "../../Layouts/MainLayout/MiddleSector/MiddleSector";
import AboutSector from "../../Layouts/MainLayout/AboutSector/AboutSector";
import ContactsSector from "../../Layouts/MainLayout/ContactsSector/ContactsSector";
import FooterSector from "../../Layouts/MainLayout/FooterSector/FooterSector";
import Head from "../../components/Head/Head";


const MainPage = () => {
    return (
        <>
            <Head burger={true} search={false}/>
            <div className={style.wrapper}>
                <MainSector/>
                <MiddleSector/>
                <p className={style.travel_with}>Travel with pleasure</p>
                <AboutSector/>
                <ContactsSector/>
                <FooterSector/>
            </div>
        </>
    )
}

export default MainPage