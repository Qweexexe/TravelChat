import React from "react";
import { useNavigate } from "react-router-dom";
import "./sign-in-btn.scss";

const SingInButton = ({ sector }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`${sector === "header" ? "header_btn" : ""} ${
        sector === "main" ? "main_btn" : ""
      } ${sector === "mobile" ? "mobile_btn" : ""}`}
      onClick={() => navigate("/signin")}
    >
      Sign in
    </button>
  );
};

export default SingInButton;
