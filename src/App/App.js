import {  lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieContextProvider from '../Context/MovieContextProvider';
import NavBar from '../Components/NavBar';
import Movie from '../Components/Movie';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from '../Pages/NotFound';
import Details from '../Pages/Details';
import AddMoviePage from '../Pages/AddMoviePage';


// const Home=lazy(()=>import("../Pages/Home"))
// const About=lazy(()=>import("../Pages/About"))
// const Contact=lazy(()=>import("../Pages/Contact"))
// const AddMovie=lazy(()=>import("../Pages/AddMoviePage"))
// const NotFound =lazy(()=>import( '../Pages/NotFound'));

function App() {
  return (
    <div className='App'>
      <MovieContextProvider>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Movie></Movie>}></Route>
          <Route path='About' element={<About></About>}></Route>
          <Route path='Contact' element={<Contact></Contact>}></Route>
          <Route path='AddMoviePage' element={<AddMoviePage></AddMoviePage>}></Route>
          <Route path='Movie/:id' element={<Details></Details>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
      </MovieContextProvider>
    </div>
  );
}

export default App;
