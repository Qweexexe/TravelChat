import style from "./Profile.module.css";
import flex from "../../../components/Template/Template.module.css";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Head from "../../../components/Head/Head";
import ProfileChooseCamera from "../../../components/ProfileChooseCamera/ProfileChooseCamera";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPhoto } from "../../../components/redux/actions/actions";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState("300px");
  const [cameraOn, setCameraOn] = useState(false);
  const [screenshot, setScreenshot] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);
  const photo = {
    width: windowWidth > 1000 ? "300px" : "200px",
    height: windowWidth > 1000 ? "300px" : "200px",
    background: screenshot ? screenshot : "#ccc",
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    window.removeEventListener("resize", windowResize);
  }, []);

  const windowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleCloseCamera = () => {
    setCameraOn(false);
  };

  const handleClearScreenShot = () => {
    setScreenshot("");
  };

  const handleOpenCamera = () => {
    setCameraOn(true);
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setScreenshot(imageUrl);
    }
  };

  const handleMakePhoto = () => {
    if (videoRef.current) setScreenshot(videoRef.current.getScreenshot());
  };

  const checkValidate = () => {
    // dispatch(setPhoto(screenshot))
    navigate("/signup/account/profile/end");
  };

  return (
    <>
      <Head burger={false} search={false} />
      <div className={`${style.wrapper} ${flex.centered_column}`}>
        <div className={`${style.description} ${flex.centered_column}`}>
          <h1 className={style.welcome}>Complete your profile</h1>
          <p className={style.additional}>Add profile Information</p>
          <p className={style.step}>Step 1/2</p>
        </div>
        {cameraOn ? (
          <div className={`${style.camera_place} ${flex.centered_column}`}>
            <Webcam
              ref={videoRef}
              audio={false}
              screenshotQuality={1}
              screenshotFormat={"image/jpeg"}
              videoConstraints={{ facingMode: "user" }}
              className={style.camera}
            />
            <div className={`${style.buttons} ${flex.centered_column}`}>
              <button
                className={`${style.button} ${flex.centered_column}`}
                onClick={() => {
                  handleMakePhoto();
                  handleCloseCamera();
                }}
              >
                Make photo
              </button>
              <button
                className={`${style.button_skip} ${flex.centered_column}`}
                onClick={() => {
                  handleCloseCamera();
                  handleClearScreenShot();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : screenshot.length > 0 ? (
          <div className={`${style.photo_place} ${flex.centered_column}`}>
            <div
              className={`${style.photo} ${flex.centered_column}`}
              style={photo}
            >
              <img src={screenshot} className={style.screenshot} />
            </div>
            <div className={`${style.buttons} ${flex.centered_column}`}>
              <button
                className={`${style.button} ${flex.centered_column}`}
                onClick={() =>
                  photo.background === "#ccc"
                    ? handleMenuOpen()
                    : checkValidate()
                }
              >
                Submit
              </button>
              <button
                className={`${style.button_skip} ${flex.centered_column}`}
              >
                Skip for now
              </button>
            </div>
          </div>
        ) : (
          <div className={`${style.photo_place} ${flex.centered_column}`}>
            <div
              className={`${style.photo} ${flex.centered_column}`}
              style={photo}
            >
              <img src={screenshot} className={style.screenshot} />
            </div>
            <div className={`${style.buttons} ${flex.centered_column}`}>
              <button
                className={`${style.button} ${flex.centered_column}`}
                onClick={() => {
                  handleMenuOpen();
                }}
              >
                Submit
              </button>
              <button
                className={`${style.button_skip} ${flex.centered_column}`}
              >
                Skip for now
              </button>
            </div>
          </div>
        )}
      </div>
      {menuOpen && (
        <ProfileChooseCamera
          close={handleMenuOpen}
          openCamera={handleOpenCamera}
          closeCamera={handleCloseCamera}
          file={handleUpload}
        />
      )}
    </>
  );
};

export default Profile;
