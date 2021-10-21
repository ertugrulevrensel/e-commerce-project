import axios from "axios";
import React, { useState, useEffect } from "react";
import succes from "../Assets/succes.png";
import fail from "../Assets/fail.png";
import OfferModal from "./OfferModal";
import BuyModal from "./BuyModal";
import { connect } from "react-redux";
import { cancelOffer, getGivenOfferList } from "../actions";

function ProductButton({ product, getGivenOfferList, givenOfferList, token }) {
  // const [isGivenOffer, setIsGivenOffer] = useState(false);
  const [isProductSold, setIsProductSold] = useState("false");
  const [getofferValue, setOfferValue] = useState("-1");
  const [getStatus, setStatus] = useState();
  const [getProduct, setProduct] = useState([]);
  useEffect(() => {
    axios(
      `https://bootcampapi.techcs.io/api/fe/v1/product/${
        window.location.href.split("/")[4]
      }`
    ).then((response) => setProduct(response.data));
    if (token.length > 0) {
      getGivenOfferList();
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
    } else if (isProductSold === "true") {
      document.getElementById("buyButton").classList.add("d-none");
      document.getElementById("backOfferButton").classList.add("d-none");
      document.getElementById("offerButtonn").classList.add("d-none");
      document.getElementById("notSaleDiv").classList.remove("d-none");
    }
    console.log("useEffect probutton");
  }, "");
  function cancelOffered() {
    let cancelID = "";
    givenOfferList.map((item) => {
      if (item.product.id === window.location.href.split("/")[4]) {
        cancelID = item.id;
      }
    });
    cancelOffer(cancelID, token).then((response) => {
      if (response.status === 200 || response.status === 201) {
        document.getElementById("succesBuy").classList.remove("d-none");
        document.getElementById("failCancelOffer").classList.add("d-none");
        document.getElementById("offeredValuediv").classList.add("d-none");
        setStatus("Teklif Geri Çeklidi.");
        setOfferValue("0");
      } else if (response.status === 401) {
        document.getElementById("failCancelOffer").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        setStatus("Lütfen Giriş Yapınız.");
      } else {
        document.getElementById("failCancelOffer").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        setStatus("Teklif Geri Çekme Başarısız.");
      }
    });
    // axios
    //   .delete(
    //     `https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${props.getCancelOfferID}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${props.getToken}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
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
              Verilen Teklif: <b>{getofferValue}</b>
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
            {getofferValue > 0 ? (
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
      <OfferModal setOfferValue={setOfferValue} product={getProduct} />
      <BuyModal product={getProduct} setIsProductSold={setIsProductSold} />
      <div
        id="succesBuy"
        className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
      >
        <img src={succes} alt=""></img>
        <p>{getStatus}</p>
      </div>
      <div
        id="failCancelOffer"
        className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
      >
        <img src={fail} alt=""></img>
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
