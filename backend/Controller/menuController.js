const asynchandler = require("express-async-handler");
const Menu = require("../Model/menuModel");

const setMenu = asynchandler(async (req, res) => {
  const { title, ingredient, recipe, img } = req.body;
  if (!title | !ingredient | !recipe | !img) {
    throw new Error("Please add a value");
  }
  const foodExists = await Menu.findOne({ title });

  if (foodExists) {
    throw new Error("Already exists");
  }
  const recipeCreation = await Menu.create({
    title,
    ingredient,
    recipe,
    img,
  });
  if (recipeCreation) {
    res.status(201).json({
      _id: recipeCreation.id,
      title: recipeCreation.title,
      ingredient: recipeCreation.ingredient,
      recipe: recipeCreation.recipe,
      img: recipeCreation.img,
    });
  }
});

const getMenu = asynchandler(async (req, res) => {
  const menus = await Menu.find();
  res.status(201).json(menus);
});

//getMenuById
const getMenuById = asynchandler(async (req, res) => {
  const menus = await Menu.findById(req.params.id);
  res.status(201).json(menus);
});

const updateMenu = asynchandler(async (req, res) => {
  const updated = await Menu.findOneAndUpdate(req.params.id, req.body, {
    new: true
})
res.status(200).json(updated)
});

const deleteMenu = asynchandler(async (req, res) => {
  const deleted = await Menu.deleteOne({_id: req.params.id});
  res.status(200).json(deleted);
});

module.exports = { setMenu, getMenu, updateMenu, deleteMenu, getMenuById };
