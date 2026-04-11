import React, { useState } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Bg_URL } from '../utils/constant'
import GeminiKeyPlaceholder from './GeminiKeyPlaceholder'

const GptSearch = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [apiKey, setApiKey] = useState("")
  console.log("API Key in GptSearch:", apiKey)

  return (
    <div
      className='min-h-screen bg-cover bg-center pt-28 pb-24 md:pt-48 md:pb-10'
      style={{ backgroundImage: `url(${Bg_URL})` }}
    >
      <GeminiKeyPlaceholder setIsHidden={setIsHidden} setApiKey={setApiKey} />
      {isHidden ? null : <GptSearchBar apiKey={apiKey} />}
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
