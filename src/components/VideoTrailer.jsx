import useMoviesTrailer from "../utils/useMoviesTrailer";


const VideoTrailer = ({ trailerVideoId }) => {
  const trailerKey = useMoviesTrailer(trailerVideoId)
   return (
    <div>
      {trailerKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0`}
          title="Trailer"
          className="w-screen aspect-video"
        />
      ) : <h1>trailer not available</h1> }
    </div>
  );
};

export default VideoTrailer;
