import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
function Outlook() {

  const [recipes, setRecipe] = useState([]);
  
  const getRecipe = async () => {
    const url = "http://localhost:5000/api/menu/menuinfo";
    const response = await fetch(url);
    const recipes = await response.json();
    setRecipe(recipes);
  };
  
  useEffect(() => {
    getRecipe();
  }, []);
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(4);

  const indexOfLastPage = currentPage * recipesPerPage;

  const indexOfFirstPage = indexOfLastPage - recipesPerPage;

  const currentRecipes = recipes.slice(indexOfFirstPage, indexOfLastPage);

  const totalRecipes = recipes.length;

  const MaxPages = Math.ceil(totalRecipes / recipesPerPage);

  const nextPage = () => {
    if (currentPage < MaxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <p className="outlook-p">
        Go through out our menu and choose what is best for you
      </p>
      <img
        className="outlook-img"
        src="https://i.ibb.co/517Fc1C/Facebook-Cover-851x315-px-1.jpg"
        alt=""
      />
      <div className="product-container">
        <div className="button-container">
        <FaArrowLeft onClick={previousPage} className="left-button"/>
        </div>
        <ul className="list-container">
          {currentRecipes.map((recipe, index) => (
            <RecipeCard recipe={recipe} key={index} />
          ))}
        </ul>

        <FaArrowRight onClick={nextPage} className="right-button"/>
          
      </div>
      )
    </>
  );
}

export default Outlook;
