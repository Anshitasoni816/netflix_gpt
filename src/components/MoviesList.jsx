import React from 'react'
import MoviesCards from './MoviesCards'

const MoviesList = ({title, movies}) => {
  return (
   <div className='px-20 py-5'>
      <div className='flex justify-between items-center text-gray-500'>
        <h1 className='font-medium text-white mb-2 text-3xl'>{title}</h1>
      <p className='text-xl'>Explore more</p>
      </div>
     <div className='flex overflow-x-scroll no-scrollbar scroll-smooth'>
       <div className='flex gap-3'>
        {movies?.map((movie) => (
        <MoviesCards key={movie?.id} backdropPath = {movie?.backdrop_path} movieTitle = {movie?.title}/>
      ))}
       </div>
    </div>
   </div>
  )
}

export default MoviesList
