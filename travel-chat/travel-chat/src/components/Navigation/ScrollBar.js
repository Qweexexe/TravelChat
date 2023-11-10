import { useNavigate } from "react-router-dom";
import style from "./Routes.module.css";
import { Link } from "react-scroll";

const ScrollBar = ({ sector, toggle }) => {
  return (
    <div className={style.wrapper}>
      <Link
        className={`${style.link} ${style.text}`}
        style={sector === "footer" ? { color: "#FFF" } : { color: " #0b1644" }}
        to="middle-sector"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={toggle}
      >
        Advantages
      </Link>
      <Link
        className={`${style.link} ${style.text}`}
        style={sector === "footer" ? { color: "#FFF" } : { color: " #0b1644" }}
        to="about-sector"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={toggle}
      >
        About us
      </Link>
      <Link
        className={`${style.link} ${style.text}`}
        style={sector === "footer" ? { color: "#FFF" } : { color: " #0b1644" }}
        to="contacts-sector"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={toggle}
      >
        Contact us
      </Link>
    </div>
  );
};

export default ScrollBar;
