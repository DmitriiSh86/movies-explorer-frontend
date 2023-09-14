import React from "react";
import likeButtonActiv from '../../images/like-activ.svg'

function MoviesCardList(props) {
    return(
        <li className="movies-card-list__container">
            <img className="movies-card-list__photo"
            alt={props.movie.nameRU} 
            src={props.movie.image}
            />
            <div className="movies-card-list__bar">
                <h2 className="movies-card-list__title">{props.movie.nameRU}</h2>
                <button className="movies-card-list__button">
                    <img src ={likeButtonActiv} alt="Like" className="movies-card-list__like-activ"/>
                </button>
            </div>
            <div className="movies-card-list__border"></div>
            <p className="movies-card-list__duration">{props.movie.duration}</p>
        </li>
    )
}

export default MoviesCardList;