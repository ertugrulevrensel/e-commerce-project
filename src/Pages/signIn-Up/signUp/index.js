import React from "react";
import "../SignIn-Up.scss";
import img from "../../../Assets/Login-reg.webp";
import Logo from "../../../Assets/Logo2.webp";
import fail from "../../../Assets/fail.webp";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setIsAuth, setToken, setEmail, signUpProcess } from "../../../actions";

function SignUp({ setIsAuth, setToken, setEmail, isAuth, signUpProcess }) {
  function signUps() {
    //get email and password
    var data = {
      email: document.getElementById("signUpMail").value,
      password: document.getElementById("signUpPass").value,
    };
    //email and password validation
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      re.test(String(data.email).toLowerCase()) &&
      data.password.length >= 8 &&
      data.password.length <= 20
    ) {
      //sign up process
      signUpProcess(data)
        .then((response) => {
          //if response is success, redirect home and set is auth true
          document.getElementById("repetitive").classList.add("d-none");
          document.getElementById("unValid").classList.add("d-none");
          setIsAuth(true);
          setEmail(data.email);
          setToken(response.data.access_token);
          goHome();
        })
        .catch((err) => {
          //if response is fail, show fail notification
          document.getElementById("repetitive").classList.remove("d-none");
          setTimeout(() => {
            document.getElementById("repetitive").classList.add("d-none");
          }, 3000);
          document.getElementById("unValid").classList.add("d-none");
          document.getElementById("signUpMail").classList.add("inputErr");
          document.getElementById("signUpPass").classList.add("inputErr");
        });
    } else {
      document.getElementById("unValid").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("unValid").classList.add("d-none");
      }, 3000);
      document.getElementById("repetitive").classList.add("d-none");
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
  function goLogin() {
    //if click login, go login page
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
            <button onClick={() => signUps()} className="full-w">
              Üye Ol
            </button>
            <p>
              Hesabın var mı? {/* eslint-disable-next-line */}
              <a className="c-pointer" onClick={() => goLogin()}>
                <b>Giriş Yap</b>
              </a>
            </p>
          </div>
        </div>
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

const mapStatetoProps = (state) => ({
  token: state.token,
  isAuth: state.isAuth,
  email: state.email,
});
export default connect(mapStatetoProps, {
  setIsAuth,
  setToken,
  setEmail,
  signUpProcess,
})(SignUp);
