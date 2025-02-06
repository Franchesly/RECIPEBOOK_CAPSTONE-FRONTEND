import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

function Home() {
  return (
    <div className="home-background">
      <h2>Welcome to Delicia, your own personal recipe book.</h2>
      <div className="box-container">
        <Link to="/recipes" className="box">
          View Recipes
        </Link>
        <Link to="/saved-recipes" className="box">
          Saved Recipes
        </Link>
      </div>
    </div>
  );
}

export default Home;
