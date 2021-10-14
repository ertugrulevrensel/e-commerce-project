import React, { useState, useEffect } from "react";
import "../ProductDetail.css";
import BuyModal from "../Components/BuyModal";
import Header from "../Components/Header";
import OfferModal from "../Components/OfferModal";
import succes from "../Assets/succes.png";

function ProductDetail(props) {
  const [getofferValue, setOfferValue] = useState("0");
  useEffect(() => {
    if (getofferValue !== "0") {
      document
        .getElementsByClassName("offeredValue")[0]
        .classList.remove("d-none");
    }
  });
  var tmp;
  props.getProductList.map((product) => {
    if (product.id === props.getID) {
      tmp = product;
    }
  });
  function toggleOffer() {
    document.getElementById("offerModal").classList.toggle("d-none");
  }
  function toggleBuy() {
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  return (
    <div className="grayBackground">
      <Header getIsOauth={props.getIsOauth} />
      <div className="width80 d-flex whiteBackground">
        <img
          className="productDetailImg border-r-8"
          src={tmp.imageUrl}
          alt=""
        ></img>
        <div className="productDetailArea">
          <p className="productTitle">{tmp.title}</p>
          <div className="d-flex">
            <div className="productDescription">
              <p>
                <b>Marka:</b>
              </p>
              <p>
                <b>Renk:</b>
              </p>
              <p>
                <b>Kullanım Durumu:</b>
              </p>
            </div>
            <div className="productDescription">
              <p>{tmp.brand.title}</p>
              <p>{tmp.color.title}</p>
              <p>{tmp.status.title}</p>
            </div>
          </div>
          <p className="marginT30">{tmp.price} TL</p>
          {!tmp.isSold && tmp.isOfferable ? (
            <div>
              <div className="d-none offeredValue grayBackground d-flex semi-w border-r-8">
                <p>
                  Verilen Teklif: <b>{getofferValue}</b>
                </p>
              </div>
              <div className="d-flex productButton margin30">
                <button
                  onClick={() => toggleBuy()}
                  className="productBuyButton full-w border-r-8"
                >
                  Satın Al
                </button>
                {getofferValue > 0 ? (
                  <button
                    onClick={() => toggleOffer()}
                    className="productOfferButton full-w border-r-8"
                  >
                    Teklifi Geri Çek
                  </button>
                ) : (
                  <button
                    onClick={() => toggleOffer()}
                    className="productOfferButton full-w border-r-8"
                  >
                    Teklif Ver
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className=" notOnSale semi-w border-r-8">
              Bu Ürün Satışta Değil
            </div>
          )}

          <div className="productDesc">
            <p>Açıklama</p>
            <p>{tmp.description}</p>
          </div>
        </div>
      </div>
      <OfferModal
        getID={props.getID}
        getProductList={props.getProductList}
        getIsOauth={props.getIsOauth}
        setOfferValue={setOfferValue}
        getToken={props.getToken}
      />
      <BuyModal product={tmp} getToken={props.getToken} />
      <div
        id="succesBuy"
        className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
      >
        <img src={succes} alt=""></img>
        <p>Satın Alındı.</p>
      </div>
    </div>
  );
}

export default ProductDetail;
