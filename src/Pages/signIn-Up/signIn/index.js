import React from "react";
import "../SignIn-Up.scss";
import img from "../../../Assets/Login-reg.webp";
import fail from "../../../Assets/fail.webp";
import Logo from "../../../Assets/Logo2.webp";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setIsAuth, setToken, setEmail, signInProcess } from "../../../actions";

function SignIn({ setIsAuth, setToken, setEmail, isAuth, signInProcess }) {
  function logIn() {
    //get email and password
    var data = {
      email: document.getElementById("signInMail").value,
      password: document.getElementById("signInPass").value,
    };
    //email and password validation
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      re.test(String(data.email).toLowerCase()) &&
      data.password.length >= 8 &&
      data.password.length <= 20
    ) {
      //sign in process
      signInProcess(data)
        .then((response) => {
          //if response is success, redirect home and set is auth true
          document.getElementById("failSign").classList.add("d-none");
          setIsAuth(true);
          setEmail(data.email);
          setToken(response.data.access_token);
          goHome();
        })
        .catch((err) => {
          //if response is fail, show fail notification
          document.getElementById("failSign").classList.remove("d-none");
          setTimeout(() => {
            document.getElementById("failSign").classList.add("d-none");
          }, 3000);
          document.getElementById("signInMail").classList.add("inputErr");
          document.getElementById("signInPass").classList.add("inputErr");
        });
    } else {
      document.getElementById("failSign").classList.add("d-none");
    }
  }
  let history = useHistory();
  if (isAuth) {
    //if already is auth, automatically redirected home
    history.push("/");
  }
  function goHome() {
    //if click logo, go home page
    history.push("/");
  }
  function goRegister() {
    //if click register, go register page
    history.push("/register");
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
              <b>Giriş Yap</b>
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
            <button onClick={() => logIn()} className="full-w">
              Giriş Yap
            </button>
            <p>
              Hesabın yok mu? {/* eslint-disable-next-line */}
              <a className="c-pointer" onClick={() => goRegister()}>
                <b>Üye Ol</b>
              </a>
            </p>
          </div>
        </div>
        <div
          id="failSign"
          className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
        >
          <img src={fail} alt=""></img>
          <p>Emailiniz veya şifreniz hatalı.</p>
        </div>
      </div>
    </>
  );
}

const mapStatetoProps = (state) => ({
  token: state.token,
  isAuth: state.isAuth,
  email: state.email,
});
export default connect(mapStatetoProps, {
  setIsAuth,
  setToken,
  setEmail,
  signInProcess,
})(SignIn);
