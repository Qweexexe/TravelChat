import { Route, Routes } from "react-router-dom";
import ChatMainPage from "../pages/ChatMainPage/ChatMainPage";
import ChatTheme from "../pages/ChatTheme/ChatTheme";
import Guest from "../pages/Guest/Guest";
import MainPage from "../pages/Main/MainPage";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ProfileEnd from "../pages/ProfileEnd/ProfileEnd";
import Rules from "../pages/Rules/Rules";
import SignIn from "../pages/SignIn/SignIn";
import Profile from "../pages/SignUp/Profile/Profile";
import SignUp from "../pages/SignUp/SignUp";
import SignUpForm from "../pages/SignUp/SignUpForm/SignUpForm";
import Welcome from "../pages/Welcome/Welcome";

export const privateRoutesArr = [
  { path: "/", element: <MainPage /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signup/account", element: <SignUpForm /> },
  { path: "/signup/account/profile", element: <Profile /> },
  { path: "/signup/account/profile/end", element: <ProfileEnd /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/rules", element: <Rules /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/discover", element: <Guest /> },
  { path: "/choose-chat-theme", element: <ChatTheme /> },
  { path: "/chats", element: <ChatMainPage /> },
];
