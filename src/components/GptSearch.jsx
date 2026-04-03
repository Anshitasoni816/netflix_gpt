import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Bg_URL } from '../utils/constant'
const GptSearch = () => {
  return (
    <div className='min-h-screen bg-cover bg-center pt-28 pb-24 md:pt-48 md:pb-10'
     style={{backgroundImage: `url(${Bg_URL})`}}>
     <GptSearchBar/>
     <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
