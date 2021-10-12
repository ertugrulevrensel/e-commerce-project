import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ProductDetail from "./Pages/ProductDetail";
import React, { useState, useEffect } from "react";
import AddProduct from "./Pages/AddProduct";
import Account from "./Pages/Account";
function App() {
  const [getID, setID] = useState();
  const [getProductList, setProductList] = useState([]);
  const [getCategory, setCategory] = useState([]);
  const [getColor, setColor] = useState([]);
  const [getBrand, setBrand] = useState([]);
  const [getStatus, setStatus] = useState([]);
  useEffect(() => {
    // get all product and set product state
    fetch("http://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
    //get all categories and set category state
    fetch("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      });
    // //get all colors and set color state
    // fetch("http://bootcampapi.techcs.io/api/fe/v1/detail/color/all")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setColor(data);
    //   });
    // //get all brands and set brand state
    // fetch("http://bootcampapi.techcs.io/api/fe/v1/detail/brand/all")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setBrand(data);
    //   });
    // //get all status and set status state
    // fetch("http://bootcampapi.techcs.io/api/fe/v1/detail/status/all")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setStatus(data);
    //   });
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home
            getID={getID}
            setID={setID}
            getProductList={getProductList}
            setProductList={setProductList}
            category={getCategory}
          />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/myaccount/">
          <Account
            getID={getID}
            setID={setID}
            getProductList={getProductList}
            setProductList={setProductList}
          />
        </Route>
        <Route path="/product/">
          <ProductDetail
            getID={getID}
            setID={setID}
            getProductList={getProductList}
            setProductList={setProductList}
          />
        </Route>
        <Route path="/addproduct">
          <AddProduct
            category={getCategory}
            color={getColor}
            brand={getBrand}
            status={getStatus}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
