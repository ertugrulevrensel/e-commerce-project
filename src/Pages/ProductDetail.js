import React from "react";
import "../ProjectDetail.css";
import BuyModal from "../Components/BuyModal";
import Header from "../Components/Header";
import OfferModal from "../Components/OfferModal";

function ProductDetail(props) {
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
      <Header />
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
              <p>Marka:</p>
              <p>Renk:</p>
              <p>Kullanım Durumu:</p>
            </div>
            <div className="productDescription">
              <p>{tmp.brand.title}</p>
              <p>{tmp.color.title}</p>
              <p>{tmp.status.title}</p>
            </div>
          </div>
          <p className="margin30">{tmp.price} TL</p>
          <div className="d-flex productButton margin30">
            <button
              onClick={() => toggleBuy()}
              className="productBuyButton full-w border-r-8"
            >
              Satın Al
            </button>
            <button
              onClick={() => toggleOffer()}
              className="productOfferButton full-w border-r-8"
            >
              Teklif Ver
            </button>
          </div>
          <div>
            <p>Açıklama</p>
            <p>{tmp.description}</p>
          </div>
        </div>
      </div>
      <OfferModal
        getID={props.getID}
        setID={props.setID}
        getProductList={props.getProductList}
        setProductList={props.setProductList}
      />
      <BuyModal
        getID={props.getID}
        setID={props.setID}
        getProductList={props.getProductList}
        setProductList={props.setProductList}
      />
    </div>
  );
}

export default ProductDetail;
