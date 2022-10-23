import React from "react";

import { useParams } from "react-router-dom";
import pfp from './../imgs/temppfp.png'

function Page({user, bio, pfp}){

  return (
    <>
      <img src={pfp} alt="" className="about-pfp" />
      <h2>{user}</h2>
      <p className="about-bio">{bio}</p>
      {/* <Calendar user={user}/> */}
    </>
  )

}



export default function Profile() {
  let params = useParams();
  let user = params.user

  let [profile, setProfile] = React.useState({
    user: "chris_26",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, error.",
    pfp: pfp
  })


  React.useEffect(()=>{
// Fetch for profile later
  },[profile])

  return (
    <div className="profile">
      <Page {...profile} />
    </div>
  );
};