import React from "react";
import "../SignIn-Up.css";
import img from "../Assets/Login-reg.png";
import Logo from "../Assets/Logo2.png";
import { useHistory } from "react-router-dom";

function SignUp() {
  let history = useHistory();
  function goHome() {
    history.push("/");
  }
  function goLogin() {
    history.push("/login");
  }
  return (
    <>
      <div className="d-flex registerImg grayBackground">
        <img src={img} alt=""></img>
        <div className="full-w d-flex align-center justify-center flex-d-col">
          <div className="logo">
            <img
              onClick={() => goHome()}
              className="c-pointer"
              src={Logo}
              alt=""
            ></img>
          </div>
          <div className="d-flex flex-d-col login align-center">
            <div className="d-flex align-center flex-d-col">
              <h3>Üye Ol</h3>
              <p>Fırsatlardan yararlanmak için üye ol!</p>
            </div>
            <div className="logInput full-w">
              <p>Email</p>
              <input
                type="text"
                placeholder="Email@example.com"
                minLength="8"
                maxLength="20"
                required
              ></input>
              <p>Şifre</p>
              <input type="password" placeholder="•••••"></input>
            </div>
            <button className="full-w">Üye Ol</button>
            <p>
              Hesabın var mı?{" "}
              <a className="c-pointer" onClick={() => goLogin()}>
                Giriş Yap
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
