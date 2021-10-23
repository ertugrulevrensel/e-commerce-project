import React, { useEffect } from "react";
import "./Category.scss";
import { connect } from "react-redux";
import { getCategory, setCategoryID } from "../actions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
function Category({ categorys, getCategory, setCategoryID }) {
  let { categoryid } = useParams();
  let history = useHistory();
  useEffect(() => {
    getCategory();
  }, []); //eslint-disable-line
  function settedCategoryID(id) {
    setCategoryID(id);
    for (let i = 0; i < categorys.length; i++) {
      if (categorys[i].id === id) {
        history.push(`${id}`);
      }
    }
  }
  function showAllCategory() {
    setCategoryID("");
    history.push("/");
  }
  return (
    <ul className="category d-flex space-between">
      <button id="allCategory" onClick={() => showAllCategory()}>
        Hepsi
      </button>
      {categorys.map((item) => {
        return (
          <button
            id={item.id}
            className={
              categoryid === item.id ? "c-pointer checkedLi" : "c-pointer"
            }
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
});

export default connect(mapStatetoProps, { getCategory, setCategoryID })(
  Category
);
