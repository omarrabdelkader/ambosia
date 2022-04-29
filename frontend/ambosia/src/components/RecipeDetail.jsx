import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

function RecipeDetail() {
  const nav = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const [recipeMenu, setRecipeMenu] = useState({});
  const getRecipe = async () => {
    const url = `http://localhost:5000/api/menu/menuinfo/${id}`;
    const response = await fetch(url);
    const resultRecipe = await response.json();
    setRecipeMenu(resultRecipe);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:5000/api/menu/${recipeMenu._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 400 || !res) {
        window.alert("Something went wrong!");
      } else {
        window.alert("Deleted!");
        nav("/outlook");
      }
      res = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = () => {
    setOpenModal(!openModal);
  };
  return (
    <section className="recipeDetailContainer">
      <h3 className="recipe-title">{recipeMenu.title}</h3>
      <div className="recipe-info">
        <img className="recipe-img" src={recipeMenu.img} />
        <p className="sub-recipe">Ingredient:</p>
        <p className="recipe-p">{recipeMenu.ingredient}</p>
        <p className="sub-recipe">Recipe:</p>
        <p className="recipe-p">{recipeMenu.recipe}</p>
        <div className="recipe-btns">
          <FaEdit onClick={handleToggle} className="edit-delete" />
          <Modal open = {openModal}  recipeMenu = {recipeMenu} onClose={() => setOpenModal(false)}/>
          <FaWindowClose className="edit-delete" onClick={clickHandler} />
        </div>
      </div>
    </section>
  );
}

export default RecipeDetail;
