import React from 'react'
import MoviesCards from './MoviesCards'

const MoviesList = ({title, movies}) => {
  return (
   <div className='md:px-20 md:py-5 px-3 py-3'>
      <div className='flex items-center justify-between gap-3 text-gray-500'>
        <h1 className='font-medium text-white mb-2 md:text-3xl text-lg'>{title}</h1>
      <p className='shrink-0 md:text-xl text-sm'>{'All ->'}</p>
      </div>
     <div className='flex overflow-x-auto no-scrollbar scroll-smooth'>
       <div className='flex min-w-max gap-3'>
        {movies?.map((movie) => (
        <MoviesCards key={movie?.id} backdropPath = {movie?.backdrop_path} movieTitle = {movie?.title}/>
      ))}
       </div>
    </div>
   </div>
  )
}

export default MoviesList


