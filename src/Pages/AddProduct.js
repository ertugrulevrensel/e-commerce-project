import React from "react";
import "../AddProduct.css";
import Header from "../Components/Header";

function AddProduct(props) {
  var category = [
    { title: "ayakkabı", id: "62pL2inlLwf8zwJAOram" },
    { title: "tişört", id: "LgFcz5mxlMCGbMG0tBkQ" },
    { id: "TxgNNs9rIRtnAoKxpm74", title: "pantolon" },
    { title: "polar", id: "YEgm4zGr3xHKNjp62SqK" },
    { id: "YHYl2X5OtRhppR6ubAZD", title: "kazak" },
    { title: "sweatshirt", id: "ffEeQi75i5d9K6D9sX1s" },
    { id: "gUPSzB5uINdZgw961FVy", title: "şort" },
    { title: "mont", id: "j9UBgBVEbInp8wHL5xVl" },
    { id: "o3Ek85JOEKhq71a635Vk", title: "gömlek" },
  ];
  var brand = [
    { id: "4id4YeNy9Tj0SAcAiPKz", title: "underarmour" },
    { title: "pull&bear", id: "7lGYUTwVdJm3Dspwy5Ps" },
    { title: "nike", id: "J5btZCzv6vCTMkFGYgiY" },
    { id: "SPAp6xFJoTvQWDOdJIOp", title: "mavi" },
    { title: "lacoste", id: "UecyKuxjf9zeA1sf1PD7" },
    { title: "levis", id: "hoYzGqV0muhBQdltaadO" },
    { title: "vakko", id: "ikLoH8kxHpyA7D6PZM0l" },
  ];
  var status = [
    { id: "0oAwPzA42W0Mid8eWaL1", title: "az kullanılmış" },
    { id: "8DBGbroOE2lNpIUIy9CZ", title: "yeni" },
    { title: "yeni gibi", id: "ACUAtq75C1pknwgFYrBq" },
    { id: "pejnzB7dQnqf9Z9xyfE0", title: "eski" },
  ];
  var color = [
    { id: "95I3nI8x2sYBY5DfKCzq", title: "mor" },
    { id: "C9HSCUyvqrVTXxl9yLTT", title: "beyaz" },
    { title: "siyah", id: "ENy5bwEOIJtugbnFbwjE" },
    { title: "kahverengi", id: "Y2HjiCtk04eaGVSf3cWH" },
    { id: "c4nOCfWbyBlk8wPf0QLb", title: "pembe" },
    { id: "fIfLpqMGo27vAUuGP3ky", title: "kırmızı" },
    { id: "h1BgCxUOzFdYzQFJp0tC", title: "lacivert" },
    { title: "yeşil", id: "k6eFVpYLsQtMH0nGg8U7" },
    { id: "nlqf5fBkM6iJiqwwjVWp", title: "sarı" },
    { id: "zADt9mqybY0BfVqRlY0Y", title: "mavi" },
  ];
  return (
    <div className="grayBackground">
      <Header />
      <div className="d-flex width80 addProductArea whiteBackground">
        <div className="full-w">
          <b>Ürün Detayları</b>
          <p>Ürün Adı</p>
          <input
            className="inputArea full-w border-r-8"
            type="text"
            placeholder="Örnek: Iphone 12 Pro Max"
          ></input>
          <p>Açıklama</p>
          <input
            className="inputArea full-w border-r-8 description"
            type="text"
            placeholder="Ürün açıklaması girin"
          ></input>
          <div className="d-flex flexbox">
            <div className="full-w">
              <p>Kategori</p>
              <select
                className="inputArea border-r-8 full-w"
                placeholder="Kategori Seç"
              >
                {category.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
            <div className="full-w">
              <p>Marka</p>
              <select
                className="inputArea border-r-8 full-w"
                placeholder="Marka Seç"
              >
                {brand.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="d-flex flexbox">
            <div className="full-w">
              <p>Renk</p>
              <select
                className="inputArea border-r-8 full-w"
                placeholder="Renk Seç"
              >
                {color.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
            <div className="full-w">
              <p>Kullanım Durumu</p>
              <select
                className="inputArea border-r-8 full-w"
                placeholder="Kullanım Durumu Seç"
              >
                {status.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
          </div>
          <p>Fiyat</p>
          <input
            className="inputArea semi-w border-r-8"
            type="text"
            placeholder="Bir Fiyat Girin"
          ></input>
          <div className="d-flex semi-w space-between align-center">
            <p>Teklif Opsiyonu</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="full-w">
          <b>Ürün Görseli</b>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
