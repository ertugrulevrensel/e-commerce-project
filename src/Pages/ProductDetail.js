import React, { useEffect } from "react";
import "./ProductDetail.scss";
import Header from "../Components/Header";
import ProductButton from "../Components/ProductButton";
import { connect } from "react-redux";
import { getProduct, setLoading } from "../actions";
import { useParams, useHistory } from "react-router-dom";

function ProductDetail({ getProduct, product, setLoading, loading }) {
  let history = useHistory();
  let { id } = useParams();
  useEffect(() => {
    //loading is shown until the product is installed.
    setLoading(true);
    getProduct(id);
  }, []); // eslint-disable-line

  function goHome() {
    history.push("/");
  }

  return (
    <>
      <Header />
      <div className="width80 ">
        {product === 404 ? (
          <div className="d-flex full-w align-center justify-center">
            <p>
              Aradığınız ürün bulunamadı.{" "}
              <b className="c-pointer color4b9ce2" onClick={() => goHome()}>
                Anasayfaya
              </b>{" "}
              dönebilirsiniz.
            </p>
          </div>
        ) : (
          <>
            {loading === true ? (
              <div class="spinner"></div>
            ) : (
              <div className="d-flex whiteBackground responsiveDetail">
                <div className="productDetailImg full-w">
                  <img
                    className="border-r-8"
                    src={product?.imageUrl}
                    alt=""
                  ></img>
                </div>
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
          </>
        )}
      </div>
    </>
  );
}

const mapStatetoProps = (state) => ({
  product: state.product,
  loading: state.loading,
});

export default connect(mapStatetoProps, { getProduct, setLoading })(
  ProductDetail
);
