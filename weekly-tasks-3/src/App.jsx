import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import UserPosts from './task1/pages/UserPosts';
import PostDetail from './task1/pages/PostDetail';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <header className="app-header">
          <h1>1. Blog Platform (Medium-like)</h1>
          <nav>
            <Link to="/john/posts">User Posts</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="/john/posts" />} />
          <Route path="/:username/posts" element={<UserPosts />} />
          <Route path="/post/:slug" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
