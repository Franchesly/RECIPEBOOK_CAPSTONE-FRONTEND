import React, { useEffect, useState } from "react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/recipes`);
        setRecipes(response.data);
        setFilteredRecipes(response.data); // Initialize filteredRecipes with all recipes
        console.log("Fetched recipes:", response.data); // debugging: log fetched recipes
      } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Error details:', error.response ? error.response.data : error.message); // Detailed error logging
      }
    };

    fetchData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredRecipes(filtered);
    console.log("filtered recipes:", filtered); // debugging: log filtered recipes
  };

  return (
    <div>
      <h1>Recipes</h1>
      <input
        type="text"
        placeholder="Search recipes by name or ingredients"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe._id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;