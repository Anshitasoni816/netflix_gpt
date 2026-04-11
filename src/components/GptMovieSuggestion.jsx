import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import SkeletonRow from './SkeletonRow'

const GptMovieSuggestion = () => {
  const gptMovies = useSelector((store) => store.movies.gptMovies)
  const tmdbResults = useSelector((store) => store.movies.tmdbResults)
  const gptLoading = useSelector((store) => store.movies.gptLoading)

  if (gptLoading) {
    return (
      <div className='bg-black md:mt-10 md:mx-10 mt-2 mx-2'>
        <SkeletonRow titleWidthClass="w-36" cardCount={8} />
        <SkeletonRow titleWidthClass="w-28" cardCount={8} />
        <SkeletonRow titleWidthClass="w-32" cardCount={8} />
      </div>
    )
  }

  if(!gptMovies || !tmdbResults) return null
  
  return (
    <div className='bg-black md:mt-10 md:mx-10 mt-2 mx-2'>
      {/* <h1 className='text-white ms-20 '>{gptMovies}</h1> */}
      {tmdbResults.map((movies, index) => <MoviesList key={gptMovies[index]} title={gptMovies[index]} movies={tmdbResults[index]}/>) }
    </div>
  )
}

export default GptMovieSuggestion
