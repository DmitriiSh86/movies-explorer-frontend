import React, { useState } from "react";
import {Link} from 'react-router-dom'
import logoCircle from '../../images/logo-circle.png';

function Login() {
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

    return(
        <div className="login__container">
            <img src ={logoCircle} alt="Логотип" className="logo_circle"/>
            <h2 className="login__title">Добро пожаловать!</h2>
            <form className="login__form">
                <input onChange={handleChange} id='email' name='email' type='email' placeholder="Email" className="login__input" value={formValue.email}></input>
                <input onChange={handleChange} id='password' name='password' type='password' placeholder="Пароль" className="login__input" value={formValue.password}></input>
                <button type="submit" className="login__button">Войти</button>
            </form>
            <div className="login__link">
                <p className="login__link">Еще не зарегистрированы?</p>
                <Link to='/sign-in' className="login__link">Регистрация</Link>
            </div>
            
        </div>
    )
}

export default Login;