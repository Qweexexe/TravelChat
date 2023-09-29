import style from './Inputs.module.css'
import flex from '../../../components/Template/Template.module.css'
import {usernameField, passwordField} from '../../../components/FormInputs/FormInputs'
import {useState} from "react";
import {LoginRequest} from "../../../components/server/login";


const Inputs = () => {
    const [fields, setFields] = useState({
        [usernameField.name]: '',
        [passwordField.name]: ''
    })


    const usernameValid = new RegExp(usernameField.pattern).test(fields[usernameField.name])
    const passwordValid = new RegExp(passwordField.pattern).test(fields[passwordField.name])

    const handleChangeName = (e) => {
        setFields({...fields, [usernameField.name]: e.target.value})
    }

    const handleChangePassword = (e) => {
        setFields({...fields, [passwordField.name]: e.target.value})
    }

    const handleLogClick = () => {
        if (usernameValid && passwordValid) {
            LoginRequest(fields[usernameField.name], fields[passwordField.name])
        }
    }

    return (
        <div className={`${style.inputs} ${flex.centered_column}`}>
            <form className={style.username_field}>
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
            </form>
            <form className={style.password_field}>
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
            </form>
            <div
                className={`${style.button} ${flex.centered_column}`}
                onClick={handleLogClick}>Sign in</div>
        </div>
    )
}


export default Inputs