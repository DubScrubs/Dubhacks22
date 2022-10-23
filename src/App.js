import './App.css';
import Navbar from  './mainponents/Navbar';
import Theme from './components/Theme';
import Post from './components/Post';
import pfp from  './imgs/temppfp.png';
import temppic from './imgs/temppic.png'




function App() {
  return (
    <>
      <Theme day="Today" header="Go to your favorite spot on campus!"/>
      <Post
        user={{
          name: "jx89", pfp: pfp
        }}
        post={{
          image: temppic,
          comments: [
            {user: "havi_d", comment: "sick pic!😍"},
            {user: "chris26", comment: "crazy"}
          ]
        }}
      />

    </>
  );
}

export default App;