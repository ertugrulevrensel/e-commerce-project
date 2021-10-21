import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getReceivedOfferList, acceptOffer, rejectOffer } from "../actions";

function ReceivedOffer(
  props,
  { token, getReceivedOfferList, receivedOfferList }
) {
  useEffect(() => {
    getReceivedOfferList(token);
  }, []);
  function receivedOfferAccept(id) {
    acceptOffer(id, token).then((response) => {
      if (response.status === 201 || response.status === 200) {
        document.getElementById("failAcceptOffer").classList.add("d-none");
        document.getElementById("succesBuy").classList.remove("d-none");
        props.setStatus("Teklif Kabul Edildi.");
      } else if (response.status === 401) {
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Lütfen Giriş Yapınız.");
      } else {
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Teklif Kabul Edilemedi.");
      }
    });
  }
  function receivedOfferReject(id) {
    rejectOffer(id, token).then((response) => {
      if (response.status === 201 || response.status === 200) {
        document.getElementById("failAcceptOffer").classList.add("d-none");
        document.getElementById("succesBuy").classList.remove("d-none");
        props.setStatus("Teklif Reddedildi");
      } else if (response.status === 401) {
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Lütfen Giriş Yapınız.");
      } else {
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Teklif Red Edilemedi.");
      }
    });
  }
  return (
    <div id="receivedOffers">
      {receivedOfferList?.map((offer) => {
        return (
          <div
            key={offer.id}
            className="receivedOffer border-r-8 d-flex full-w align-center"
          >
            <div className="d-flex full-w">
              <img src={offer.product.imageUrl} alt=""></img>
              <div className="pad15">
                <p>{offer.product.title}</p>
                <div className="receivedOfferValue d-flex grayBackground border-r-8">
                  <p>
                    Alınan Teklif:{" "}
                    <b>{Number(offer.offeredPrice.toFixed(3))}</b>
                  </p>
                </div>
              </div>
            </div>
            {offer?.status === "offered" && !(offer?.isSold === "sold") ? (
              <div className="d-flex receivedOfferButton align-center">
                <button
                  onClick={() => receivedOfferAccept(offer.id)}
                  className="bg4b9ce2 colorf0f8ff border-r-8"
                >
                  Onayla
                </button>
                <button
                  onClick={() => receivedOfferReject(offer.id)}
                  className="colorf0f8ff border-r-8 bgf77474"
                >
                  Reddet
                </button>
              </div>
            ) : offer?.status === "accepted" || offer?.isSold === "sold" ? (
              <p className="color4b9ce2">Onaylandı</p>
            ) : (
              <p className="colorf77474">Reddedildi</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
const mapStatetoProps = (state) => ({
  receivedOfferList: state.receivedOfferList,
  token: state.token,
});
export default connect(mapStatetoProps, { getReceivedOfferList })(
  ReceivedOffer
);
