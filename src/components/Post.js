

function Post({user, post}) {
  const {name, pfp} = user;
  const {image, comments} = post;



  return (
    <div className="post">

      <div className="post-header">
        <img src={pfp} alt="" />
        <h4>{name}</h4>
      </div>

      <img className="post-img" src={image} alt="" />


      <div className="post-comments">
        <div className="comment">
          <p className="comment-name">
            name
          </p>
          <p className="comment-content">
            wow nice pic
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;