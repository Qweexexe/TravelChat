import style from './Guest.module.css'
import flex  from '../../Template/Template.module.css'
import image from '../../assets/Flying kite_Monochromatic 1.svg'
import DescriptionGuest from "../Description/DescriptionGuest";
import {usernameField} from "../../FormInputs/FormInputs";
import {useState} from "react";

const Guest = () => {
    const [input, setInput] = useState('')

     const usernameValid = new RegExp(usernameField.pattern).test(input)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return  (
        <div className={`${style.wrapper} ${flex.centered_column}`}>
            <img src={image} className={style.image}/>
            <p className={style.input_header}>Your Nickname</p>
            <input
                placeholder={usernameField.placeholder}
                type={usernameField.type}
                className={`${style.input} ${input.length > 0 && !usernameValid ? style.error : ''}`}
                value={input}
                onChange={handleInputChange}
            />
            {
                input.length > 0 && !usernameValid &&
                    (<p className={style.message}>{usernameField.errorMessage}</p>)
            }
            <button className={`${style.button} ${flex.centered_column}`}>Go to Chat</button>
            <DescriptionGuest/>
        </div>
    )
}

export default Guest