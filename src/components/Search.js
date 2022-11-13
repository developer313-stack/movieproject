import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom"
export default function Search() {
    const [films, setFilms] = useState([])
    const [film, setFilm] = useState("");
    useEffect(() => {
          if(film.length==0){
              setFilms([])
          }else{
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=70529d61fe54b1ad1ecaac7877cf57d4&query=${film}`)
            .then(response => response.json())
            .then(response => setFilms(response.results))
          }
        }, [film])
    return (
        <div>
            <Navbar />
            <div className='search-content'>
                <div className='search-div'>
                    <input type="text" id="input" className="search-input" onChange={(e)=>{setFilm(e.target.value)}} placeholder='Film axtar...'></input>
                </div>
                <h4 className='total'>Nəticə: {films.length}</h4>
                <div className='body' id='body'>
                    {films.map(film => {
                        return <Link className='film_route' to={`/ətraflı/${film.id}`}>
                            <div className='film_box' id={film.id}>
                                <div className='img-box'>
                                    <img src={`http://image.tmdb.org/t/p/w500/` + film.poster_path} alt=""></img>
                                </div>
                                <div className='info'>
                                    <div>
                                        <h3 className='film-name'>{film.title}</h3>
                                        <p className='date'>{film.release_date}</p>
                                    </div>

                                </div>
                                <div className='rating'>{film.vote_average}</div>
                            </div>
                        </Link>

                    })}
                </div>
            </div>
        </div>
    );
}
