

function Comment({user, content}){

  return (
    <div className="comment">
          <p className="comment-name">
            {user}
          </p>
          <p className="comment-content">
            {content}
          </p>
        </div>
  );
}

function Post({user, post}) {
  const {name, pfp} = user;
  const {image, comments} = post;

  const Comments = comments.map(comment => {
    console.log(comment)
    return <Comment user={comment.user} content={comment.comment}/>
  })

  return (
    <div className="post">

      <div className="post-header">
        <img src={pfp} alt="" />
        <h4>{name}</h4>
      </div>

      <img className="post-img" src={image} alt="" />


      <div className="post-comments">
        {/* <div className="comment">
          <p className="comment-name">
            name
          </p>
          <p className="comment-content">
            wow nice pic
          </p>
        </div> */}
        {Comments}
      </div>
    </div>
  );
}

export default Post;