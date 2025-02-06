import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/saved-recipes">Saved Recipes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
