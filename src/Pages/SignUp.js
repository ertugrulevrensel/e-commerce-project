import React from "react";
import "../SignIn-Up.css";
import img from "../Assets/Login-reg.png";
import Logo from "../Assets/Logo2.png";
import fail from "../Assets/fail.png";
import { useHistory } from "react-router-dom";

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
      fetch("http://bootcampapi.techcs.io/api/fe/v1/authorization/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        response.json();
        if (response.status === 409) {
          document.getElementById("repetitive").classList.remove("d-none");
          document.getElementById("unValid").classList.add("d-none");
        } else {
          document.getElementById("repetitive").classList.add("d-none");
          document.getElementById("unValid").classList.add("d-none");
          props.setIsOauth(true);
          props.setEmail(data.email);
          props.setToken(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVydHVncnVsZXZyZW5zZWxAZ21haWwuY29tIiwiaWQiOiJNbW54TUNHTGUxV2Fjb0NuV2ZnTCIsImlhdCI6MTYzNDEzODY3MH0.7gm4kn4GHvvvY2VPTLhDapF15f_DEXF0UKanTqFTiCA"
          );
          goHome();
        }
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
