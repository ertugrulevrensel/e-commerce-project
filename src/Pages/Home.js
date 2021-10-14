import React from "react";
import "../Home.css";
import Header from "../Components/Header";
import Banner from "../Assets/Banner.png";
import Category from "../Components/Category";
import ProductList from "../Components/ProductList";

function Home(props) {
  return (
    <div className="full-w grayBackground">
      <Header getIsOauth={props.getIsOauth} />
      <div className="width80 homeBody">
        <div className="banner border-r-8">
          <img src={Banner} alt=""></img>
        </div>
        <Category category={props.category} />
        <ProductList
          getID={props.getID}
          setID={props.setID}
          getProductList={props.getProductList}
          setProductList={props.setProductList}
        />
      </div>
    </div>
  );
}

export default Home;
