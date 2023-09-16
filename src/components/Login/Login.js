import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import Logo from "../Logo/Logo"

function Login({setIsLoggedIn}) {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function logIn(){
        setIsLoggedIn(true);
        navigate('/')
    }

    return(
        <div className="login__container">
            <Logo logo__class = 'logo__form' />
            <h2 className="login__title">Добро пожаловать!</h2>
            <form className="login__form">
                <input onChange={handleChange} id='email' name='email' type='email' placeholder="Email" className="login__input" value={formValue.email}></input>
                <input onChange={handleChange} id='password' name='password' type='password' placeholder="Пароль" className="login__input" value={formValue.password}></input>
                <button type="submit" onClick={logIn} className="login__button">Войти</button>
            </form>
            <div>
                <p className="login__link_text">Еще не зарегистрированы?</p>
                <Link to='/signup' className="login__link">Регистрация</Link>
            </div>
            
        </div>
    )
}

export default Login;