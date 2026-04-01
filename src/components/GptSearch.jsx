import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Bg_URL } from '../utils/constant'
const GptSearch = () => {
  return (
    <div className='pt-48 bg-cover min-h-screen bg-center'
     style={{backgroundImage: `url(${Bg_URL})`}}>
     <GptSearchBar/>
     {/* <GptMovieSuggestion/> */}
    </div>
  )
}

export default GptSearch
