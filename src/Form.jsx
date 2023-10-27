import React, { useState, useCallback } from 'react';
import './App.css';
import { memo } from 'react';

function Form({ addPost }) {
  const [newPosts, setNewPosts] = useState('');

  const addPostCallback = useCallback(() => {
    if (newPosts === '') return;
    addPost(newPosts);
    setNewPosts('');
  }, [newPosts, addPost]);

  function handleSubmit(e) {
    e.preventDefault();
    addPostCallback();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="inpt"
        type="text"
        placeholder="New Post"
        value={newPosts}
        onChange={(e) => setNewPosts(e.target.value)}
      ></input>
    </form>
  );
}

export default memo(Form);