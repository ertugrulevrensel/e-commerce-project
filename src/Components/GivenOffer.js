import React, { useState } from "react";
import BuyModal from "./BuyModal";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGivenOfferList } from "../actions";
import fail from "../Assets/fail.webp";
import succes from "../Assets/succes.webp";

function GivenOffer(props) {
  const [status, setStatus] = useState();
  let history = useHistory();
  //if clicked any product name or image, go this product detail page
  function goProductDetail(id) {
    history.push(`/product/${id}`);
  }
  function toggleBuy() {
    //open buy modal when click buy button
    document.getElementById("buyModal").classList.toggle("d-none");
    console.log(props.givenOfferList);
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
              <img
                className="c-pointer border-r-8"
                onClick={() => goProductDetail(offer.product.id)}
                src={offer.product.imageUrl}
                alt=""
              ></img>
              <div className="pad15">
                <p
                  className="c-pointer"
                  onClick={() => goProductDetail(offer.product.id)}
                >
                  {offer.product.title}
                </p>
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
                  <BuyModal product={offer.product} setStatus={setStatus} />
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
      <div
        id="failSignBuy"
        className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
      >
        <img src={fail} alt=""></img>
        <p>{status}</p>
      </div>
      <div
        id="succesBuys"
        className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
      >
        <img src={succes} alt=""></img>
        <p>{status}</p>
      </div>
    </div>
  );
}
const mapStatetoProps = (state) => ({
  givenOfferList: state.givenOfferList,
  token: state.token,
  product: state.product,
});
export default connect(mapStatetoProps, { getGivenOfferList })(GivenOffer);
