import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 items-center p-2">
      <img
        className="size-8 rounded-4xl mx-2"
        src="https://tmdb-movies-scaler.netlify.app/assets/Logo-CvOug6Os.png"
        alt="tmdb-logo"
      />
      <div className="font-extrabold gap-4 flex text-blue-500">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </nav>
  );
}
