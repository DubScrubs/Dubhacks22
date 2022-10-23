import logo from './../imgs/templogo.png'
import {Link, Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <nav id="navbar">
      <h3>home</h3>
      <h3>camera</h3>
      <h3>explore</h3>
      <h3>profile</h3>
      <Outlet/>
    </nav>
  );
}

export default Navbar;
