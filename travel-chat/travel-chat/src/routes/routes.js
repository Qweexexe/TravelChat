import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Guest from "../pages/Guest/Guest";
import SignUpForm from "../pages/SignUp/SignUpForm/SignUpForm";
import Profile from "../pages/SignUp/Profile/Profile";
import React from "react";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/guest" element={<Guest/>}/>
                    <Route path="/signup/account" element={<SignUpForm/>}/>
                    <Route path="/signup/account/profile/" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers