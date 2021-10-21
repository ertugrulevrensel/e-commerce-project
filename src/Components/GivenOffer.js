import React, { useEffect } from "react";
import BuyModal from "./BuyModal";
import { connect } from "react-redux";
import { getGivenOfferList } from "../actions";

function GivenOffer(props) {
  function toggleBuy() {
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  return (
    <div id="givenOffers" className="d-none">
      {props.givenOfferList?.map((offer) => {
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
              !offer.product.isSold &&
              offer.product.isOfferable &&
              !(offer.isSold === "sold") &&
              !props.product?.isSold ? (
                <div className="d-flex receivedOfferButton align-center">
                  <p className="color4b9ce2">Onaylandı</p>
                  <button
                    onClick={() => toggleBuy()}
                    className="bg4b9ce2 colorf0f8ff border-r-8"
                  >
                    Satın Al
                  </button>
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
            <BuyModal product={offer.product} setStatus={props.setStatus} />
          </div>
        );
      })}
    </div>
  );
}
const mapStatetoProps = (state) => ({
  givenOfferList: state.givenOfferList,
  token: state.token,
  product: state.product,
});
export default connect(mapStatetoProps, { getGivenOfferList })(GivenOffer);
