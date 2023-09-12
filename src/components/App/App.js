import './App.css';
import React from "react";
import { Route, Routes} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'

function App() {

    return (
      <div className="app">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }/>
            <Route path="/movies" element={
              <>
                <Header />
                <Movies />
                <Footer />
              </>
            }/>
            <Route path="/saved-movies" element={
              <>
                <Header />
                <SavedMovies />
                <Footer />
              </>
            }/>
            <Route path="/profile" element={
              <>
                <Header />
                <Profile />
              </>
            }/>
            <Route path="/signup" element={
              <>
                <Header />                
                <Register />
              </>
            }/>
            <Route path="/signin" element={
              <>
                <Header />
                <Login />
              </>
            }/>
            
          </Routes>
      </div>
    );
}

export default App;
