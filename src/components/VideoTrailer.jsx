import useMoviesTrailer from "../hooks/useMoviesTrailer";


const VideoTrailer = ({ trailerVideoId }) => {
  const trailerKey = useMoviesTrailer(trailerVideoId)
   return (
    <div className="h-full">
      {trailerKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0`}
          title="Trailer"
          className="h-full w-screen object-cover"
        />
      ) : <h1>trailer not available</h1> }
    </div>
  );
};

export default VideoTrailer;
