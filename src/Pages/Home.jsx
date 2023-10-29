import React from 'react';
import style from '../Styles/Movie.module.css'
import { Link } from 'react-router-dom';


function Home(props) {
    var {id,orlang,ortitle,overview,popul,pstpath,reldate,votavg,votecount}=props;
    return <div className={style.movieCard}>
        <img className={style.moviPic} src={pstpath}></img>
        <div className={style.moviedetails}>
            <h4 className={style.moviTitle}>{ortitle}</h4>
            <p className={style.moviDesc}>{overview}</p>
            <a href="#" className={style.moviBtn}>Go Watch</a><br></br><br></br>
            <Link style={{textDecoration:'none'}} to={`/Movie/${id}`}><a href='#' className={style.moviBtn}>Show details</a></Link>
        </div>
    </div>
}

export default Home;