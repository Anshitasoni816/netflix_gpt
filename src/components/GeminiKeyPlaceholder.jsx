import React, { useState } from 'react'
import { LinkToGetAPIKey } from '../utils/constant'

const GeminiKeyPlaceholder = ({ setIsHidden, setApiKey }) => {
  const [inputKey, setInputKey] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedKey = inputKey.trim()
    if (!trimmedKey) return
    setApiKey(trimmedKey)
    setIsHidden(false)
  }

  return (
    <div className='mx-auto mb-4 w-full max-w-xl px-4 py-2 text-center sm:px-0'>
      <h1 className='mb-3 sm:mb-7 inline-block rounded-md bg-black/50 px-3 py-2 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'>
        Use your Gemini API Key To Access Our AI Features
      </h1>
      <form
        className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center'
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder='Enter your API Key'
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          className='w-full bg-gray-700 text-white placeholder:text-white/70 border border-gray-600 focus:outline-none px-3 py-2 font-medium sm:w-auto sm:min-w-[280px] text-center sm:text-left'
        />
        <button className='rounded bg-gray-800 px-4 py-2 text-white sm:px-3 sm:py-2' type='submit'>
          Submit
        </button>
      </form>
      <p className='mt-3 sm:mt-5 text-sm sm:text-lg font-bold bg-black/50 text-red-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'>Your key stays in this tab only and is never sent to our servers.</p>
      <p className='text-white text-base sm:text-lg mt-2 sm:mt-4'>don't have API key? <a href={LinkToGetAPIKey} className='text-blue-500 hover:underline'>Get one here</a></p>
    </div>
  )
}

export default GeminiKeyPlaceholder
