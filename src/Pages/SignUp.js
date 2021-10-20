import React from "react";
import "./SignIn-Up.scss";
import img from "../Assets/Login-reg.png";
import Logo from "../Assets/Logo2.png";
import fail from "../Assets/fail.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

function SignUp(props) {
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
      axios
        .post(
          "https://bootcampapi.techcs.io/api/fe/v1/authorization/signup",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          document.getElementById("repetitive").classList.add("d-none");
          document.getElementById("unValid").classList.add("d-none");
          props.setIsOauth(true);
          props.setEmail(data.email);
          props.setToken(response.data.access_token);
          goHome();
        })
        .catch((err) => {
          document.getElementById("repetitive").classList.remove("d-none");
          document.getElementById("unValid").classList.add("d-none");
          document.getElementById("signUpMail").classList.add("inputErr");
          document.getElementById("signUpPass").classList.add("inputErr");
        });
    } else {
      document.getElementById("unValid").classList.remove("d-none");
      document.getElementById("repetitive").classList.add("d-none");
    }
  }
  let history = useHistory();
  if (props.getIsOauth) {
    history.push("/");
  }
  function goHome() {
    history.push("/");
  }
  function goLogin() {
    history.push("/login");
  }
  return (
    <>
      <div className="d-flex registerImg">
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
              <b>Üye Ol</b>
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
                <b>Giriş Yap</b>
              </a>
            </p>
          </div>
        </div>
        {/* <div
          id="failSign"
          className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
        >
          <img src={fail} alt=""></img>
          <p>Emailiniz veya şifreniz hatalı.</p>
        </div> */}
        <div
          id="repetitive"
          className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
        >
          <img src={fail} alt=""></img>
          <p>Kullanıcı zaten kayıtlı.</p>
        </div>
        <div
          id="unValid"
          className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
        >
          <img src={fail} alt=""></img>
          <p>Geçerli email ve şifre giriniz.</p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
