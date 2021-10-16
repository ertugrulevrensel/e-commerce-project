import React, { useEffect } from "react";
import "../Home.css";
import Header from "../Components/Header";
import Banner from "../Assets/Banner.png";
import Category from "../Components/Category";
import ProductList from "../Components/ProductList";

function Home(props) {
  useEffect(() => {
    fetch("http://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => response.json())
      .then((data) => {
        props.setProductList(data);
      });
  }, []); //eslint-disable-line
  return (
    <div className="full-w">
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
          getProduct={props.getProduct}
          setProduct={props.setProduct}
        />
      </div>
    </div>
  );
}

export default Home;
