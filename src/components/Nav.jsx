import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/" className="Home">Home</Link>
        </li>
        <li>
          <Link to="/About" className="About">About</Link>
        </li>
        <li>
          <Link to="/Books" className="Books">Books</Link>
        </li>
        <li>
          <Link to="/Products" className="Products">Products</Link>
        </li>
        <li>
          <Link to="/Contact" className="Contact">Contact</Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Nav;