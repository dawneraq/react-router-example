import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <Link to="/dawneraq">dawneraq</Link> on GitHub.
    </div>
  );
}