import React from "react";
import "../Category.css";

function Category(props) {
  function categoryID(id) {
    document.getElementById("allCategory").classList.remove("checkedLi");
    props.setCategoryID(id);
  }
  function showAllCategory() {
    props.setCategoryID(undefined);
  }
  return (
    <ul className="category d-flex space-between">
      <button
        id="allCategory"
        onClick={() => showAllCategory()}
        className="checkedLi"
        checked
      >
        Hepsi
      </button>
      {props.category.map((item) => {
        return (
          <button
            id={item.id}
            className="c-pointer"
            onClick={() => categoryID(item.id)}
            key={item.id}
          >
            {item.title}
          </button>
        );
      })}
      <button onClick={() => showAllCategory()}>Diğer</button>
    </ul>
  );
}

export default Category;
