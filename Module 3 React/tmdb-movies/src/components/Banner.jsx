import { urlToPosterPath } from "../utility/moviesUtility";

export default function Banner({url,title}) {
  const posterPath = urlToPosterPath(url);
  return (
    <main className="relative">
      <img
        className="h-[70vh] w-screen object-fill"
        src={posterPath}
        alt="banner-image"
      />
      <p className="absolute text-black-700 text-2xl bottom-0.5 w-full text-center bg-white">
        {title}
      </p>
    </main>
  );
}
