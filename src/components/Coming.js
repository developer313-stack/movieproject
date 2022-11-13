import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import Navbar from './Navbar';

export default function Coming() {
    const [films,setFilms]=useState([])
    const [page,setPage]=useState(1)
    useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=70529d61fe54b1ad1ecaac7877cf57d4&language=en-US&page=${page}`)
.then(response=>response.json())
.then(response=>setFilms(response.results))
    },)
  return (
      <div className='prevs'>
          <Navbar/>
          <div className='arrow'>
      <h5><i onClick={()=>{if(page===1){

      }else{
        setPage(page-1)
      }}} class="fa fa-angle-left"></i>Əvvəlki</h5>Səhifə {page}
          <h5>Növbəti<i onClick={()=>setPage(page+1)} className="fa fa-angle-right"></i> </h5>
          </div>
    <div className='body'>
      {films.map(film => {
        return <Link className='film_route' to={`/ətraflı/${film.id}`}>
         <div className='film_box' id={film.id}>
          <div className='img-box'>
        <img src={`http://image.tmdb.org/t/p/w500/`+film.poster_path} alt=""></img>
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
  );
}
