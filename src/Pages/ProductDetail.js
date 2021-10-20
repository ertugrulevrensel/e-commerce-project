import React, { useState, useEffect } from "react";
import "./ProductDetail.scss";
import Header from "../Components/Header";
import succes from "../Assets/succes.png";
import fail from "../Assets/fail.png";
import ProductButton from "../Components/ProductButton";
import axios from "axios";

function ProductDetail(props) {
  var tmp;
  /*eslint-disable-line*/ props.getProductList.map((product) => {
    if (product.id === props.getID) {
      tmp = product;
    }
  });
  // const [getCancelOfferID, setCancelOfferID] = useState("");

  const [getProduct, setProduct] = useState(tmp);
  const [getStatus, setStatus] = useState();
  useEffect(() => {
    axios(
      `https://bootcampapi.techcs.io/api/fe/v1/product/${
        window.location.href.split("/")[4]
      }`
    ).then((response) => setProduct(response.data));
  }, ""); // eslint-disable-line

  return (
    <>
      <Header getIsOauth={props.getIsOauth} />
      <div className="width80 ">
        <div className="d-flex whiteBackground responsiveDetail">
          <img
            className="productDetailImg border-r-8"
            src={getProduct?.imageUrl}
            alt=""
          ></img>
          <div className="productDetailArea full-w">
            <p className="productTitle">{getProduct?.title}</p>
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
                <p>{getProduct?.brand.title}</p>
                <p>{getProduct?.color.title}</p>
                <p>{getProduct?.status.title}</p>
              </div>
            </div>
            <p className="marginT30 priceValue">
              <b>{getProduct?.price} TL</b>
            </p>
            <ProductButton
              getProduct={getProduct}
              getCancelOfferID={props.getCancelOfferID}
              setStatus={setStatus}
              setProduct={setProduct}
              getToken={props.getToken}
              getID={props.getID}
              getIsOauth={props.getIsOauth}
            />

            <div className="productDesc">
              <p>
                <b>Açıklama</b>
              </p>
              <p>{getProduct?.description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <OfferModal
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
      /> */}
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
    </>
  );
}

export default ProductDetail;
