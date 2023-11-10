import style from "./MainSector.module.css";
import buttons from "../../../pages/Main/Main.module.css";
import { Link } from "react-router-dom";
import background from "../../../components/assets/mapline.png";
import { useEffect, useState } from "react";
import SingInButton from "../../../components/SingInButton/SingInButton";

const MainSector = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: windowWidth > 1200 ? "center" : "-360px",
    height: "736px",
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={style.wrapper_map} style={backgroundImageStyle}>
      <div className={style.text_wrapper}>
        <h1 className={style.text}>Where traveller meets conversation</h1>
        <h1 className={style.text_lower}>
          Organize trips, communicate with other travelers and access
          recommendations to enhance your travel experience.
        </h1>
        <div className={buttons.buttons}>
          <SingInButton sector={"main"} />
          <Link
            to="/discover"
            className={`${buttons.discover} ${buttons.button}`}
          >
            Discover
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainSector;
