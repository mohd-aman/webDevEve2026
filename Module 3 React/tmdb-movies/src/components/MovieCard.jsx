import { urlToPosterPath } from "../utility/moviesUtility";

export default function MovieCard({ movie, isFav, handleAddToWatchList,handleRemoveFromWatchList }) {
  const { poster_path, title } = movie;
  const posterPath = urlToPosterPath(poster_path);

  return (
    <div className="h-80 w-60 relative rounded-2xl hover:scale-105  delay-300 transition duration-300 ease-in-out cursor-pointer">
      {!isFav && (
        <div
          className="absolute text-2xl right-0 m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={()=>handleAddToWatchList(movie)}
        >
          😍
        </div>
      )}
      {isFav && (
        <div className="absolute text-2xl right-0 m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        onClick={()=>handleRemoveFromWatchList(movie.id)}>
          ❌
        </div>
      )}
      <img
        className="h-full w-full rounded-2xl"
        src={posterPath}
        alt="banner-image"
      />
      <p className="absolute font-bold text-black-700 bottom-3 w-full text-center bg-white">
        {title}
      </p>
    </div>
  );
}
