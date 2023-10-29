import { createContext, useEffect, useState } from "react"


export const moviesContext=createContext();

const MovieContextProvider = ({children}) =>{
    const [movies, setMovies] = useState([])

    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const url = "https://api.themoviedb.org/3";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiUrl = url + path + apiKey;

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(json => setMovies(json.results ))
        // axios.get(apiUrl).then((res)=>this.setState({movie:res.results})) 

        console.log("data fetched")
        

    }, [])

    const addmovie=(movieData)=>{
        setMovies((oldMovies)=>[...oldMovies,{...movieData}])
    }

    return(
        <moviesContext.Provider value={{movies,addmovie}}>{children}</moviesContext.Provider>
    )

}

export default MovieContextProvider;