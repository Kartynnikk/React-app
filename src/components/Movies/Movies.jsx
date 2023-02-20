import React, {useEffect, useState} from 'react';
import style from "../Movies/Movies.module.css";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response= await fetch(
          "https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true"
          )

          const data= await response.json()

          setMovies(data)
      } catch (error){
         console.log("Incorrect data")
      }

      setLoading(false)
    }

    fetchData()
  },[])

  return (
    <div>
       <Header />

        <div className={style.header}>

          {loading && "Loading"}

          <div className={style.wrapper}>
              {movies.map((movie) => (
                <div key={movie.code} className={style.container}>
                    <h1>{movie.name}</h1>

                    <div className={style.movieContainer}>
                      <img className={style.movieIcon} src={movie.bannerLink} alt="pic" />

                      <Link to="/movie-description">
                        <button className={style.movieButton} onClick={e=>this.getMovieDescription()}>Buy ticket</button>
                      </Link>

                      const getMovieDescription=() {
                        console.log("Check information about film")
                      }

                    </div>
                </div>
              ))}
              
          </div>
        </div>
    </div>
  )
}

export default Movies
