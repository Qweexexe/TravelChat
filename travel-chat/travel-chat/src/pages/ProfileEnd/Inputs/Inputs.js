import style from './Inputs.module.css'
import flex from "../../../components/Template/Template.module.css";
import {
    surnameField,
    usernameField,
    birthdayField,
    emailField,
    countryList
} from "../../../components/FormInputs/FormInputs";
import {useState} from "react";


const Inputs = () => {
    const [fields, setFields] = useState({
        [usernameField.name]: '',
        [surnameField.name]: '',
        [emailField.name]: '',
        [birthdayField.name]: '',
        country: ''
    })


    const usernameValid = new RegExp(usernameField.pattern).test(fields[usernameField.name])
    const surnameValid = new RegExp(surnameField.pattern).test(fields[surnameField.name])
    const emailValid = new RegExp(emailField.pattern).test(fields[emailField.name])

    const handleChangeName = (e) => {
        setFields({...fields, [usernameField.name]: e.target.value})
    }

    const handleChangeSurname = (e) => {
        setFields({...fields, [surnameField.name]: e.target.value})
    }

    const handleChangeEmail = (e) => {
        setFields({...fields, [emailField.name]: e.target.value})
    }

    const handleChangeCountry = (e) => {
        setFields({...fields, country: e.target.value})
    }

    const handleLogClick = () => {
        if (usernameValid && surnameValid && emailValid) {
            alert('reg')
        }
    }
    return (
        <div className={`${style.inputs} ${flex.centered_column}`}>
            <form className={style.username_field}>
                <p className={style.input_header}>Name</p>
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
            <form className={style.username_field}>
                <p className={style.input_header}>Surname</p>
                <input
                    placeholder={surnameField.placeholder}
                    type={surnameField.type}
                    value={fields[surnameField.name]}
                    className={`${style.input} ${!surnameValid && fields[surnameField.name].length > 0 ? style.error : ''}`}
                    onChange={handleChangeSurname}
                />
                {
                    fields[surnameField.name].length > 0 && !surnameValid &&
                    (<p className={style.message}>{surnameField.errorMessage}</p>)
                }
            </form>
            <form className={style.password_field}>
                <p className={style.input_header}>Email</p>
                <input
                    placeholder={emailField.placeholder}
                    type={emailField.type}
                    value={fields[emailField.name]}
                    className={`${style.input} ${!emailValid && fields[emailField.name].length > 0 ? style.error : ''}`}
                    onChange={handleChangeEmail}
                />
                {
                    fields[emailField.name].length > 0 && !emailValid &&
                    (<p className={style.message}>{emailField.errorMessage}</p>)
                }
            </form>
            <div
                className={`${style.button} ${flex.centered_column}`}
                onClick={handleLogClick}>Sign in
            </div>
        </div>
    )
}

export default Inputs




