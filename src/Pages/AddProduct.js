import React from "react";
import { useEffect } from "react/cjs/react.development";
import "../AddProduct.css";
import Header from "../Components/Header";

function AddProduct(props) {
  useEffect(() => {
    //get all colors and set color state
    fetch("http://bootcampapi.techcs.io/api/fe/v1/detail/color/all")
      .then((response) => response.json())
      .then((data) => {
        props.setColor(data);
      });
    //get all brands and set brand state
    fetch("http://bootcampapi.techcs.io/api/fe/v1/detail/brand/all")
      .then((response) => response.json())
      .then((data) => {
        props.setBrand(data);
      });
    //get all status and set status state
    fetch("http://bootcampapi.techcs.io/api/fe/v1/detail/status/all")
      .then((response) => response.json())
      .then((data) => {
        props.setStatus(data);
      });
  });
  return (
    <div className="grayBackground">
      <Header />
      <div className="d-flex width80 addProductArea whiteBackground">
        <div className="full-w">
          <b className="bold">Ürün Detayları</b>
          <p className="paragraph">Ürün Adı</p>
          <input
            className="inputArea full-w border-r-8"
            type="text"
            placeholder="Örnek: Iphone 12 Pro Max"
          ></input>
          <p className="paragraph">Açıklama</p>
          <input
            className="inputArea full-w border-r-8 description"
            type="text"
            placeholder="Ürün açıklaması girin"
          ></input>
          <div className="d-flex flexbox">
            <div className="full-w">
              <p className="paragraph">Kategori</p>
              <select
                className="inputArea border-r-8 full-w"
                placeholder="Kategori Seç"
              >
                {props.category.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
            <div className="full-w">
              <p className="paragraph">Marka</p>
              <select
                className="inputArea border-r-8 full-w"
                placeholder="Marka Seç"
              >
                {props.brand.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="d-flex flexbox">
            <div className="full-w">
              <p className="paragraph">Renk</p>
              <select
                className="inputArea border-r-8 full-w"
                placeholder="Renk Seç"
              >
                {props.color.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
            <div className="full-w">
              <p className="paragraph">Kullanım Durumu</p>
              <select
                className="inputArea border-r-8 full-w"
                placeholder="Kullanım Durumu Seç"
              >
                {props.status.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
          </div>
          <p className="paragraph">Fiyat</p>
          <input
            className="inputArea semi-w border-r-8"
            type="text"
            placeholder="Bir Fiyat Girin"
          ></input>
          <div className="d-flex semi-w space-between align-center">
            <p className="paragraph">Teklif Opsiyonu</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="full-w">
          <b className="bold">Ürün Görseli</b>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
