import { Link, Route, Routes } from "react-router-dom";

export function Nav() {
  return (
    <div>
      <h2>I am Navbar</h2>
      <nav>
        <ul>
            <li>
                <Link to="/">Home Page</Link>
            </li>
            <li>
                <Link to="/about">About Page</Link>
            </li>
            <li>
                <Link to="/listing">Listing Page</Link>
            </li>
            <li>
                <Link to="/fdaslfd">Page not found test</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export function About() {
  return <div>
    <h2>About Page</h2>
    <Routes>
        <Route path="company" element={<Company/>}/>
        <Route path="founder" element={<Founder/>}/>
    </Routes>
  </div>;
}

function Company() {
    return <h4> We are  a good firm</h4>
}
function Founder() {
    return <h4> We are Nice People </h4>
}

export function Home() {
  return <h3>I am Home Page</h3>;
}

export function Listing() {
  return <h3>I am Listing Page</h3>;
}

export function PageNotFound() {
  return <h3>Page Not Found</h3>;
}