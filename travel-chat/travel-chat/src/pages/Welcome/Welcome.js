import React, { useState } from "react";
import style from "./welcome.module.css";
import Head from "../../components/Head/Head";
import { Tabs, TabPanel } from "react-tabs";
import { useNavigate } from "react-router-dom";
import ChatImg from "../../components/assets/ChatWelcome.svg";
import ShareImg from "../../components/assets/Share.svg";
import AdventureImg from "../../components/assets/Adventure.svg";

const Welcome = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const handleTab = () => {
    setTabIndex((prev) => (prev += 1));
    if (tabIndex > 1) {
      navigate("/");
    }
  };
  const handleSkip = () => {
    navigate("/");
  };
  return (
    <div className={style.wrapper}>
      <div className={style.welcome}>
        <Head burger={false} search={false} />
        <div className={style.welcome_tabs}>
          <div className={style.main_info}>
            {tabIndex === 0 ? (
              <div className={style.intro}>
                <h1 className={style.title}>Chat</h1>
                <div className={style.img}>
                  <img src={ChatImg} alt="chat" />
                </div>
                <div className={style.description}>
                  Choose a chat based on your interests and communicate with
                  like-minded people.
                </div>
                <div className={style.dots}>
                  <div className={style.dot_selected}>•</div>
                  <div className={style.dot}>•</div>
                  <div className={style.dot}>•</div>
                </div>
              </div>
            ) : null}
            {tabIndex === 1 ? (
              <div className={style.intro}>
                <h1 className={style.title}>Share</h1>
                <div className={style.img}>
                  <img src={ShareImg} alt="share" />
                </div>
                <div className={style.description}>
                  Share impressions, photos and videos of your travels, give
                  advice and have a good time! Create your own chats with topics
                  you like.
                </div>
                <div className={style.dots}>
                  <div className={style.dot}>•</div>
                  <div className={style.dot_selected}>•</div>
                  <div className={style.dot}>•</div>
                </div>
              </div>
            ) : null}
            {tabIndex === 2 ? (
              <div className={style.intro}>
                <h1 className={style.title}>Adventure</h1>
                <div className={style.img}>
                  <img src={AdventureImg} alt="adventure" />
                </div>
                <div className={style.description}>
                  Find people who travel, do extreme sports or enjoy passive
                  recreation. After all — traveling together is always more fun
                  and discovering horizons together!
                </div>
                <div className={style.dots}>
                  <div className={style.dot}>•</div>
                  <div className={style.dot}>•</div>
                  <div className={style.dot_selected}>•</div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={style.buttons}>
            <button className={style.next_btn} onClick={handleTab}>
              Next
            </button>
            <button className={style.skip_btn} onClick={handleSkip}>
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
