import React from "react";
import "./Home.scss";
import Header from "../Components/Header";
import Banner from "../Assets/Banner.png";
import Category from "../Components/Category";
import ProductList from "../Components/ProductList";
function Home() {
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
