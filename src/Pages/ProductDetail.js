import React, { useEffect } from "react";
import "./ProductDetail.scss";
import Header from "../Components/Header";
import ProductButton from "../Components/ProductButton";
import { connect } from "react-redux";
import { getProduct } from "../actions";
import { useParams } from "react-router-dom";

function ProductDetail({ getProduct, product }) {
  let { id } = useParams();
  useEffect(() => {
    getProduct(id);
  }, []); // eslint-disable-line

  return (
    <>
      <Header />
      <div className="width80 ">
        {product === 404 ? (
          <div className="d-flex full-w">
            Aradığınız ürün bulunamadı.{" "}
            <a className="color4b9ce2 text-d-none" href="/">
              Anasayfaya
            </a>{" "}
            dönebilirsiniz.
          </div>
        ) : (
          <div className="d-flex whiteBackground responsiveDetail">
            <img
              className="productDetailImg border-r-8"
              src={product?.imageUrl}
              alt=""
            ></img>
            <div className="productDetailArea full-w">
              <p className="productTitle">{product?.title}</p>
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
                  <p>{product?.brand?.title}</p>
                  <p>{product?.color?.title}</p>
                  <p>{product?.status?.title}</p>
                </div>
              </div>
              <p className="marginT30 priceValue">
                <b>{product?.price} TL</b>
              </p>
              <ProductButton />

              <div className="productDesc">
                <p>
                  <b>Açıklama</b>
                </p>
                <p>{product?.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const mapStatetoProps = (state) => ({
  product: state.product,
});

export default connect(mapStatetoProps, { getProduct })(ProductDetail);
