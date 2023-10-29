import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../Context/MovieContextProvider';
import style from '../Styles/Movie.module.css'


function Details() {
    const {id}=useParams();
    const {movies}=useContext(moviesContext);
    const [movie,setMovie]=useState({original_title:"",overview:"",})
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    useEffect(()=>{
        setMovie(movies.filter((m)=>m.id==id)[0])
    },[id,movies])
    // console.log(movies)
    // console.log(movie)
    // console.log(movies.filter((m)=>m.id==id)[0])



    return (
        <div style={{display:'flex',margin:"20px",paddingTop:"50px"}}>
            <img style={{height:"500px",width:"500px",margin:"20px"}} src={imgPath + movie.poster_path}></img>
            <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column',justifyContent:'flex-start'}}>
            <h1>{movie.original_title}</h1>
            <p><label style={{color:'red',fontSize:"30px"}}>Overview: </label><span>{movie.overview}</span></p>
            <p style={{fontSize:"30px"}}><label style={{color:'royalblue'}}>Release Date: </label><span>{movie.release_date}</span></p>
            <p style={{fontSize:"30px"}}><label style={{color:'green'}}>Rating: </label><span>{movie.vote_average}</span></p>
            <p><a href="#" className={style.moviBtn}>Go Watch</a></p>
            </div>
        </div>
    );
}

export default Details;