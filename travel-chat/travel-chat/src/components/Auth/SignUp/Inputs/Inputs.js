import style from "./Inputs.module.css"
import flex from "../../../Template/Template.module.css";
import {passwordField, usernameField} from "../../../FormInputs/FormInputs";
import {useState} from "react";
import {Link} from "react-router-dom";


const Inputs = () => {
    const [fields, setFields] = useState({
        [usernameField.name]: '',
        [passwordField.name]: '',
        repeat: ''
    })

    const usernameValid = new RegExp(usernameField.pattern).test(fields[usernameField.name])
    const passwordValid = new RegExp(passwordField.pattern).test(fields[passwordField.name])

    const handleChangeName = (e) => {
        setFields({...fields, [usernameField.name]: e.target.value})
    }

    const handleChangePassword = (e) => {
        setFields({...fields, [passwordField.name]: e.target.value})
    }

    const handleRepeatPassword = (e) => {
        setFields({...fields, repeat: e.target.value})
    }


    const handleClick = () => {

    }

    return (
        <div className={`${style.inputs} ${flex.centered_column}`}>
            <div className={style.username_field}>
                <p className={style.input_header}>User name</p>
                <input
                    placeholder={usernameField.placeholder}
                    type={usernameField.type}
                    value={fields[usernameField.name]}
                    className={`${style.input} ${!usernameValid && fields[usernameField.name].length > 0 ? style.error : ''}`}
                    onChange={handleChangeName}
                />
                {
                    fields[usernameField.name].length > 0 && !usernameValid &&
                    (<p className={style.message}>{usernameField.errorMessage}</p>)
                }
            </div>
            <div className={style.password_field}>
                <p className={style.input_header}>Password</p>
                <input
                    placeholder={passwordField.placeholder}
                    type={passwordField.type}
                    value={fields[passwordField.name]}
                    className={`${style.input} ${!passwordValid && fields[passwordField.name].length > 0 ? style.error : ''}`}
                    onChange={handleChangePassword}
                />
                {
                    fields[passwordField.name].length > 0 && !passwordValid &&
                    (<p className={style.message}>{passwordField.errorMessage}</p>)
                }
            </div>
            <div className={`${style.password_field} ${style.repeat}`}>
                <p className={style.input_header}>Repeat password</p>
                <input
                    placeholder={passwordField.placeholder}
                    type={passwordField.type}
                    value={fields.repeat}
                    className={`${style.input} ${!passwordValid && fields.repeat.length > 0 && fields.repeat !== fields[passwordField.name] ? style.error : ''}`}
                    onChange={handleRepeatPassword}
                />
                {
                    fields[passwordField.name].length > 0 && fields.repeat.length > 0 && fields.repeat !== fields[passwordField.name] &&
                    (<p className={style.message}>Password doesn't repeat</p>)
                }
            </div>
            <Link to="/signup/account/profile"
                className={`${style.button} ${flex.centered_column}`}
                onClick={handleClick}>
                Sign up
            </Link>
        </div>
    )
}


export default Inputs