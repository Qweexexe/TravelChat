import style from "./MobieNav.module.css";
import PublicRoutes from "../Navigation/PublicRoutes";
import ScrollBar from "../Navigation/ScrollBar";
import SingInButton from "../SingInButton/SingInButton";

const MobileNav = ({ toggle }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.exit} onClick={toggle}>
        <div className={`${style.line_one} ${style.line}`}></div>
        <div className={`${style.line_two} ${style.line}`}></div>
      </div>
      <ScrollBar toggle={toggle} />
      <SingInButton sector={"mobile"} />
    </div>
  );
};

export default MobileNav;
