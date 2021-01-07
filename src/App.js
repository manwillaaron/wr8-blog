import React from 'react';
import Header from './components/Header'
import PostsDisplay from './components/PostsDisplay'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <PostsDisplay/>
    </div>
  );
}

export default App;
