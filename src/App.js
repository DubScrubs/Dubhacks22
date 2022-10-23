import './App.css';
import Navbar from  './mainponents/Navbar';
import Theme from './components/Theme';
import Post from './components/Post';
import pfp from  './imgs/temppfp.png';
import temppic from './imgs/temppic.png'
import robbert from './imgs/robbert.jpg'




function App() {
  return (
    <>
      <Theme day="TODAY" header="Go to your favorite spot on campus!"/>
      <Post
        user={{
          name: "jx89", pfp: pfp
        }}
        post={{
          image: temppic,
          comments: [
            {user: "havi_d", comment: "sick pic!😍"},
            {user: "chris26", comment: "crazy"},
          ]
        }}

      />
      <Post
        user={{
          name: "robdowney", pfp: pfp
        }}
        post={{
          image: robbert,
          comments: [
            {user: "havi_d", comment: "sick pic!😍"},
            {user: "chris26", comment: "crazy"},
          ]
        }}

      />

      <Navbar/>
    </>
  );
}

export default App;