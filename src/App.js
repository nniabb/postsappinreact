import React, { useState } from 'react';
import Form from './Form';
import PostList from './PostList';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPostTitle) {
    const newPost = { id: crypto.randomUUID(), title: newPostTitle };
    setPosts((currentPosts) => [newPost, ...currentPosts]);
  }

  function deletePost(id) {
    setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
  }


  return (
    <div className='App'>
      <Form addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
