import React, {useEffect, useState} from 'react';
import "./movies.css";
import Movie from "../Movie"


const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

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

        <div className="header">

          {loading && "Loading"}

          <div className="wrapper">
              {movies.map((movie) => (
                
                <Movie movie={movie} />
              ))}
              
          </div>
        </div>
    </div>
  )
}

export default Movies
