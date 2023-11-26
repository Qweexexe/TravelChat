import React, { useEffect, useState } from "react";
import style from "./current-chat.module.css";
import SettingsIcon from "../assets/SettingsIcon.png";
import SearchIcon from "../assets/search icon1.png";
import NotificationIcon from "../assets/toggle_off icon.png";
import AudioIcon from "../assets/mic icon.png";
import FileIcon from "../assets/attach_file icon.png";

import { useDispatch, useSelector } from "react-redux";

const CurrentChat = () => {
  const current = useSelector((state) => state.current.chat);
  const [isChatSettingsVisible, setIsChatSettingsVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsChatSettingsVisible(false);
  }, [current]);
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
            <div
              className={style.chat_header_settings}
              onClick={() => setIsChatSettingsVisible(!isChatSettingsVisible)}
            >
              <img src={SettingsIcon} />
              {isChatSettingsVisible ? (
                <div
                  className={style.chat_header_modal}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={style.modal_content}>
                    <div className={style.modal_about}>
                      <h2>About</h2>
                      <p>{current.description}</p>
                    </div>
                    <div className={style.modal_settings}>
                      <div className={style.modal_settings_item}>
                        Change chat name
                      </div>
                      <div className={style.modal_settings_item}>
                        <h3>Notification</h3>
                        <div className={style.modal_notification_img}>
                          <img src={NotificationIcon} />
                        </div>
                      </div>
                      <div className={style.modal_settings_item}>
                        <h3>Theme of chat</h3>
                        <span className={style.modal_settings_theme}>
                          default
                        </span>
                      </div>
                      <div className={style.modal_settings_item}>
                        Chat members
                      </div>
                    </div>
                    <div className={style.modal_footer}>
                      <div className={style.modal_footer_item}>
                        Complain to the chat
                      </div>
                      <div className={style.modal_footer_item}>
                        Delete this chat
                      </div>
                      <div className={style.modal_footer_item}>Leave chat</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isChatSettingsVisible
            ? `${style.chat_messages} ${style.blured}`
            : `${style.chat_messages}`
        }
      >
        {" "}
      </div>
      {/* <div
        className={
          isChatSettingsVisible
            ? `${style.chat_input_wrap} ${style.blured}`
            : `${style.chat_input_wrap}`
        }
      >
        <input
          type="text"
          className={style.chat_input}
          placeholder="Enter new message"
        />
      </div> */}
      <div className={style.chat_footer}>
        <form className={style.chat_form}>
          <input type="text" placeholder="Enter new message" />
          <div className={style.form_files}>
            <div className={style.form_file}>
              <img src={FileIcon} />
            </div>
            <div className={style.form_audio}>
              <img src={AudioIcon} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrentChat;
