import React from 'react';
import Header from './components/Header'
import PostsDisplay from './components/PostsDisplay'
import './App.css';
import routes from './routes';

function App() {
  return (
    <div className="app">
      {routes}
    </div>
  );
}

export default App;
