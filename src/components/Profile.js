import React from "react";

import { useParams } from "react-router-dom";
import pfp from './../imgs/temppfp.png'

function Page({user, bio, pfp}){

  return (
    <>
      <img src={pfp} alt="" className="profile-pfp" />
      <h2>{user}</h2>
      <p className="profile-bio">{bio}</p>
      <p>see post from:</p>
      <div className="calendar">

      </div>
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