import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const GptMovieSuggestion = () => {
  const gptMovies = useSelector((store) => store.movies.gptMovies)
  const tmdbResults = useSelector((store) => store.movies.tmdbResults)
  if(!gptMovies || !tmdbResults) return null
  
  return (
    <div className='bg-black md:mt-10 md:mx-10 mt-2 mx-2'>
      {/* <h1 className='text-white ms-20 '>{gptMovies}</h1> */}
      {tmdbResults.map((movies, index) => <MoviesList key={gptMovies[index]} title={gptMovies[index]} movies={tmdbResults[index]}/>)}
    </div>
  )
}

export default GptMovieSuggestion
