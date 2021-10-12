import React from "react";
import "../Header.css";
import Logo from "../Assets/Logo.png";
import Add from "../Assets/Add-product.png";
import Profile from "../Assets/Profile.png";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  function goHome() {
    history.push("/");
  }
  function goLogin() {
    history.push("/login");
  }
  function goAddProduct() {
    history.push("/addproduct");
  }
  function goMyAccount() {
    history.push("/myaccount/");
  }
  return (
    <header>
      <div className="d-flex width80 space-between">
        <img
          onClick={() => goHome()}
          className="c-pointer"
          src={Logo}
          alt=""
        ></img>
        <div className="d-flex headerButtons">
          <button onClick={() => goAddProduct()}>
            <img src={Add} alt=""></img>
            <p>Ürün Ekle</p>
          </button>
          <button onClick={() => goLogin()}>
            <img src={Profile} alt=""></img>
            <p>Giriş Yap</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
