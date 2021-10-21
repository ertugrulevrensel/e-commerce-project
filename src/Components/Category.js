import React, { useEffect } from "react";
import "./Category.scss";
import { connect } from "react-redux";
import { getCategory, setCategoryID } from "../actions";

function Category({ categorys, getCategory, setCategoryID, categoryID }) {
  useEffect(() => {
    getCategory();
  }, []);
  function settedCategoryID(id) {
    //document.getElementById("allCategory").classList.remove("checkedLi");
    setCategoryID(id);
    document.getElementById("allCategory").classList.remove("checkedLi");
    for (let i = 0; i < categorys.length; i++) {
      if (categorys[i].id === id) {
        document.getElementById(id).classList.add("checkedLi");
      } else {
        document.getElementById(categorys[i].id).classList.remove("checkedLi");
      }
    }
  }
  function showAllCategory() {
    setCategoryID(undefined);
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
      {categorys.map((item) => {
        return (
          <button
            id={item.id}
            className="c-pointer"
            onClick={() => settedCategoryID(item.id)}
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

const mapStatetoProps = (state) => ({
  categorys: state.categorys,
  categoryID: state.categoryID,
});

export default connect(mapStatetoProps, { getCategory, setCategoryID })(
  Category
);
