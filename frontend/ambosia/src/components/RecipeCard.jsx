import React from "react";
import { FaWindowClose, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const Nav = useNavigate();
  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:5000/api/menu/${recipe._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 400 || !res) {
        window.alert("Something went wrong!");
      } else {
        window.alert("Deleted!");
        window.location.reload();
      }
      res = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const goToRecipeDetail = async (e) => {
    Nav(`/recipe/${recipe._id}`);
  };
  return (
    <li className="list-group-item">
     
        <FaWindowClose className="window-close" onClick={clickHandler} />
        <FaCheck className="check-recipe" onClick={goToRecipeDetail} />
  
      <img className="img-product" src={recipe.img} alt={recipe.title} />
      <div className="colo-info">
        <p className="product_info">{recipe.title}</p>
      </div>
    </li>
  );
}

export default RecipeCard;
