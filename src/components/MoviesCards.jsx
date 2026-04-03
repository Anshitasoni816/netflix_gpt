import React from 'react'
import { ImageCDN } from '../utils/constant'

const MoviesCards = ({backdropPath, movieTitle}) => {

  if(!backdropPath) return null;
  
  return (
   <div className='w-62 aspect-video relative cursor-pointer group transform transition duration-300 hover:scale-110 rounded-2xl overflow-hidden'>

  <img 
    src={ImageCDN + backdropPath} 
    alt="posterCard"
    className='w-full h-full object-cover'
  />

  {/* shadow */}
  <div className="absolute inset-0 pointer-events-none 
  shadow-[inset_0_-40px_80px_rgba(0,0,0,0.7),inset_0_40px_80px_rgba(0,0,0,0.7),inset_40px_0_80px_rgba(0,0,0,0.7),inset_-40px_0_80px_rgba(0,0,0,0.7)]"></div>

  {/* title */}
  <div className='text-white text-sm font-bold absolute bottom-5 left-2 
  group-hover:scale-100 transition-all duration-300 opacity-50 group-hover:opacity-100'>
    {movieTitle}
  </div>

</div>
    
  )
}

export default MoviesCards
