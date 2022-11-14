import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player"

export default function Filminfo() {
    const pars = useParams()
    const [film, setFilm] = useState([])
    const [trailer,setTrailer]=useState([])
        fetch(`https://api.themoviedb.org/3/movie/${pars.id}/videos?api_key=70529d61fe54b1ad1ecaac7877cf57d4&language=en-US`)
        .then(response => response.json())
        .then(response => setTrailer(response.results[0].key))
    
    
        fetch(`https://api.themoviedb.org/3/movie/${pars.id}?api_key=70529d61fe54b1ad1ecaac7877cf57d4&language=tr-Turkish`)
            .then(response => response.json())
            .then(response => setFilm(response))
    
    return (
        <div className='film-detail'>
                <ReactPlayer className="player" width="100%" height="350px" url={`https://www.youtube.com/watch?v=${trailer}`}></ReactPlayer>
            <div className='film-info'>
        <h5>Ad: <i>{film.title}</i></h5>
        <h6>Mövzu: <br></br>
        {film.overview}</h6>
        <div className='details'>
        <p>Çıxış tarixi: {film.release_date}</p>
        <p>Vaxt: {film.runtime + " dəqiqə"}</p>
        <p>Bəyəni: {film.vote_count}</p>
       </div>
        </div>
        </div>
    );
}
