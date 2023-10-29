import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{backgroundColor:"blue",display:"flex",justifyContent:"space-around" ,padding:"15px",position:'fixed',width:"100%",top:'0px',zIndex:'1'}}>
            <Link style={{color:'white',textDecoration:'none',backgroundColor:'blue'}} to='/'>Home</Link>
            <Link style={{color:'white',textDecoration:'none',backgroundColor:'blue'}} to='/Contact'>Contact Us</Link>
            <Link style={{color:'white',textDecoration:'none',backgroundColor:'blue'}} to='/About'>About</Link>
            <Link style={{color:'white',textDecoration:'none',backgroundColor:'blue'}} to='/AddMoviePage'>Add New Movie</Link>



        </div>
    );
}

export default NavBar;