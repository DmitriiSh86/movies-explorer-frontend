import React from "react";

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies() {
    return(
        <section className="movies">
            <h1>SavedMovies</h1>
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default SavedMovies;