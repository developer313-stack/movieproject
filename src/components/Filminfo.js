import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import { faThumbsUp,faCalendarDays,faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filminfo() {
    const pars = useParams()
    const [film, setFilm] = useState([])
    const [trailer,setTrailer]=useState([])
    const [cast,setCast]=useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${pars.id}/videos?api_key=70529d61fe54b1ad1ecaac7877cf57d4&language=en-US`)
        .then(response => response.json())
        .then(response => setTrailer(response.results[0].key))
    },)
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${pars.id}?api_key=70529d61fe54b1ad1ecaac7877cf57d4&language=tr-Turkish`)
            .then(response => response.json())
            .then(response => setFilm(response))
            console.log(film)
    },[film])
    useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${pars.id}/credits?api_key=70529d61fe54b1ad1ecaac7877cf57d4&limit=10`)
    .then(response=>response.json())
    .then(response=>setCast(response.cast))
    console.log(cast)
    },[film])
    return (
        <div className='film-detail'>
              <h3 className='title'>{film.title}</h3>
              <div className='frag'>
              <img className='player' src={`http://image.tmdb.org/t/p/original/` + film.backdrop_path} alt=""></img>
              <div className='film-info'>
            <div className='rate'>
               <span><FontAwesomeIcon style={{color:"rgb(0, 162, 255)"}} icon={faThumbsUp}/>{film.vote_count}</span>
               <span><FontAwesomeIcon style={{color:"rgb(0, 162, 255)"}} icon={faClock}/>{film.runtime} dəq</span>
               <span><FontAwesomeIcon style={{color:"rgb(0, 162, 255)"}} icon={faCalendarDays}/>{film.release_date}</span>
           </div>
           <div className='overview'>
        <h6 className='movzu'>{film.overview}</h6>
        <div className='url'>
        <a href={film.homepage} target="blank" className='watch'>İzlə</a>
        <a href={film.homepage} target="blank" className='watch'>Fragman</a>
        </div>
        </div>
        <div className='details'>       </div>
        </div>
        </div>
        </div>
    );
}
