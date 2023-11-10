import style from "./MiddleSector.module.css";
import girl from "../../../components/assets/illustration1.svg";
import { info } from "../../../components/assets/info";

const MiddleSector = () => {
  return (
    <section className={style.middle} id="middle-sector">
      <img src={girl} className={style.middle_image} />
      <div className={style.middle_text}>
        <h2 className={style.middle_text_head}>
          Connect with travel enthusiasts, share experiences instantly.
        </h2>
        {info.map((el, index) => (
          <div className={style.middle_text_content} key={index}>
            <div className={style.middle_text_circle}>
              <p className={style.circle_circle}>{el.circle}</p>
            </div>
            <div className={style.middle_text_wrapper}>
              <h1 className={style.middle_text_head}>{el.title}</h1>
              <p className={style.middle_text_text}>{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiddleSector;
