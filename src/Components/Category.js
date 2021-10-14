import React from "react";
import "../Category.css";

function Category(props) {
  return (
    <ul className="category d-flex space-between">
      <li className="checkedLi">Hepsi</li>
      {props.category.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
      <li>Diğer</li>
    </ul>
  );
}

export default Category;
