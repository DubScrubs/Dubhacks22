import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import Profile from "../components/Profile";


function About() {
  let params = useParams();
  let user = params.user

  return (
    <div className="About">
      {/* <Profile user={user}/> */}
    </div>
  );
}

export default About;