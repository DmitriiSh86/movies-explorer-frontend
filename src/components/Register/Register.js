import React, { useState } from "react";
import {Link} from 'react-router-dom'
import logoCircle from '../../images/logo-circle.png';

function Register() {
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
        <div className="register__container">
            <img src ={logoCircle} alt="Логотип" className="logo_circle"/>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form">
                <input onChange={handleChange} id='name' name='name' type='name' placeholder="Имя" className="register__input" value={formValue.name}></input>
                <input onChange={handleChange} id='email' name='email' type='email' placeholder="Email" className="register__input" value={formValue.email}></input>
                <input onChange={handleChange} id='password' name='password' type='password' placeholder="Пароль" className="register__input" value={formValue.password}></input>
                <button type="submit" className="register__button">Зарегистрироваться</button>
            </form>
            <div className="register__link">
                <p className="register__link">Уже зарегистрированы?</p>
                <Link to='/sign-in' className="register__link">Войти</Link>
            </div>
            
        </div>
    )
}

export default Register;