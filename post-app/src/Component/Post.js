import React from "react";
import PropTypes from "prop-types";

function Post({ id, title, removePost }) {
  return (
    <div className="Post">
      <button className="postDelete" onClick={() => removePost(id)}>
        X
      </button>
      <div className="postTitle">{title}</div>
      <img
        className="postImage"
        src={`https://source.unsplash.com/random?sig=${id}`}
      />
    </div>
  );
}

Post.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired,
};

export default Post;
