import MovieCard from "./MovieCard";

export default function Movies({ moviesList }) {
  return (
    <section className="p-4">
      <h3 className="font-extrabold text-3xl text-center p-4">
        Trending Movies
      </h3>
      <div className="flex flex-wrap gap-8 justify-evenly">
        {moviesList.map(({ id, poster_path, title }) => {
          return <MovieCard key={id} url={poster_path} title={title} />;
        })}
      </div>
    </section>
  );
}
