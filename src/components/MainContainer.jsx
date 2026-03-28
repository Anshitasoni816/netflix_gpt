import React from 'react'
import { useSelector } from 'react-redux'
import VideoDetails from './VideoDetails'
import VideoTrailer from './VideoTrailer'

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    if(!movies) return null

    //logic to fetch the most popular trailer
    const mainMovie = movies.reduce((best, current) => {
        return current.vote_count > best.vote_count ? current : best; 
    } , movies[0])
 
    const {id, title, overview} = mainMovie;

   return (
    <div>
      <VideoDetails  trailerTitle = {title} trailerOverview = {overview}/>
      <VideoTrailer trailerVideoId = {id} />
    </div>
  )
}

export default MainContainer
