import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Guest from "../pages/Guest/Guest";
import SignUpForm from "../pages/SignUp/SignUpForm/SignUpForm";
import Profile from "../pages/SignUp/Profile/Profile";
import ProfileEnd from "../pages/ProfileEnd/ProfileEnd";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Rules from "../pages/Rules/Rules";
import Welcome from "../pages/Welcome/Welcome";
import ChatTheme from "../pages/ChatTheme/ChatTheme";
import ChatMainPage from "../pages/ChatMainPage/ChatMainPage";
import PrivateRoutes, { privateRoutesArr } from "./private-routes";
import PublicRoutes, { publicRoutesArr } from "./public-routes";
import { useToken } from "../hooks/useToken";

const Routers = () => {
  const [access, setAccess] = useState(
    JSON.parse(localStorage.getItem("access"))
  );

  const { token } = useToken();

  useEffect(() => {
    // const access = JSON.parse(localStorage.getItem("access"));
    setAccess(JSON.parse(localStorage.getItem("access")));
    console.log("the token has changed:", access);
  }, [token]);

  return (
    <>
      <BrowserRouter>
        {access && access.token ? (
          <Routes>
            {privateRoutesArr.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        ) : (
          <Routes>
            {publicRoutesArr.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default Routers;
