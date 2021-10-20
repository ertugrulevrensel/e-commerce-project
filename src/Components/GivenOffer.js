import React, { useEffect } from "react";
import BuyModal from "./BuyModal";

function GivenOffer(props) {
  useEffect(() => {
    console.log("given");
    fetch("https://bootcampapi.techcs.io/api/fe/v1/account/given-offers", {
      // withCredentials: true,
      headers: { Authorization: `Bearer ${props.getToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        props.setGivenOffer(data);
      });
  }, []);
  function toggleBuy() {
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  return (
    <div id="givenOffers" className="d-none">
      {props.getGivenOffer.map((offer) => {
        return (
          <div
            key={offer.id}
            className="receivedOffer border-r-8 d-flex full-w"
          >
            <div className="d-flex full-w">
              <img src={offer.product.imageUrl} alt=""></img>
              <div className="pad15">
                <p>{offer.product.title}</p>
                <div className="receivedOfferValue grayBackground border-r-8">
                  <p>
                    Verilen Teklif:{" "}
                    <b>{Number(offer.offeredPrice.toFixed(2))}</b>
                  </p>
                </div>
              </div>
            </div>
            {offer.status === "offered" ? (
              <div className="d-flex receivedOfferButton align-center">
                <p className="color4b9ce2">Teklif Verildi</p>
              </div>
            ) : offer.status === "accepted" ? (
              !offer.product.isSold && offer.product.isOfferable ? (
                <div className="d-flex receivedOfferButton align-center">
                  <p className="color4b9ce2">Onaylandı</p>
                  <button
                    onClick={() => toggleBuy()}
                    className="bg4b9ce2 colorf0f8ff border-r-8"
                  >
                    Satın Al
                  </button>
                  <BuyModal
                    product={offer.product}
                    getToken={props.getToken}
                    setStatus={props.setStatus}
                  />
                </div>
              ) : (
                <div className="d-flex receivedOfferButton align-center">
                  <p className="color46af32">Satın Alındı</p>
                </div>
              )
            ) : (
              <div className="d-flex receivedOfferButton align-center">
                <p className="colorf77474">Reddedildi</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GivenOffer;
