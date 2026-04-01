import React from 'react'

const GptSearchBar = () => {
  return (
    
      <div className='bg-black w-1/2 mx-auto flex opacity-90'>
        <form action="" className='p-5 flex w-full'>
            <input type="text" placeholder='What would you like to search today?'
            className='outline-none bg-white flex-1 px-3 py-3 m-2 text-md rounded'/>

            <button className='text-white bg-red-700 px-12 py-2 m-2 font-medium rounded text-xl'>
                Search
            </button>
        </form>
      </div>
    
  )
}

export default GptSearchBar
