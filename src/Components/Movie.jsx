import React, { useContext } from 'react';
import { moviesContext } from '../Context/MovieContextProvider';
import Home from '../Pages/Home';
import style from '../Styles/Movie.module.css'


function Movie() {
    const {movies}=useContext(moviesContext)
    console.log(movies)
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    return (
        <div>
            <div className={style.container}>
                {movies.map((mov) => <Home key={mov.id}
                    id={mov.id} orlang={mov.original_language}
                    ortitle={mov.original_title} overview={mov.overview}
                    popul={mov.popularity} pstpath={imgPath + mov.poster_path}
                    reldate={mov.release_date} votavg={mov.vote_average}
                    votecount={mov.vote_count}/>)}
            </div>
        </div>
    );
}

export default Movie;