import style from "./Inputs.module.css";
import flex from "../../../components/Template/Template.module.css";
import { useToken } from "../../../hooks/useToken";
import axios from "axios";
import { BASE_URL } from "../../../env";
import {
  surnameField,
  usernameField,
  birthdayField,
  emailField,
  countryList,
  genders,
  first_nameField,
} from "../../../components/FormInputs/FormInputs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../../../components/redux/actions/actions";
import { useNavigate } from "react-router-dom";
// import { registerUser } from "../../../components/server/register";

const Inputs = () => {
  const data = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    [first_nameField.name]: "",
    [surnameField.name]: "",
    [emailField.name]: "",
    // [birthdayField.name]: "",
    // country: "Ukraine",
    // gender: "Male",
  });

  const usernameValid = new RegExp(usernameField.pattern).test(
    fields[first_nameField.name]
  );
  const surnameValid = new RegExp(surnameField.pattern).test(
    fields[surnameField.name]
  );
  const emailValid = new RegExp(emailField.pattern).test(
    fields[emailField.name]
  );

  const handleChangeName = (e) => {
    setFields({ ...fields, [first_nameField.name]: e.target.value });
  };

  const { updateToken } = useToken();

  const handleChangeSurname = (e) => {
    setFields({ ...fields, [surnameField.name]: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setFields({ ...fields, [emailField.name]: e.target.value });
  };

  const handleChangeCountry = (e) => {
    setFields({ ...fields, country: e.target.value });
  };

  const handleChangeBirth = (e) => {
    setFields({ ...fields, birthday: e.target.value });
  };

  const handleChangeGender = (e) => {
    setFields({ ...fields, gender: e.target.value });
  };

  const registerUser = async (data) => {
    const res = await axios.post(`${BASE_URL}/register`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    updateToken(localStorage.setItem("access", JSON.stringify(res.data)));
  };

  const handleLogClick = () => {
    if (
      usernameValid &&
      surnameValid &&
      emailValid
      //    &&
      //   fields.country &&
      //   fields.gender
    ) {
      const user = {
        ...data,
        ...fields,
      };
      console.log(user);
      registerUser(user);
      navigate("/welcome");
      console.log(localStorage.getItem("access"));
    }
  };
  return (
    <div className={`${style.inputs} ${flex.centered_column}`}>
      <form className={style.username_field}>
        <p className={style.input_header}>Name</p>
        <input
          placeholder={first_nameField.placeholder}
          type={first_nameField.type}
          value={fields[first_nameField.name]}
          className={`${style.input} ${
            !usernameValid && fields[first_nameField.name].length > 0
              ? style.error
              : ""
          }`}
          onChange={handleChangeName}
        />
        {fields[first_nameField.name].length > 0 && !usernameValid && (
          <p className={style.message}>{first_nameField.errorMessage}</p>
        )}
      </form>
      <form className={style.username_field}>
        <p className={style.input_header}>Surname</p>
        <input
          placeholder={surnameField.placeholder}
          type={surnameField.type}
          value={fields[surnameField.name]}
          className={`${style.input} ${
            !surnameValid && fields[surnameField.name].length > 0
              ? style.error
              : ""
          }`}
          onChange={handleChangeSurname}
        />
        {fields[surnameField.name].length > 0 && !surnameValid && (
          <p className={style.message}>{surnameField.errorMessage}</p>
        )}
      </form>
      <form className={style.password_field}>
        <p className={style.input_header}>Email</p>
        <input
          placeholder={emailField.placeholder}
          type={emailField.type}
          value={fields[emailField.name]}
          className={`${style.input} ${
            !emailValid && fields[emailField.name].length > 0 ? style.error : ""
          }`}
          onChange={handleChangeEmail}
        />
        {fields[emailField.name].length > 0 && !emailValid && (
          <p className={style.message}>{emailField.errorMessage}</p>
        )}
      </form>
      {/* <section className={`${style.country} ${flex.centered_column}`}>
        <select
          name="select"
          value={fields.country}
          id="select"
          onChange={handleChangeCountry}
          className={style.select}
        >
          {countryList.map((country) => (
            <option value={country.country}>
              {country.flag} {country.country}
            </option>
          ))}
        </select>
      </section>
      <section
        className={`${style.country} ${flex.centered_column} ${style.gender}`}
      >
        <select
          name="select"
          value={fields.gender}
          id="select"
          onChange={handleChangeGender}
          className={style.select}
        >
          {genders.map((gender) => (
            <option value={gender}>{gender}</option>
          ))}
        </select>
      </section>
      <section className={`${flex.centered_column} ${style.birth}`}>
        {/* <label for="birth">Your birthday</label> *
        <input type="date" name="" id="birth" onChange={handleChangeBirth} />
      </section> */}
      <div
        className={`${style.button} ${flex.centered_column}`}
        onClick={handleLogClick}
      >
        Finish
      </div>
    </div>
  );
};
export default Inputs;
