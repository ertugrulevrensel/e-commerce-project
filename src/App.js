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
  const [getIsOauth, setIsOauth] = useState(false);
  const [getToken, setToken] = useState("");
  const [getEmail, setEmail] = useState();
  const [getID, setID] = useState();
  const [getProductList, setProductList] = useState([]);
  const [getCategory, setCategory] = useState([]);
  const [getColor, setColor] = useState([]);
  const [getBrand, setBrand] = useState([]);
  const [getStatus, setStatus] = useState([]);

  useEffect(() => {
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
  }, []);
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
            getIsOauth={getIsOauth}
          />
        </Route>
        <Route path="/login">
          <SignIn
            getIsOauth={getIsOauth}
            setIsOauth={setIsOauth}
            setEmail={setEmail}
            setToken={setToken}
          />
        </Route>
        <Route path="/register">
          <SignUp
            getIsOauth={getIsOauth}
            setIsOauth={setIsOauth}
            setEmail={setEmail}
            setToken={setToken}
          />
        </Route>
        <Route path="/myaccount/">
          <Account
            getProductList={getProductList}
            setProductList={setProductList}
            getIsOauth={getIsOauth}
            getEmail={getEmail}
            getToken={getToken}
          />
        </Route>
        <Route path="/product/">
          <ProductDetail
            getID={getID}
            setID={setID}
            getProductList={getProductList}
            setProductList={setProductList}
            getIsOauth={getIsOauth}
            getToken={getToken}
          />
        </Route>
        <Route path="/addproduct">
          <AddProduct
            category={getCategory}
            color={getColor}
            setColor={setColor}
            brand={getBrand}
            setBrand={setBrand}
            status={getStatus}
            setStatus={setStatus}
            getIsOauth={getIsOauth}
            getToken={getToken}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
