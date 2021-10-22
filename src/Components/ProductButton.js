import axios from "axios";
import React, { useState, useEffect } from "react";
import succes from "../Assets/succes.png";
import fail from "../Assets/fail.png";
import OfferModal from "./OfferModal";
import BuyModal from "./BuyModal";
import CancelModal from "./CancelModal";
import { connect } from "react-redux";
import { getGivenOfferList } from "../actions";

function ProductButton({ product, getGivenOfferList, givenOfferList, token }) {
  const [getofferValue, setOfferValue] = useState("-1");
  const [getStatus, setStatus] = useState();
  const [getProductState, setProduct] = useState([]);
  useEffect(() => {
    axios(
      `https://bootcampapi.techcs.io/api/fe/v1/product/${
        window.location.href.split("/")[4]
      }`
    ).then((response) => setProduct(response.data));
    if (token.length > 0) {
      getGivenOfferList(token);
    }
    if (Number(getofferValue) > 0) {
      document.getElementById("buyButton").classList.remove("d-none");
      document.getElementById("backOfferButton").classList.remove("d-none");
      document.getElementById("offerButtonn").classList.add("d-none");
      document.getElementById("notSaleDiv").classList.add("d-none");
    } else if (Number(getofferValue) === 0) {
      document.getElementById("buyButton").classList.remove("d-none");
      document.getElementById("backOfferButton").classList.add("d-none");
      document.getElementById("offerButtonn").classList.remove("d-none");
      document.getElementById("notSaleDiv").classList.add("d-none");
    }
  }, ""); // eslint-disable-line
  function cancelOffered() {
    document.getElementById("cancelModal").classList.toggle("d-none");
  }
  function toggleOffer() {
    document.getElementById("offerModal").classList.toggle("d-none");
  }
  function toggleBuy() {
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  return (
    <div className="responsiveButton">
      {!product?.isSold && product?.isOfferable ? (
        <div>
          <div
            id="offeredValuediv"
            className="d-none grayBackground d-flex semi-w border-r-8"
          >
            <p>
              Verilen Teklif:{" "}
              <b>
                {
                  givenOfferList?.filter(
                    (offer) => offer.product.id === product.id
                  )[0]?.offeredPrice
                }
              </b>
            </p>
          </div>
          <div className="d-flex productButton margin30">
            <button
              id="buyButton"
              onClick={() => toggleBuy()}
              className="productBuyButton full-w border-r-8"
            >
              Satın Al
            </button>
            {givenOfferList.filter((offer) => offer.product.id === product.id)
              .length ? (
              <button
                id="backOfferButton"
                onClick={() => cancelOffered()}
                className="productOfferButton full-w border-r-8"
              >
                Teklifi Geri Çek
              </button>
            ) : (
              <button
                id="offerButtonn"
                onClick={() => toggleOffer()}
                className="productOfferButton full-w border-r-8"
              >
                Teklif Ver
              </button>
            )}
          </div>
        </div>
      ) : product?.isSold ? (
        <div id="notSalediv" className="notOnSale semi-w border-r-8">
          Bu Ürün Satışta Değil
        </div>
      ) : !product?.isOfferable ? (
        <div className="d-flex productButton margin30">
          <button
            onClick={() => toggleBuy()}
            className="productBuyButton semi-w border-r-8"
          >
            Satın Al
          </button>
        </div>
      ) : null}
      <OfferModal
        setOfferValue={setOfferValue}
        product={getProductState}
        setStatus={setStatus}
      />
      <BuyModal product={getProductState} setStatus={setStatus} />
      <CancelModal
        setStatus={setStatus}
        setOfferValue={setOfferValue}
        product={getProductState}
      />
      {/* <div
        id="failCancelOffer"
        className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
      >
        <img src={fail} alt=""></img>
        <p>{getStatus}</p>
      </div>
      <div
        id="succesCancel"
        className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
      >
        <img src={succes} alt=""></img>
        <p>{getStatus}</p>
      </div> */}
      <div
        id="failSignBuy"
        className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
      >
        <img src={fail} alt=""></img>
        <p>{getStatus}</p>
      </div>
      <div
        id="succesBuys"
        className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
      >
        <img src={succes} alt=""></img>
        <p>{getStatus}</p>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  product: state.product,
  givenOfferList: state.givenOfferList,
  token: state.token,
});

export default connect(mapStatetoProps, { getGivenOfferList })(ProductButton);
