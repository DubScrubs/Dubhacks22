import { FiCamera } from "react-icons/fi";
import styled from 'styled-components';
import './Upload.css';
function Upload() {
const Button = styled.button`
  border: 1px solid black;
  padding: 0.25em 1em;
  border-radius: 20px;
  outline: 0;
  margin: 10px 10px;
  text-transform: uppercase;
  height: 40px;
  width: 100px;
  backgound-color: white;
  font-size: 20px;
`;
/*
const UploadFile = props =>
;*/
  function clickPost(){
    alert('clicked friends!');
  }


  return (
    <>
    <p className="task">Go to your favorite spot on campus!</p>
    <div className="upload">
      <FiCamera size="3em"/>
    </div>
    <div className="privacy-buts">
      <Button onClick={clickPost}>
        Post
      </Button>
    </div>
    </>
  );
}
export default Upload;