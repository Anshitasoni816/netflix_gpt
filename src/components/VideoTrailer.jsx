import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoTrailer = ({ trailerVideoId }) => {
  const trailerKey = useMoviesTrailer(trailerVideoId)
   return (
    <div className="aspect-video w-full md:h-screen md:aspect-auto">
      {trailerKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0`}
          title="Trailer"
          className="h-full w-full object-cover"
          allowFullScreen
        />
      ) : <h1>trailer not available</h1> }
    </div>
  );
};

export default VideoTrailer;
