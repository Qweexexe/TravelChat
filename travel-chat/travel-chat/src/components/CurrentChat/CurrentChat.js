import React from "react";
import style from "./current-chat.module.css";
import SettingsIcon from "../assets/SettingsIcon.png";
import SearchIcon from "../assets/search icon1.png";
import { useSelector } from "react-redux";

const CurrentChat = () => {
  const current = useSelector((state) => state.current.chat);
  return (
    <div className={style.chat}>
      <div className={style.chat_header}>
        <div className={style.chat_header_wrap}>
          <div className={style.chat_header_info}>
            <div className={style.chat_header_avatar}>
              <img src={current.photo} />
            </div>
            <div className={style.chat_header_titles}>
              <div className={style.chat_header_name}>{current.name}</div>
              <div className={style.chat_header_members}>3 members</div>
            </div>
          </div>
          <div className={style.chat_header_settings_wrap}>
            <div className={style.chat_header_search}>
              <img src={SearchIcon} />
            </div>
            <div className={style.chat_header_settig}>
              <img src={SettingsIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.chat_messages}> </div>
      <div className={style.chat_input_wrap}>
        <input
          type="text"
          className={style.chat_input}
          placeholder="Enter new message"
        />
      </div>
    </div>
  );
};

export default CurrentChat;
