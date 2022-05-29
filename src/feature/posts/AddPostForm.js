import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";
const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: nanoid(), title, content };
    dispatch(addPost(newPost));
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="write..."
          style={{ marginTop: "10px" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddPostForm;
