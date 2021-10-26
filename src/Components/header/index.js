import React from "react";
import "./Header.scss";
import Logo from "../../Assets/Logo.webp";
import Add from "../../Assets/Add-product.webp";
import Profile from "../../Assets/Profile.webp";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { connect } from "react-redux";

function Header({ isAuth }) {
  let history = useHistory();
  function goHome() {
    //if click logo, go home page
    history.push("/");
  }
  function goLogin() {
    //if login button, go login page
    history.push("/login");
  }
  function goAddProduct() {
    //if add product button, go add product page
    history.push("/addproduct");
  }
  function goMyAccount() {
    //if myaccount button, go myaccount page
    history.push("/myaccount/");
  }
  useEffect(() => {
    if (isAuth) {
      //if not is auth, show only login button in header
      document.getElementById("myAccountButton").classList.remove("d-none");
      document.getElementById("loginButton").classList.add("d-none");
    } else {
      //if is auth, show myaccount and add product button in header
      document.getElementById("myAccountButton").classList.add("d-none");
      document.getElementById("loginButton").classList.remove("d-none");
      document.getElementById("addProductButton").classList.add("d-none");
    }
  }, ""); //eslint-disable-line
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
