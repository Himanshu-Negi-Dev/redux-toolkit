import React from "react";
import { useSelector } from "react-redux";
import AddPostForm from "./AddPostForm";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const handleEdit = (postId) => {};
  const handleDelete = (e) => {};

  const postsRender = posts.map((post) => (
    <div style={{ border: "1px solid black", margin: "5px 0" }} key={post.Id}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div>
        <button onClick={() => handleEdit(post.id)}>edit</button>
        <button onClick={() => handleDelete(post.id)}>delete</button>
      </div>
    </div>
  ));
  return (
    <div>
      <AddPostForm />
      {postsRender}
    </div>
  );
};

export default Posts;
