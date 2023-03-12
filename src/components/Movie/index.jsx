import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./movie.css"


const Movie = ({movie}) => {
  const { code, name, bannerLink, eventId, annotation } = movie;
  const navigate = useNavigate();

  console.log({annotation})

  const toMovieDescription =()=>{
    navigate('/movie-description', { state:{ id: {eventId}, description:{annotation}}});
  }

  return (
        <div key={code} className="container">
            <h1>{name}</h1>

              <div className="movie-container">
                <img className="movie-icon" src={bannerLink} alt="pic"/>

                <Link to={{
                   pathname: `/movie-description/${eventId}`,
                   state: {id:{eventId}, description:{annotation}}
                }}>
                   <button className="movie-button" 
                   onClick={()=> {toMovieDescription()}}
                   >Buy ticket</button>
                </Link>
                
              </div>
        </div>
  )
}

export default Movie
