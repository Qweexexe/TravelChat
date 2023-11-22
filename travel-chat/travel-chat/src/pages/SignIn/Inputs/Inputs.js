import style from "./Inputs.module.css";
import flex from "../../../components/Template/Template.module.css";
import axios from "axios";
import { BASE_URL } from "../../../env";
import {
  usernameField,
  passwordField,
  emailField,
} from "../../../components/FormInputs/FormInputs";
import { useState } from "react";
// import { LoginRequest } from "../../../components/server/login";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../../hooks/useToken";

const Inputs = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    [emailField.name]: "",
    [passwordField.name]: "",
  });

  const { updateToken } = useToken();

  const emailFieldValid = new RegExp(emailField.pattern).test(
    fields[emailField.name]
  );
  const passwordValid = new RegExp(passwordField.pattern).test(
    fields[passwordField.name]
  );

  const handleChangeMail = (e) => {
    setFields({ ...fields, [emailField.name]: e.target.value });
  };

  const handleChangePassword = (e) => {
    setFields({ ...fields, [passwordField.name]: e.target.value });
  };

  const LoginRequest = async (email, password) => {
    const data = { email, password };
    //   console.log(data);

    const res = await axios.post(`${BASE_URL}/login`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/chats");
    updateToken(localStorage.setItem("access", JSON.stringify(res.data)));
  };

  const handleLogClick = () => {
    if (emailFieldValid && passwordValid) {
      LoginRequest(fields[emailField.name], fields[passwordField.name]);
    }
  };

  return (
    <div className={`${style.inputs} ${flex.centered_column}`}>
      <form className={style.username_field}>
        <p className={style.input_header}>Email</p>
        <input
          placeholder={emailField.placeholder}
          type={emailField.type}
          value={fields[emailField.name]}
          className={`${style.input} ${
            !emailField && fields[emailField.name].length > 0 ? style.error : ""
          }`}
          onChange={handleChangeMail}
        />
        {fields[emailField.name].length > 0 && !emailFieldValid && (
          <p className={style.message}>{emailField.errorMessage}</p>
        )}
      </form>
      <form className={style.password_field}>
        <p className={style.input_header}>Password</p>
        <input
          placeholder={passwordField.placeholder}
          type={passwordField.type}
          value={fields[passwordField.name]}
          className={`${style.input} ${
            !passwordValid && fields[passwordField.name].length > 0
              ? style.error
              : ""
          }`}
          onChange={handleChangePassword}
        />
        {fields[passwordField.name].length > 0 && !passwordValid && (
          <p className={style.message}>{passwordField.errorMessage}</p>
        )}
      </form>
      <div
        className={`${style.button} ${flex.centered_column}`}
        onClick={handleLogClick}
      >
        Sign in
      </div>
    </div>
  );
};

export default Inputs;
