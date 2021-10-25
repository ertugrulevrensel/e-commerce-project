import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./ProductList.scss";
import { connect } from "react-redux";
import { getProductList, setLoading } from "../actions";
function ProductList({ productList, getProductList, setLoading, loading }) {
  let { categoryid } = useParams();
  useEffect(() => {
    //show loading icon when load product
    setLoading(true);
    getProductList();
  }, []); // eslint-disable-line
  let history = useHistory();
  function goDetail(id) {
    //if click product, go product detail page
    history.push(`/product/${id}`);
  }
  return (
    <>
      {loading === true ? (
        <div class="spinner"></div>
      ) : (
        <div className="d-grid productList">
          {(categoryid === undefined
            ? productList
            : productList?.filter(
                (products) => products.category.id === categoryid
              )
          ).map((product) => {
            return (
              <div
                className="d-flex flex-d-col product border-r-8 c-pointer"
                onClick={() => goDetail(product.id)}
                key={product.id}
              >
                <div className="d-flex flex-d-col productImg">
                  <img
                    className="border-r-8"
                    src={product.imageUrl}
                    alt=""
                  ></img>
                </div>
                <div className="d-flex space-between">
                  <p className="brand">
                    <b>{product.brand.title}</b>
                  </p>
                  <div className="d-flex productColor">
                    <b>Renk: </b> <p> {product.color.title}</p>
                  </div>
                </div>
                <div className="productPrice">
                  <b>{product.price} TL</b>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

const mapStatetoProps = (state) => ({
  productList: state.productList,
  categoryID: state.categoryID,
  loading: state.loading,
});

export default connect(mapStatetoProps, { getProductList, setLoading })(
  ProductList
);
