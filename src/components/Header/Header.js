import React from "react";
import {Link} from 'react-router-dom'
import logoCircle from '../../images/logo-circle.png';
import logoAccount from '../../images/account.svg';

function Header() {
    return(
        <div className="header__container">
            <Link to='/' className="header__logo_circle">
                <img src ={logoCircle} alt="Логотип"/>
            </Link>
            
            <div className="header__nav">
                <Link to='/movies' className="header__link">Фильмы</Link>
                <Link to='/saved-movies' className="header__link header__link_filmSaved">Сохраненные фильмы</Link>
            </div>
            <Link to='/profile' className="header__link header__account">
                Аккаунт
                <div className="header__logo-container">
                    <img src ={logoAccount} alt="Логотип" className="header__logo-account"/>
                </div>
                
            </Link>
        </div>
    )
}

export default Header;