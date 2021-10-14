import React, { useState, useEffect } from "react";
import "../Account.css";
import profile from "../Assets/Profile-image.png";
import Header from "../Components/Header";

function Account(props) {
  const [getGivenOffer, setGivenOffer] = useState([]);
  const [getReceivedOffer, setReceivedOffer] = useState([]);

  useEffect(() => {
    fetch("http://bootcampapi.techcs.io/api/fe/v1/account/given-offers", {
      headers: { Authorization: `Bearer ${props.getToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGivenOffer(data);
      });

    fetch("http://bootcampapi.techcs.io/api/fe/v1/account/received-offers", {
      headers: { Authorization: `Bearer ${props.getToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReceivedOffer(data);
      });
    console.log("rec:", getReceivedOffer);
    console.log("giv:", getGivenOffer);
  }, []);

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
  function receivedOfferAccept(id1, id2, id4) {
    document.getElementById(id2).classList.add("d-none");
    document.getElementById(id1).classList.add("d-none");
    document.getElementById(id4).classList.remove("d-none");
  }
  function receivedOfferReject(id1, id2, id3) {
    document.getElementById(id2).classList.add("d-none");
    document.getElementById(id1).classList.add("d-none");
    document.getElementById(id3).classList.remove("d-none");
  }
  return (
    <div className="grayBackground">
      <Header getIsOauth={props.getIsOauth} />
      <div className="d-flex profileDetail whiteBackground border-r-8 width80 align-center">
        <img src={profile} alt=""></img>
        <p>{props.getEmail}</p>
      </div>
      <div className="width80 whiteBackground offersArea">
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
        <div id="givenOffers" className="d-none">
          {getGivenOffer.map((offer) => {
            return (
              <div
                key={offer.id}
                className="receivedOffer border-r-8 d-flex full-w"
              >
                <img src={offer.product.imageUrl} alt=""></img>
                <div className="justify-center d-flex flex-d-col">
                  <p>{offer.product.title}</p>
                  <div className="receivedOfferValue grayBackground border-r-8">
                    <p>
                      Verilen Teklif: <b>{offer.offeredPrice}</b>
                    </p>
                  </div>
                </div>
                <div className="d-flex receivedOfferButton align-center">
                  {offer.status === "offered" ? (
                    <p className="color4b9ce2">Teklif Verildi</p>
                  ) : offer.status === "accepted" ? (
                    <div>
                      <p className="color4b9ce2">Onaylandı</p>
                      <button className="bg4b9ce2 colorf0f8ff border-r-8">
                        Satın Al
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="colorf77474">Reddedildi</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div id="receivedOffers">
          {getReceivedOffer.map((offer) => {
            return (
              <div
                key={offer.id}
                className="receivedOffer border-r-8 d-flex full-w"
              >
                <img src={offer.product.imageUrl} alt=""></img>
                <div className="justify-center d-flex flex-d-col">
                  <p>{offer.product.title}</p>
                  <div className="receivedOfferValue grayBackground border-r-8">
                    <p>
                      Verilen Teklif: <b>{offer.offeredPrice}</b>
                    </p>
                  </div>
                </div>
                <div className="d-flex receivedOfferButton align-center">
                  <button
                    id={offer.id + 1}
                    onClick={() =>
                      receivedOfferAccept(
                        offer.id + 1,
                        offer.id + 2,
                        offer.id + 4
                      )
                    }
                    className="bg4b9ce2 colorf0f8ff border-r-8"
                  >
                    Onayla
                  </button>
                  <button
                    id={offer.id + 2}
                    onClick={() =>
                      receivedOfferReject(
                        offer.id + 1,
                        offer.id + 2,
                        offer.id + 3
                      )
                    }
                    className="colorf0f8ff border-r-8 bgf77474"
                  >
                    Reddet
                  </button>
                  <p id={offer.id + 3} className="d-none colorf77474">
                    Reddedildi
                  </p>
                  <p id={offer.id + 4} className="d-none color4b9ce2">
                    Onaylandı
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Account;
