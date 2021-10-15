import React, { useState, useEffect } from "react";
import "../ProductDetail.css";
import BuyModal from "../Components/BuyModal";
import Header from "../Components/Header";
import OfferModal from "../Components/OfferModal";
import succes from "../Assets/succes.png";
import fail from "../Assets/fail.png";

function ProductDetail(props) {
  var tmp;
  props.getProductList.map((product) => {
    if (product.id === props.getID) {
      tmp = product;
    }
  });

  const [getofferValue, setOfferValue] = useState("0");
  const [getProduct, setProduct] = useState(tmp);
  const [getStatus, setStatus] = useState();

  useEffect(() => {
    fetch(`http://bootcampapi.techcs.io/api/fe/v1/product/${props.getID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
    if (getofferValue > 0) {
      document
        .getElementsByClassName("offeredValue")[0]
        .classList.remove("d-none");
    }
    console.log(getProduct);
  }, "");
  function cancelOffer() {
    fetch(
      `http://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${props.getID}`
    ).then((response) => {
      response.json();
      if (response.status === 200 || response.status === 201) {
        document.getElementById("succesBuy").classList.remove("d-none");
        document.getElementById("failCancelOffer").classList.add("d-none");
        setStatus("Teklif Geri Çeklidi.");
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
  }

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
          src={getProduct.imageUrl}
          alt=""
        ></img>
        <div className="productDetailArea">
          <p className="productTitle">{getProduct.title}</p>
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
              <p>{getProduct.brand.title}</p>
              <p>{getProduct.color.title}</p>
              <p>{getProduct.status.title}</p>
            </div>
          </div>
          <p className="marginT30">{getProduct.price} TL</p>
          {!getProduct.isSold && getProduct.isOfferable ? (
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
                    onClick={() => cancelOffer()}
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
            <p>{getProduct.description}</p>
          </div>
        </div>
      </div>
      <OfferModal
        getID={props.getID}
        getProduct={getProduct}
        getIsOauth={props.getIsOauth}
        setOfferValue={setOfferValue}
        getToken={props.getToken}
      />
      <BuyModal
        product={getProduct}
        getToken={props.getToken}
        setStatus={setStatus}
      />
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

export default ProductDetail;
