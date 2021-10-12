import React from "react";
import "../SignIn-Up.css";
import img from "../Assets/Login-reg.png";
import Logo from "../Assets/Logo2.png";
import { useHistory } from "react-router-dom";

function SignUp() {
  function signUpProcess() {
    var data = {
      email: document.getElementById("signUpMail").value,
      password: document.getElementById("signUpPass").value,
    };
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      re.test(String(data.email).toLowerCase()) &&
      data.password.length >= 8 &&
      data.password.length <= 20
    ) {
      console.log("s");
      fetch("http://bootcampapi.techcs.io/api/fe/v1/authorization/signup", {
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
                id="signUpMail"
                type="text"
                placeholder="Email@example.com"
              ></input>
              <p>Şifre</p>
              <input
                id="signUpPass"
                type="password"
                placeholder="•••••"
              ></input>
            </div>
            <button onClick={() => signUpProcess()} className="full-w">
              Üye Ol
            </button>
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
