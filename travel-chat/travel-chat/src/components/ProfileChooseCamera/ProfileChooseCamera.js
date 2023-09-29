import style from './ProfileChooseCamera.module.css'
import flex from '../Template/Template.module.css'

const ProfileChooseCamera = ({close, openCamera, closeCamera, file}) => {

    return (
        <div className={`${style.wrapper} ${flex.centered_column}`} onClick={close}>
            <nav className={`${style.nav} ${flex.centered_column}`}>
                <p className={style.welcome}>Add profile photo</p>
                <div className={`${style.buttons} ${flex.centered_column}`}>
                    <button className={`${style.photo} ${style.buttons_template}`} onClick={openCamera}>Take your
                        photo
                    </button>
                    <label htmlFor="upload" className={`${style.buttons_template}`}>Upload your image</label>
                    <input
                        type="file"
                        id="upload"
                        className={style.input}
                        accept=".jpg, .jpeg, .png, .gif"
                        onChange={file}
                    />
                </div>
            </nav>
        </div>
    )
}

export default ProfileChooseCamera