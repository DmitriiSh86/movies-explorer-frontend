import React from "react";

function ShortFilmSwitcher() {
    return(
        <section className="short-film-switcher__container">
            <button className="short-film-switcher__switcher">
                <div className="short-film-switcher__round"></div>
            </button>
            <p className="short-film-switcher__title">Короткометражки</p>
        </section>
    )
}

export default ShortFilmSwitcher;