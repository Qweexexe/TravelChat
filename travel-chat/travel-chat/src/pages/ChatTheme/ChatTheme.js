import React, { useEffect, useState } from "react";
import style from "./chat-theme.module.css";
import Head from "../../components/Head/Head";
import { useDispatch, useSelector } from "react-redux";
import { setThemesInfo } from "../../components/redux/actions/actions";
import { subtopicList } from "../../components/FormInputs/FormInputs";
import CloseBtn from "../../components/assets/CloseModalImg.png";

const ChatTheme = () => {
  const [isChecked, setIsChecked] = useState({
    ukraine: false,
    abroad: false,
    extreme: false,
    hotels: false,
    other: false,
  });

  const [isCheckedSubtopic, setIsCheckedSubtopic] = useState(true);

  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themes);
  const [isVisible, setIsVisible] = useState(false);

  const handleUkraine = (event) => {
    setIsChecked((prev) => ({ ...prev, ukraine: event.target.checked }));
  };
  const handleAbroad = (event) => {
    setIsChecked((prev) => ({ ...prev, abroad: event.target.checked }));
  };
  const handleExtreme = (event) => {
    setIsChecked((prev) => ({ ...prev, extreme: event.target.value }));
  };
  const handleHotels = (event) => {
    setIsChecked((prev) => ({ ...prev, hotels: event.target.checked }));
  };
  const handleOther = (event) => {
    setIsChecked((prev) => ({ ...prev, other: event.target.checked }));
  };

  const handleClick = () => {
    dispatch(setThemesInfo(isChecked));
  };

  const removeSubTopic = () => {
    const cancel = {
      extreme: false,
    };
    setIsCheckedSubtopic(false);

    dispatch(setThemesInfo(cancel));
  };

  const handleClose = (e) => {
    e.stopPropagation();

    setIsVisible(false);
  };

  useEffect(() => {
    console.log(themes);
  }, [themes]);
  return (
    <div className={style.chat_theme}>
      <Head />
      <div className={style.chat_theme_container}>
        <div className={style.wrap_info}>
          <h1 className={style.chat_theme_title}>
            Choose a group chat by your interest
          </h1>
          <div className={style.description}>
            Choose a topic that interests you and we will automatically add you
            to the chat, where like-minded people are already waiting for you.
            You must choose at least one topic to continue.
          </div>
          <div className={style.chat_themes}>
            <div
              className={
                isChecked.ukraine
                  ? `${style.theme} ${style.checked}`
                  : `${style.theme}`
              }
            >
              <label>
                <input
                  type="checkbox"
                  value={isChecked.hotels}
                  onChange={handleUkraine}
                />
                <span>Travel in Ukraine</span>
              </label>
            </div>
            <div
              className={
                isChecked.abroad
                  ? `${style.theme} ${style.checked}`
                  : `${style.theme}`
              }
            >
              <label>
                <input
                  type="checkbox"
                  value={isChecked.abroad}
                  onChange={handleAbroad}
                />
                <span>Travel abroad</span>
              </label>
            </div>
            <div
              className={
                isChecked.extreme
                  ? `${style.theme} ${style.checked}`
                  : `${style.theme}`
              }
            >
              <div
                className={style.subtopic}
                onClick={() => setIsVisible(true)}
              >
                <div>Extreme tourism</div>

                {isVisible ? (
                  <div className={style.modal}>
                    <div className={style.modal_header}>
                      <h2 className={style.modal_title}>
                        Extreme tourism subtopics
                      </h2>
                      <div
                        className={style.modal_closebtn}
                        onClick={handleClose}
                      >
                        <img src={CloseBtn} alt="close" />
                      </div>
                    </div>
                    {subtopicList.map((topic) => (
                      <div
                        key={topic.id}
                        // onClick={() => setIsCheckedSubtopic(true)}
                        className={style.input_wrap}
                      >
                        <input
                          onChange={handleExtreme}
                          type="radio"
                          id={`radio_${topic.id}`}
                          value={topic.subtopic}
                          name="extreme"
                        />
                        <label
                          htmlFor={`radio_${topic.id}`}
                          className={style.modal_label}
                          // onClick={() => setIsCheckedSubtopic(true)}
                        >
                          {topic.subtopic}
                        </label>
                      </div>
                    ))}
                    {/* <div
                      className={style.topic_cancel}
                      onClick={removeSubTopic}
                    >
                      Cancel
                    </div> */}
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className={
                isChecked.hotels
                  ? `${style.theme} ${style.checked}`
                  : `${style.theme}`
              }
            >
              <label>
                <input
                  type="checkbox"
                  value={isChecked.hotels}
                  onChange={handleHotels}
                />
                <span>Hotels and recreation complexes</span>
              </label>
            </div>
            <div
              className={
                isChecked.other
                  ? `${style.theme} ${style.checked}`
                  : `${style.theme}`
              }
            >
              <label>
                <input
                  type="checkbox"
                  value={isChecked.other}
                  onChange={handleOther}
                />
                <span>Other</span>
              </label>
            </div>
          </div>
          <button
            className={
              isChecked.ukraine ||
              isChecked.abroad ||
              isChecked.extreme ||
              isChecked.hotels ||
              isChecked.other
                ? `${style.gotochat_btn}`
                : `${style.disable}`
            }
            onClick={handleClick}
          >
            Go to chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatTheme;
