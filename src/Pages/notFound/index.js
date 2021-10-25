import React from "react";
import Header from "../../Components/header";
import { useHistory } from "react-router-dom";

function NotFound() {
  let history = useHistory();
  function goHome() {
    history.push("/");
  }
  return (
    <>
      <Header />
      <div className="d-flex full-w align-center justify-center">
        <p>
          Aradığınız sayfa bulunamadı.{" "}
          <b className="c-pointer color4b9ce2" onClick={() => goHome()}>
            Anasayfaya
          </b>{" "}
          dönebilirsiniz.
        </p>
      </div>
    </>
  );
}

export default NotFound;
