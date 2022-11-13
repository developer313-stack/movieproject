import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
export default function Body() {
  const [films, setFilms] = useState([])
  const [page,setPage]=useState(1)
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=70529d61fe54b1ad1ecaac7877cf57d4&language=tr-Turkish&page=${page}`)
    .then(response => response.json())
    .then(response =>setFilms(response.results))
  },[page])
  return (
    <div className='body-section'>
      <h4 className='all-movies'>Kəşfet</h4>
      <div className='arrow'>
      <h5><i  onClick={()=>{if(page===1){

      }else{
        setPage(page-1)
      }}} className="fa fa-angle-left ture"></i>Əvvəlki</h5>Səhifə {page}
          <h5>Növbəti<i  onClick={()=>setPage(page+1)} className="fa fa-angle-right ture"></i> </h5>
          </div>
      <div className='body' id='body'>
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
