import style from './Profile.module.css'
import flex from '../../../Template/Template.module.css'
import photoLogo from '../../../assets/add_a_photo_FILL0_wght400_GRAD0_opsz48 1.svg'
import {useRef, useState} from "react";
import Webcam from "react-webcam";

const Profile = () => {

    const [cameraOn, setCameraOn] = useState(false)
    const [screenshot, setScreenshot] = useState('')
    const videoRef = useRef(null)
    const photo = {
        width: '300px',
        height: '300px',
        background: screenshot ? screenshot : '#ccc'
    }


    const handleCloseCamera = () => {
        setCameraOn(false)
    }

    const handleClearScreenShot = () => {
        setScreenshot('')
    }

    const handleOpenCamera = () => {
        setCameraOn(true)
    }


    const handleMakePohto = (e) => {
        if (videoRef.current) setScreenshot(videoRef.current.getScreenshot())
    }

    return (
        <div className={`${style.wrapper} ${flex.centered_column}`}>
            <div className={`${style.description} ${flex.centered_column}`}>
                <p className={style.welcome}>Complete your profile</p>
                <p className={style.step}>Step 1/2</p>
            </div>
            {cameraOn ? (
                <div className={style.camera_place}>
                    <Webcam
                        ref={videoRef}
                        audio={false}
                        screenshotQuality={1}
                        screenshotFormat={"image/jpeg"}
                        videoConstraints={{
                            facingMode: 'user'
                        }}
                        className={style.camera}
                    />
                    <div className={`${style.buttons} ${flex.centered_column}`}>
                        <div className={`${style.button} ${flex.centered_column}`}
                        onClick={() => {
                            handleMakePohto()
                            handleCloseCamera()
                        }}>Make photo</div>
                        <div className={`${style.button_skip} ${flex.centered_column}`} onClick={() => {
                            handleCloseCamera()
                            handleClearScreenShot()
                        }}>Cancel</div>
                    </div>
                </div>
            ) : (
                <div className={`${style.photo_place} ${flex.centered_column}`}>
                    <div className={`${style.photo} ${flex.centered_column}`} style={photo}>
                        <img src={screenshot} className={style.screenshot}/>
                        <img src={photoLogo} onClick={handleOpenCamera} className={style.photo_icon}/>
                    </div>
                    <div className={`${style.buttons} ${flex.centered_column}`}>
                        <div className={`${style.button} ${flex.centered_column}`}>Confirm</div>
                        <div className={`${style.button_skip} ${flex.centered_column}`}>Skip for now</div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Profile