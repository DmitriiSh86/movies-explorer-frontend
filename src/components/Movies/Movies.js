import React from "react";
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import ShortFilmSwitcher from '../ShortFilmSwitcher/ShortFilmSwitcher'
import likeButtonActiv from '../../images/like-activ.svg'
import likeButtonNotActiv from '../../images/like-not-activ.svg'


function Movies(props) {
    return(
        <section className="movies">
            <SearchForm />
            <ShortFilmSwitcher />
            <ul className="movies__container" aria-label="photo">
                {props.moviesData.map((movie) => 
                    <MoviesCardList 
                        key={movie._id} 
                        movie={movie}
                        likeButton={likeButtonActiv}
                        likeButtonNotActiv={likeButtonNotActiv}
                    />)}
            </ul>            
        </section>
    )
}

export default Movies;
