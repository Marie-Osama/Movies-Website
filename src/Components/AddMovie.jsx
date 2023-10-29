import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid"
import { moviesContext } from '../Context/MovieContextProvider';
import style from '../Styles/Movie.module.css'

const AddMovie = ()=> {
    const {addmovie}=useContext(moviesContext)
    const [movieData,setData]=useState({id:uuid(),original_title:"",overview:"",poster_path:"",release_date:"",vote_average:""})
    
    const handleChange=(e)=>{
        setData((oldMovies)=>({...oldMovies,[e.target.name]:e.target.value}))   
    }
    
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        addmovie(movieData);
        setData({original_title:"",overview:"",poster_path:""})
        navigate("/")
    }
    return <div>
        <h1 style={{margin:"70px"}}>Add Movie</h1>
        <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type="text" name="original_title" value={movieData.original_title} onChange={handleChange}></input>
        <br></br><br></br>
        <label>Overview: </label>
        <input type="text" name="overview" value={movieData.overview} onChange={handleChange}></input>
        <br></br><br></br>
        <label>Poster Path: </label>
        <input type="text" name="poster_path" value={movieData.poster_path} onChange={handleChange}></input>
        <br></br><br></br>
        <label>Release Date: </label>
        <input type="text" name="release_date" value={movieData.release_date} onChange={handleChange}></input>
        <br></br><br></br>
        <label>Rating: </label>
        <input type="text" name="vote_average" value={movieData.vote_average} onChange={handleChange}></input>
        <br></br>
        <input className={style.moviBtn} type="submit" value="Add Movie"></input>
    </form>
  </div>;
}

export default AddMovie;