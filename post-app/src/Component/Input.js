import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function Input({ addPost }) {
  const [input, setInput] = useState("");

  function onChange(event) {
    setInput(event.target.value);
  }

  function onKeyDown(event) {
    const newPost = event.target.value;
    if (event.key === "Enter" && newPost) {
      addPost(newPost);
      setInput("");
    }
  }

  return (
    <div className="Input">
      <div className="inputHeader">Create Post</div>
      <input
        className="inputField"
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

Input.prototype = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
