import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom'

import Head from './components/Head/Head';
import Main from './components/Main/Main';
import SignIn from './components/Auth/SignIn/SignIn';
import Guest from './components/Auth/Guest/Guest';
import SignUp from './components/Auth/SignUp/SignUp';
import SignUpForm from './components/Auth/SignUp/SignUpForm/SignUpForm'
import Profile from "./components/Auth/SignUp/Profile/Profile";

function App() {
  return (
    <div className="App">
        <Head />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/signup/account" element={<SignUpForm />} />
          <Route path="/signup/account/profile" element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;
