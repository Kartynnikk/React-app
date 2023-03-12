import React, { useEffect, useState } from 'react'
import { Link, useParams} from "react-router-dom"
import "./movieDescription.css";
import Loader from "../../components/Loader"


const MovieDescription = () => {
  const [movies, setMoviesDescription] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, isError] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response= await fetch(
          "https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true"
          )

          const data= await response.json()

          setMoviesDescription(data)

          if(!data){
            throw new SyntaxError("We’ve found no movies, sorry!");
          }
      } catch (error){
         alert("We’ve found no movies, sorry!")
      }

      setLoading(false)

      if(!{id}){
        isError(false)
      }


    }

    fetchData()
  },[])


  const result= movies.map((movie)=>(
   
     (movie.eventId == id) ? movie.annotation :""

  ))


  return (
    <div>

      {loading} && <Loader />
      <br />
      {error && "Ooops, something went wrong"}
      

      <div className='description'>{result}</div> 

      <Link to="/" className='back-home'>Back to home</Link>
    </div>
  )
}

export default MovieDescription
