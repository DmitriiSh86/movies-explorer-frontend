import React from "react";
import { Link } from "react-router-dom";

function NavMovies({themeNav}) {
    return (
        <div className="nav__container">
            <Link to="/" className={`nav__link nav__link_main`}>
                Главная
            </Link>
            <Link to="/movies" className={`nav__link ${themeNav}`}>
                Фильмы
            </Link>
            <Link to="/saved-movies" className={`nav__link nav__link_filmSaved ${themeNav}`}>
                Сохраненные фильмы
            </Link>
        </div>
    );
}

export default NavMovies;