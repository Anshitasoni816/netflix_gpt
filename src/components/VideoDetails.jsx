import React from 'react'

const VideoDetails = ({trailerTitle, trailerOverview}) => {
  return (
   <div className='px-32 pt-[15%] absolute inset-0 text-white bg-gradient-to-r from-black via-black/50 to-transparent w-screen h-screen hidden md:block z-10'>
      <h1 className='md:text-3xl font-bold mb-5'>{trailerTitle}</h1>
      <p className='mb-8 md:w-4/12'>{trailerOverview}</p>
      <button className='me-2 font-bold text-black bg-white rounded px-6 py-2 hover:bg-gray-300'>Play</button>
      <button className='mx-2 font-bold bg-gray-500 rounded px-6 py-2'>More Info</button>
    </div>
  )
}

export default VideoDetails
