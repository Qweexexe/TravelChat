import style from './Main.module.css';
import background from '../assets/mapline.png';
import girl from '../assets/illustration1.svg'
import mobile from '../assets/illustration2.svg'
import {info, aboutInfo} from '../assets/info'
import {footerlinks} from '../Navigation/links'
import logo from '../assets/logo-black 4.svg'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Main = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: windowWidth > 1200 ? 'center' : '-390px',
        height: "736px",
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_map} style={backgroundImageStyle}>
                <div className={style.text_wrapper}>
                    <h1 className={style.text}>Where traveller meets conversation</h1>
                    <h1 className={style.text_lower}>Organize trips, communicate with other travelers and access
                        recommendations to enhance your travel experience.
                    </h1>
                    <div className={style.buttons}>
                        <Link to="/signin" className={`${style.sign_in} ${style.button}`}>Sign In</Link>
                        <Link to="/discover" className={`${style.discover} ${style.button}`}>Discover</Link>
                    </div>
                </div>
            </div>
            <div className={style.middle}>
                <img src={girl} className={style.middle_image}/>
                <div className={style.middle_text}>
                    <h2 className={style.middle_text_head}>
                        Connect with travel enthusiasts, share experiences instantly.
                    </h2>
                    {
                        info.map((el, index) => (
                            <div className={style.middle_text_content} key={index}>
                                <div className={style.middle_text_circle}>
                                    <p className={style.circle_circle}>{el.circle}</p>
                                </div>
                                <div className={style.middle_text_wrapper}>
                                    <h1 className={style.middle_text_head}>{el.title}</h1>
                                    <p className={style.middle_text_text}>{el.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <h1 className={style.travel_with}>Travel with pleasure</h1>
            <div className={style.about}>
                <h1 className={style.about_head}>About us</h1>
                <div className={style.about_content}>
                    <div className={style.about_content_info}>
                        {
                            aboutInfo.map((el, index) => (
                                <p className={style.about_info} key={index}>{el}</p>
                            ))
                        }
                        <div className={style.buttons}>
                            <Link to="/signin" className={`${style.sign_in} ${style.button}`}>Sign In</Link>
                            <Link to="/discover" className={`${style.discover} ${style.button}`}>Discover</Link>
                        </div>
                    </div>
                    <img src={mobile} alt="" className={style.about_img}/>
                </div>
            </div>
            <div className={style.contacts}>
                <p className={style.contacts_question}>
                    Still have
                    question? Just
                    contact us!
                </p>
                <div className={style.contacts_info}>
                    <p className={style.contacts_info}>If you have any questions about our product or have suggestions -
                        just write to us, we will definitely contact you!
                        We try to answer letters quickly. Therefore, send your request to us by mail.
                    </p>
                    <h3 className={style.email}>Email :</h3>
                    <a href="mailto:travel.with.pleasure.2023@gmail.com" target="_blank"
                       className={style.mail_to}>travel.with.pleasure.2023@gmail.com</a>
                </div>
            </div>
            <div className={style.footer}>
                <img src={logo} className={style.footer_logo}/>
                <div className={style.footer_link_wrapper}>
                    {
                        footerlinks.map((el, index) => (
                            <Link to={el.href} className={style.footer_links} key={index}>{el.title}</Link>
                        ))
                    }
                </div>
            </div>
            <div className={style.footer_description}>
                    <p className={style.year}>© 2023</p>
                    <p className={style.authors}>Created by Travelers</p>
            </div>
        </div>
    );
};

export default Main;
