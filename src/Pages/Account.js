import React, { useState, useEffect } from "react";
import "./Account.scss";
import profile from "../Assets/Profile-image.png";
import GivenOffer from "../Components/GivenOffer";
import Header from "../Components/Header";
import ReceivedOffer from "../Components/ReceivedOffer";
import succes from "../Assets/succes.png";
import fail from "../Assets/fail.png";
import { useHistory } from "react-router-dom";

function Account(props) {
  const [getGivenOffer, setGivenOffer] = useState([]);
  const [getReceivedOffer, setReceivedOffer] = useState([]);
  const [getStatus, setStatus] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (!props.getIsOauth) {
      history.push("/");
    }
    // fetch("https://bootcampapi.techcs.io/api/fe/v1/account/given-offers", {
    //   // withCredentials: true,
    //   headers: { Authorization: `Bearer ${props.getToken}` },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setGivenOffer(data);
    //   });

    // fetch("https://bootcampapi.techcs.io/api/fe/v1/account/received-offers", {
    //   headers: { Authorization: `Bearer ${props.getToken}` },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setReceivedOffer(data);
    //   });
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
      <Header getIsOauth={props.getIsOauth} />
      <div className="width80">
        <div className="d-flex profileDetail whiteBackground border-r-8 align-center">
          <img src={profile} alt=""></img>
          <p>{props.getEmail}</p>
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
          <GivenOffer
            getGivenOffer={getGivenOffer}
            setStatus={setStatus}
            getToken={props.getToken}
            setGivenOffer={setGivenOffer}
          />
          <ReceivedOffer
            getReceivedOffer={getReceivedOffer}
            setReceivedOffer={setReceivedOffer}
            setStatus={setStatus}
            getToken={props.getToken}
          />
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

export default Account;
