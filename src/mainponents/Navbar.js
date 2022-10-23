import logo from './../imgs/templogo.png'
import {Link, Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <h3>home</h3>
      <h3>about</h3>
      <Outlet/>
    </nav>
  );
}

export default Navbar;
