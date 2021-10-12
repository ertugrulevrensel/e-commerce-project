import React from "react";
import "../SignIn-Up.css";
import img from "../Assets/Login-reg.png";
import Logo from "../Assets/Logo2.png";
import { useHistory } from "react-router-dom";

function SignIn() {
  function signInProcess() {
    var data = {
      email: document.getElementById("signInMail").value,
      password: document.getElementById("signInPass").value,
    };
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      re.test(String(data.email).toLowerCase()) &&
      data.password.length >= 8 &&
      data.password.length <= 20
    ) {
      console.log("s");
      fetch("http://bootcampapi.techcs.io/api/fe/v1/authorization/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          response.json();
          console.log(response);
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("a");
    }
  }
  let history = useHistory();
  function goHome() {
    history.push("/");
  }
  function goRegister() {
    history.push("/register");
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
          <div className="d-flex flex-d-col login border-r-8 align-center">
            <div className="d-flex align-center flex-d-col">
              <h3>Giriş Yap</h3>
              <p>Fırsatlardan yararlanmak için giriş yap!</p>
            </div>
            <div className="logInput full-w">
              <p>Email</p>
              <input
                id="signInMail"
                type="text"
                placeholder="Email@example.com"
              ></input>
              <p>Şifre</p>
              <input
                id="signInPass"
                type="password"
                placeholder="•••••"
              ></input>
            </div>
            <button onClick={() => signInProcess()} className="full-w">
              Giriş Yap
            </button>
            <p>
              Hesabın yok mu?{" "}
              <a className="c-pointer" onClick={() => goRegister()}>
                Üye Ol
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
