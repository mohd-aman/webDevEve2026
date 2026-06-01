import {Link} from 'react-router-dom';

export default function Navbar({loadAboutPage, loadContactPage}){
  return(
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link onClick={loadAboutPage} to="/about">About</Link>
        </li>
        <li>
          <Link onClick={loadContactPage} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}