import React from "react";
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import ShortFilmSwitcher from '../ShortFilmSwitcher/ShortFilmSwitcher'

function Movies(props) {
    return(
        <section className="movies">
            <SearchForm />
            <ShortFilmSwitcher />
            <ul className="movies__container" aria-label="photo">
                {props.moviesData.map((movie) => <MoviesCardList key={movie._id} movie={movie}/>)}
            </ul>            
        </section>
    )
}

export default Movies;
