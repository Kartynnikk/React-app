import React, { useEffect, useState } from 'react'
import { Link, useParams} from "react-router-dom"
import "./movieDescription.css";

const MovieDescription = () => {
  const [movies, setMoviesDescription] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response= await fetch(
          "https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true"
          )

          const data= await response.json()

          setMoviesDescription(data)
      } catch (error){
         console.log("Incorrect data")
      }

      setLoading(false)
    }

    fetchData()
  },[])

  const { id } = useParams()

  const result= movies.map((movie)=>(
   
     (movie.eventId == id) ? movie.annotation :""

  ))



  return (
    <div>

      {loading && "Loading"}

      <div className='description'>{result}</div> 

      <Link to="/" className='back-home'>Back to home</Link>
    </div>
  )
}

export default MovieDescription
