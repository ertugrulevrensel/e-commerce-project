import React, { useState, useEffect } from "react";
import "./Account.scss";
import profile from "../../Assets/Profile-image.webp";
import GivenOffer from "../../Components/offerList/givenOfferList";
import Header from "../../Components/header";
import ReceivedOffer from "../../Components/offerList/receivedOfferList";
import succes from "../../Assets/succes.webp";
import fail from "../../Assets/fail.webp";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  getReceivedOfferList,
  getGivenOfferList,
  setLoading,
} from "../../actions";

function Account({
  email,
  isAuth,
  getReceivedOfferList,
  getGivenOfferList,
  token,
  loading,
  setLoading,
}) {
  const [getStatus, setStatus] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (!isAuth) {
      //if not is auth, go home
      history.push("/");
    }
    if (isAuth) {
      //if is auth, call given and received function
      setLoading(true);
      getReceivedOfferList(token);
      getGivenOfferList(token);
    }
  }, []); //eslint-disable-line

  function selectList(list) {
    //fetch selected list
    if (list === "received") {
      //if select received, fetch received list
      document
        .getElementById("receivedOfferListButton")
        .classList.add("selectedList");
      document
        .getElementById("givenOfferListButton")
        .classList.remove("selectedList");
      document.getElementById("givenOffers").classList.add("d-none");
      document.getElementById("receivedOffers").classList.remove("d-none");
    } else {
      //if select given, fetch given list
      document
        .getElementById("receivedOfferListButton")
        .classList.remove("selectedList");
      document
        .getElementById("givenOfferListButton")
        .classList.add("selectedList");
      document.getElementById("givenOffers").classList.remove("d-none");
      document.getElementById("receivedOffers").classList.add("d-none");
    }
  }

  return (
    <div>
      <Header />
      <div className="width80">
        <div className="d-flex profileDetail whiteBackground border-r-8 align-center">
          <img src={profile} alt=""></img>
          <p>{email}</p>
        </div>
        <div className="whiteBackground offersArea">
          <div className="d-flex offerListButton">
            <div
              onClick={() => selectList("received")}
              id="receivedOfferListButton"
              className="selectedList c-pointer"
            >
              <p>Teklif Aldıklarım</p>
            </div>
            <div
              onClick={() => selectList("given")}
              id="givenOfferListButton"
              className="c-pointer"
            >
              <p>Teklif Verdiklerim</p>
            </div>
          </div>
          {loading === true ? (
            <div className="spinner"></div>
          ) : (
            <>
              <ReceivedOffer setStatus={setStatus} />
              <GivenOffer setStatus={setStatus} />
            </>
          )}
        </div>
        <div
          id="succesBuy"
          className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
        >
          <img src={succes} alt=""></img>
          <p>{getStatus}</p>
        </div>
        <div
          id="failAcceptOffer"
          className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
        >
          <img src={fail} alt=""></img>
          <p>{getStatus}</p>
        </div>
      </div>
    </div>
  );
}
const mapStatetoProps = (state) => ({
  isAuth: state.isAuth,
  email: state.email,
  token: state.token,
  loading: state.loading,
});
export default connect(mapStatetoProps, {
  getReceivedOfferList,
  getGivenOfferList,
  setLoading,
})(Account);
