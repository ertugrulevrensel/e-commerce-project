import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./ProductList.scss";
import { connect } from "react-redux";
import { getProductList } from "../actions";
function ProductList({ productList, getProductList, categoryID }) {
  useEffect(() => {
    getProductList();
  }, "");
  let history = useHistory();
  function goDetail(id) {
    // if (props.getIsOauth) {
    //   fetch("https://bootcampapi.techcs.io/api/fe/v1/account/given-offers", {
    //     headers: { Authorization: `Bearer ${props.getToken}` },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.length; i++) {
    //         if (data[i].product.id === id) {
    //           props.setCancelOfferID(data[i].id);
    //         }
    //       }
    //     });
    // }
    // props.setID(id);
    history.push(`/product/${id}`);
  }
  return (
    <div className="d-grid productList">
      {(categoryID === undefined
        ? productList
        : productList.filter((products) => products.category.id === categoryID)
      ).map((product) => {
        return (
          <div
            className="d-flex flex-d-col product border-r-8 c-pointer"
            onClick={() => goDetail(product.id)}
            key={product.id}
          >
            <div className="d-flex flex-d-col productImg">
              <img src={product.imageUrl} alt=""></img>
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
  );
}

const mapStatetoProps = (state) => ({
  productList: state.productList,
  categoryID: state.categoryID,
});

export default connect(mapStatetoProps, { getProductList })(ProductList);
