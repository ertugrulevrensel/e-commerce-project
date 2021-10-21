import React, { useState, useEffect } from "react";
import "./Account.scss";
import profile from "../Assets/Profile-image.png";
import GivenOffer from "../Components/GivenOffer";
import Header from "../Components/Header";
import ReceivedOffer from "../Components/ReceivedOffer";
import succes from "../Assets/succes.png";
import fail from "../Assets/fail.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getReceivedOfferList, getGivenOfferList } from "../actions";

function Account({
  email,
  isAuth,
  getReceivedOfferList,
  getGivenOfferList,
  token,
}) {
  // const [getGivenOffer, setGivenOffer] = useState([]);
  // const [getReceivedOffer, setReceivedOffer] = useState([]);
  const [getStatus, setStatus] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (!isAuth) {
      history.push("/");
    }
    getReceivedOfferList(token);
    getGivenOfferList(token);
  }, []); //eslint-disable-line

  function selectList(list) {
    if (list === "received") {
      document
        .getElementById("receivedOfferListButton")
        .classList.add("selectedList");
      document
        .getElementById("givenOfferListButton")
        .classList.remove("selectedList");
      document.getElementById("givenOffers").classList.add("d-none");
      document.getElementById("receivedOffers").classList.remove("d-none");
    } else {
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
          <ReceivedOffer setStatus={setStatus} />
          <GivenOffer setStatus={setStatus} />
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
});
export default connect(mapStatetoProps, {
  getReceivedOfferList,
  getGivenOfferList,
})(Account);
