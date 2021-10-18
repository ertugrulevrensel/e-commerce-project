import React from "react";
import "./Category.scss";

function Category(props) {
  function categoryID(id) {
    //document.getElementById("allCategory").classList.remove("checkedLi");
    props.setCategoryID(id);
    document.getElementById("allCategory").classList.remove("checkedLi");
    for (let i = 0; i < props.category.length; i++) {
      if (props.category[i].id === id) {
        document.getElementById(id).classList.add("checkedLi");
      } else {
        document
          .getElementById(props.category[i].id)
          .classList.remove("checkedLi");
      }
    }
  }
  function showAllCategory() {
    props.setCategoryID(undefined);
    document
      .getElementsByClassName("checkedLi")[0]
      .classList.remove("checkedLi");
    document.getElementById("allCategory").classList.add("checkedLi");
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
      <button id="others" onClick={() => showAllCategory()}>
        Diğer
      </button>
    </ul>
  );
}

export default Category;
