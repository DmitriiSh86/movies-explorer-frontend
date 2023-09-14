import React, { useState } from "react";

function Profile() {
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
        <div className="profile__container">
            <h2 className="profile__title">Привет, Дмитрий!</h2>
            <form className="profile__form">
                <div className="profile__input_container">
                    <p className="profile__input_label">Имя</p>
                    <input onChange={handleChange} id='name' name='name' placeholder="Dmitrii" className="profile__input" value={formValue.name}></input>
                </div>
                <div className="profile__input_border"></div>
                <div className="profile__input_container">
                    <p className="profile__input_label">E-mail</p>
                    <input onChange={handleChange} id='email' name='email' type='email' placeholder="dmitrii@ya.ru" className="profile__input" value={formValue.email}></input>
                </div>
                
                
                
                <button type="submit" className="profile__button">Редактировать</button>
            </form>
            <button type="submit" className="profile__link">Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;