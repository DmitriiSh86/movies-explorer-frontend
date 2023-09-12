import React from "react";
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies() {
    return(
        <section className="movies">
            <h1>Movies</h1>
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default Movies;
