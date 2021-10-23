import React, { useEffect } from "react";
import "./Home.scss";
import Header from "../Components/Header";
import Banner from "../Assets/Banner.png";
import Category from "../Components/Category";
import ProductList from "../Components/ProductList";
import { useParams } from "react-router-dom";
function Home() {
  let { categoryid } = useParams();
  useEffect(() => {
    if (categoryid === undefined) {
      document
        .getElementsByClassName("checkedLi")[0]
        ?.classList.remove("checkedLi");
      document.getElementById("allCategory").classList.add("checkedLi");
    } else {
      document
        .getElementsByClassName("checkedLi")[0]
        ?.classList.remove("checkedLi");
      document.getElementById(`${categoryid}`)?.classList.add("checkedLi");
    }
  }, [categoryid]);
  return (
    <div className="full-w">
      <Header />
      <div className="width80 homeBody">
        <div className="banner border-r-8">
          <img src={Banner} alt=""></img>
        </div>
        <Category />
        <ProductList />
      </div>
    </div>
  );
}
export default Home;
