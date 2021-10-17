import React, { useEffect, useState } from "react";
import "../Home.css";
import Header from "../Components/Header";
import Banner from "../Assets/Banner.png";
import Category from "../Components/Category";
import ProductList from "../Components/ProductList";

function Home(props) {
  const [getCategoryID, setCategoryID] = useState();
  useEffect(() => {
    fetch("http://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => response.json())
      .then((data) => {
        if (getCategoryID === undefined) {
          props.setProductList(data);
        } else {
          var categoryFilter = [];
          data.map((item) => {
            if (item.category.id === getCategoryID) {
              categoryFilter.push(item);
            }
          });
          props.setProductList(categoryFilter);
          console.log(categoryFilter);
        }
      });
    console.log("syc");
  }, [getCategoryID]); //eslint-disable-line
  return (
    <div className="full-w">
      <Header getIsOauth={props.getIsOauth} />
      <div className="width80 homeBody">
        <div className="banner border-r-8">
          <img src={Banner} alt=""></img>
        </div>
        <Category category={props.category} setCategoryID={setCategoryID} />
        <ProductList
          getID={props.getID}
          setID={props.setID}
          getProductList={props.getProductList}
          setProductList={props.setProductList}
          getProduct={props.getProduct}
          setProduct={props.setProduct}
          setCancelOfferID={props.setCancelOfferID}
          getToken={props.getToken}
        />
      </div>
    </div>
  );
}

export default Home;
