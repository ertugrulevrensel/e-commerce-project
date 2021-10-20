import axios from "axios";
import React, { useState, useEffect } from "react";
import OfferModal from "./OfferModal";
import BuyModal from "./BuyModal";

function ProductButton(props) {
  // const [isGivenOffer, setIsGivenOffer] = useState(false);
  const [isProductSold, setIsProductSold] = useState("false");
  const [getofferValue, setOfferValue] = useState("-1");
  useEffect(() => {
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
  function cancelOffer() {
    axios
      .delete(
        `https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${props.getCancelOfferID}`,
        {
          headers: {
            Authorization: `Bearer ${props.getToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          document.getElementById("succesBuy").classList.remove("d-none");
          document.getElementById("failCancelOffer").classList.add("d-none");
          document.getElementById("offeredValuediv").classList.add("d-none");
          props.setStatus("Teklif Geri Çeklidi.");
          props.setOfferValue("0");
        } else if (response.status === 401) {
          document.getElementById("failCancelOffer").classList.remove("d-none");
          document.getElementById("succesBuy").classList.add("d-none");
          props.setStatus("Lütfen Giriş Yapınız.");
        } else {
          document.getElementById("failCancelOffer").classList.remove("d-none");
          document.getElementById("succesBuy").classList.add("d-none");
          props.setStatus("Teklif Geri Çekme Başarısız.");
        }
      });
  }
  function toggleOffer() {
    document.getElementById("offerModal").classList.toggle("d-none");
  }
  function toggleBuy() {
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  return (
    <div className="responsiveButton">
      {!props.getProduct?.isSold && props.getProduct?.isOfferable ? (
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
            {getofferValue > 0 && !(props.getCancelOfferID === "") ? (
              <button
                id="backOfferButton"
                onClick={() => cancelOffer()}
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
      ) : props.getProduct?.isSold ? (
        <div id="notSalediv" className="notOnSale semi-w border-r-8">
          Bu Ürün Satışta Değil
        </div>
      ) : !props.getProduct?.isOfferable ? (
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
        getID={props.getID}
        getProduct={props.getProduct}
        getIsOauth={props.getIsOauth}
        setOfferValue={setOfferValue}
        getToken={props.getToken}
        setIsProductSold={setIsProductSold}
      />
      <BuyModal
        product={props.getProduct}
        getToken={props.getToken}
        setStatus={props.setStatus}
      />
    </div>
  );
}

export default ProductButton;
