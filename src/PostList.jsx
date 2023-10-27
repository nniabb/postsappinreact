import React from 'react';
import './App.css';

function PostList({ posts, deletePost }) {
const countLetters = posts.reduce((total, post) => total + post.title.length, 0);
  return (
    <div className='par'>
      <div className='lengthbox'>
        <p className='pp'> Post Titles Length Is {countLetters} </p>
      </div>
      {posts.map((post) => (
        <div key={post.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <div className='postbox'>{post.title}</div>
          <button onClick={() => deletePost(post.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default PostList