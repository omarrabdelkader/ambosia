import React, {useState} from "react";

function Modal({ open, onClose, recipeMenu }) {
    const initialData = { title:'', ingredient:'', recipe: '', img:'' };
    const [formData, setFormData] = useState(initialData);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const onSubmit = async(e) => {
      e.preventDefault();
      const { title, ingredient, recipe, img } = formData;
      try {
        let res = await fetch(`http://localhost:5000/api/menu/${recipeMenu._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, ingredient, recipe, img }),
        });
        if (res.status === 400 || !res) {
          window.alert("Something went wrong!");
        } else {
          window.alert("Updated!");
          window.location.reload();
        }
        res = await res.json();
      } catch (error) {
        console.log(error);
      }
    
    };
    
    if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <h2>Update</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group-modal">
                <label htmlFor="formGroupExampleInput">TITLE</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-modal">
                <label htmlFor="formGroupExampleInput2">INGREDIENTS</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Ingredients"
                  name="ingredient"
                  value={formData.ingredient}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-modal">
                <label htmlFor="formGroupExampleInput">RECIPE</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Recipe"
                  name="recipe"
                  value={formData.recipe}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-modal">
                <label htmlFor="formGroupExampleInput">URL OF THE IMAGE</label>
                <input
                  type="url"
                  className="form-control"
                  id="url"
                  placeholder="http://via.placeholder.com/640x360"
                  name="img"
                  value={formData.img}
                  onChange={handleChange}
                />
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
