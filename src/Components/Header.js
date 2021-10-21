import React from "react";
import "./Header.scss";
import Logo from "../Assets/Logo.png";
import Add from "../Assets/Add-product.png";
import Profile from "../Assets/Profile.png";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { connect } from "react-redux";

function Header({ isAuth }) {
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
  useEffect(() => {
    if (isAuth) {
      document.getElementById("myAccountButton").classList.remove("d-none");
      document.getElementById("loginButton").classList.add("d-none");
    } else {
      document.getElementById("myAccountButton").classList.add("d-none");
      document.getElementById("loginButton").classList.remove("d-none");
      document.getElementById("addProductButton").classList.add("d-none");
    }
  });
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
          <button id="addProductButton" onClick={() => goAddProduct()}>
            <img src={Add} alt=""></img>
            <p>Ürün Ekle</p>
          </button>
          <button id="loginButton" onClick={() => goLogin()}>
            <img src={Profile} alt=""></img>
            <p>Giriş Yap</p>
          </button>
          <button
            id="myAccountButton"
            className="d-none"
            onClick={() => goMyAccount()}
          >
            <img src={Profile} alt=""></img>
            <p>Hesabım</p>
          </button>
        </div>
      </div>
    </header>
  );
}
const mapStatetoProps = (state) => ({
  isAuth: state.isAuth,
});
export default connect(mapStatetoProps)(Header);
