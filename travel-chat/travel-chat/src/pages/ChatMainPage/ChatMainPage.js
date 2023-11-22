import React, { useEffect, useState } from "react";
import style from "./chat-main-page.module.css";
import Head from "../../components/Head/Head";
import axios from "axios";
import AvatarExample from "../../components/assets/AvatarExample.png";
import UkraineChat from "../../components/assets/UkraineChat.png";
import AbroadChat from "../../components/assets/AbroadChat.png";
import ExtremeChat from "../../components/assets/ExtremeChat.png";
import SettingsIcon from "../../components/assets/SettingsIcon.png";
import HelpIcon from "../../components/assets/help icon.png";
import Chatbg from "../../components/assets/Chatbg.png";
import NotificationsIcon from "../../components/assets/notifications icon.png";
import LanguageIcon from "../../components/assets/language icon.png";
import LocationIcon from "../../components/assets/person_pin icon.png";
import SettingsChatIcon from "../../components/assets/settings icon.png";
import BlockedIcon from "../../components/assets/Blocked.png";
import SignOutImg from "../../components/assets/move_item icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChat } from "../../components/redux/actions/actions";
import CurrentChat from "../../components/CurrentChat/CurrentChat";
import { BASE_URL } from "../../env";

const ChatMainPage = () => {
  const dispatch = useDispatch();
  const curerentChat = useSelector((state) => state.current);
  const navigate = useNavigate();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [userProfile, setUserProfile] = useState({
    id: "",
    email: "",
    nickname: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });
  const chats = [
    {
      name: "Travel in Ukraine",
      photo: UkraineChat,
    },
    {
      name: "Travel abroad",
      photo: AbroadChat,
    },
    {
      name: "Extreme tourism",
      photo: ExtremeChat,
    },
  ];

  const handleClickChat = (chat) => {
    dispatch(setCurrentChat(chat));
  };

  const getUserProfile = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("access"));
      // console.log("from getUser:", token);

      const req = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      });

      setUserProfile(req.data);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  const handleClickModal = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  const signOut = () => {
    localStorage.removeItem("access");
    navigate("/");
  };

  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);

  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    console.log(curerentChat);
  }, [curerentChat]);

  return (
    <div className={style.chat_main_page}>
      <Head />
      <div className={style.chat_main_wrap}>
        <div className={style.chat_main_content}>
          <aside className={style.chat_main_aside}>
            <div className={style.aside_user_info}>
              <div className={style.aside_user_maininfo}>
                <div className={style.aside_user_avatar}>
                  <img src={userProfile.avatar} />
                </div>
                <div className={style.aside_username}>
                  {userProfile.nickname}
                </div>
              </div>
              <div className={style.aside_settings} onClick={handleClickModal}>
                <img src={SettingsIcon} />
                {isSettingsVisible ? (
                  <div
                    className={style.aside_settings_modal}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={style.settings_modal_content}>
                      <div className={style.settings_modal_tabs}>
                        <div className={style.settings_modal_tab}>
                          <div className={style.tab_main}>
                            <div className={style.tab_img}>
                              <img src={NotificationsIcon} />
                            </div>
                            <div className={style.tab_title}>Notification</div>
                          </div>
                          <div className={style.tab_arrow}>{">"}</div>
                        </div>
                        <div className={style.settings_modal_tab}>
                          <div className={style.tab_main}>
                            <div className={style.tab_img}>
                              <img src={LanguageIcon} />
                            </div>
                            <div className={style.tab_title}>Language</div>
                          </div>
                          <div className={style.tab_arrow}>{">"}</div>
                        </div>
                        <div className={style.settings_modal_tab}>
                          <div className={style.tab_main}>
                            <div className={style.tab_img}>
                              <img src={LocationIcon} />
                            </div>
                            <div className={style.tab_title}>
                              Location and time zone
                            </div>
                          </div>
                          <div className={style.tab_arrow}>{">"}</div>
                        </div>
                        <div className={style.settings_modal_tab}>
                          <div className={style.tab_main}>
                            <div className={style.tab_img}>
                              <img src={SettingsChatIcon} />
                            </div>
                            <div className={style.tab_title}>Chat settings</div>
                          </div>
                          <div className={style.tab_arrow}>{">"}</div>
                        </div>
                        <div className={style.settings_modal_tab}>
                          <div className={style.tab_main}>
                            <div className={style.tab_img}>
                              <img src={BlockedIcon} />
                            </div>
                            <div className={style.tab_title}>
                              Blocked users and chats
                            </div>
                          </div>
                          <div className={style.tab_arrow}>{">"}</div>
                        </div>
                      </div>
                      <button
                        className={style.settings_modal_signout}
                        onClick={signOut}
                      >
                        <div className={style.signout_img}>
                          <img src={SignOutImg} />
                        </div>
                        <span> Sign Out</span>
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className={style.aside_chats}>
              <div className={style.aside_chats_search}>
                <select className={style.aside_chats_select}>
                  <option className={style.aside_chats_option}>
                    All Chats
                  </option>
                  <option className={style.aside_chats_option}>
                    Private messages
                  </option>
                </select>
                <div className={style.aside_inpit_wrap}>
                  <input
                    type="text"
                    placeholder="Search"
                    className={style.aside_chats_input}
                  />
                </div>
              </div>
              <div className={style.aside_chats_wrap}>
                {chats.map((chat) => (
                  <div
                    key={chat.name}
                    className={
                      curerentChat.chat.name === chat.name
                        ? `${style.aside_chat} ${style.aside_chat_active}`
                        : `${style.aside_chat}`
                    }
                    onClick={() => handleClickChat(chat)}
                  >
                    <div className={style.aside_chat_icon}>
                      <img src={chat.photo} />
                    </div>
                    <div className={style.aside_chat_name}>{chat.name}</div>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className={style.aside_footer}>
              <div className={style.aside_create_chat}>
                <button className={style.aside_create_chat_btn}>
                  + Create Chat
                </button>
              </div>
              <div className={style.aside_help}>
                <div className={style.aside_help_icon}>
                  <img src={HelpIcon} />
                </div>
                <div className={style.aside_help_title}>Help Center</div>
              </div>
            </div>
          </aside>
          <div
            className={
              curerentChat.chat.name
                ? `${style.chat_wrap}`
                : `${style.chat_space}`
            }
          >
            {curerentChat.chat.name ? (
              <CurrentChat />
            ) : (
              <div className={style.chat_welcome}>
                <div className={style.chat_welcome_img}>
                  <img src={Chatbg} alt="img" />
                </div>
                <div className={style.chat_welcome_description}>
                  Start a conversation, click on a chat from the list <br /> on
                  the left.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMainPage;
