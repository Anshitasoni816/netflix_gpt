import React from 'react'
import { ImageCDN } from '../utils/constant'

const MoviesCards = ({backdropPath, movieTitle}) => {

  if(!backdropPath) return null;
  
  return (
   <div className='w-24 shrink-0 md:w-40 aspect-[2/3] relative cursor-pointer group 
transform transition duration-300 hover:scale-110 rounded-2xl overflow-hidden'>

  <img 
    src={ImageCDN + backdropPath} 
    alt="posterCard"
    className='w-full h-full object-cover'
  />

  {/* shadow */}
  <div className="absolute inset-0 pointer-events-none 
  shadow-[inset_0_-40px_80px_rgba(0,0,0,0.7),inset_0_40px_80px_rgba(0,0,0,0.7),inset_40px_0_80px_rgba(0,0,0,0.7),inset_-40px_0_80px_rgba(0,0,0,0.7)]"></div>

  {/* title */}
 <div className='
  absolute bottom-0 left-0 w-full
  p-0.5 md:p-1
  text-white text-[10px] sm:text-xs md:text-sm font-semibold
  bg-gradient-to-t from-black/90 via-black/40 to-transparent
  line-clamp-1
'>
  {movieTitle}
</div>

</div>
    
  )
}

export default MoviesCards
