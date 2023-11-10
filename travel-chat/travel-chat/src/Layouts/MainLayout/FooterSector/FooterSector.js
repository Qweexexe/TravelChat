import style from "./FooterSector.module.css";
import logo from "../../../components/assets/logo-black 4.svg";
import { footerlinks } from "../../../components/Navigation/links";
import { Link } from "react-router-dom";
import ScrollBar from "../../../components/Navigation/ScrollBar";

const FooterSector = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_wrap}>
        <div className={style.footer_maininfo}>
          <div className={style.footer_logo}>
            <img src={logo} className={style.footer_logo} />
          </div>
          <div className={style.footer_link_wrapper}>
            <ScrollBar sector={"footer"} />
          </div>
        </div>
        <div className={style.footer_secondaryinfo}>
          <div className={style.footer_privacypolicy_wrap}>
            <div className={style.footer_year}>© 2023</div>
            <Link
              to="/privacy-policy"
              className={style.footer_privacypolicy_link}
            >
              Privacy Policy
            </Link>
            <Link to="/rules" className={style.footer_rules_link}>
              Rules of conduct on the site
            </Link>
          </div>
          <div className={style.footer_author}>Created by ChatTravelers</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSector;
