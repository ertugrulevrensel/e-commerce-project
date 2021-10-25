import React, { useEffect } from "react";
import "./Category.scss";
import { connect } from "react-redux";
import { getCategory } from "../../actions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
function Category({ categorys, getCategory }) {
  let { categoryid } = useParams();
  let history = useHistory();
  useEffect(() => {
    //call category list
    getCategory();
  }, []); //eslint-disable-line
  function settedCategoryID(id) {
    //if click any category button, go this category url
    for (let i = 0; i < categorys.length; i++) {
      if (categorys[i].id === id) {
        history.push(`/category/${id}`);
      }
    }
  }
  function showAllCategory() {
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

export default connect(mapStatetoProps, { getCategory })(Category);
