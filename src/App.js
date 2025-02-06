import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/recipes";
import SavedRecipes from "./pages/SavedRecipes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;