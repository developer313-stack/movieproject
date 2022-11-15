import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { faThumbsUp,faCalendarDays,faClock,faArrowLeft,faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
    },[1])
    useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${pars.id}/credits?api_key=70529d61fe54b1ad1ecaac7877cf57d4`)
    .then(response=>response.json())
    .then(response=>setCast(response.cast))
    },[1])
    return (
        <div className='film-detail'>
            <div className='head'>
             <Link to="/home"><FontAwesomeIcon className='ikon ikon2' icon={faArrowLeft} /></Link>
              <h3 className='title'>{film.title}</h3>
              </div>
              <div className='frag'>
              <iframe  className='player'
src={`https://www.youtube.com/embed/${trailer}`}>
</iframe>
              <div className='film-info'>
            <div className='rate'>
               <span><FontAwesomeIcon style={{color:"rgb(0, 162, 255)"}} icon={faThumbsUp}/>{film.vote_count}</span>
               <span><FontAwesomeIcon style={{color:"rgb(0, 162, 255)"}} icon={faClock}/>{film.runtime} dəq</span>
               <span><FontAwesomeIcon style={{color:"rgb(0, 162, 255)"}} icon={faCalendarDays}/>{film.release_date}</span>
           </div>
           <div className='overview'>
               <h5>Büdcə: {film.budget + "$"}</h5>
            <h5>Gəlir: {film.revenue + "$"}</h5>
        <h6 className='movzu'>{film.overview}</h6>
        <div className='url'>
        <a href={film.homepage} target="blank" className='watch'><FontAwesomeIcon icon={faPlay}/> İzlə</a>
        </div>
        </div>
        </div>
        </div>
        <div className='details'>
        </div>
        </div>
    );
}
