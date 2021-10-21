import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./AddProduct.scss";
import Header from "../Components/Header";
import fail from "../Assets/fail.png";
import succes from "../Assets/succes.png";
import FileUpload from "../Components/FileUpload";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

function AddProduct({ isAuth, categorys, token }) {
  const [getAddingStatus, setAddingStatus] = useState();
  const [getImageUrl, setImageUrl] = useState();
  const [color, setColor] = useState([]);
  const [brand, setBrand] = useState([]);
  const [status, setStatus] = useState([]);
  let history = useHistory();
  useEffect(() => {
    if (!isAuth) {
      history.push("/");
    }
    axios("https://bootcampapi.techcs.io/api/fe/v1/detail/color/all").then(
      (response) => setColor(response.data)
    );
    //get all brands and set brand state
    axios("https://bootcampapi.techcs.io/api/fe/v1/detail/brand/all").then(
      (response) => setBrand(response.data)
    );
    //get all status and set status state
    axios("https://bootcampapi.techcs.io/api/fe/v1/detail/status/all").then(
      (response) => setStatus(response.data)
    );
  }, []); // eslint-disable-line
  function saveProduct() {
    var infos = [];
    var isOffer = document.querySelector("[name=isOfferable]").checked;
    infos = document.querySelectorAll("[name=addProductInfo]");

    document.querySelectorAll("[name=addProductInfo]").forEach((item) => {
      if (item.value === "") {
        item.classList.add("inputErr");
      } else {
        item.classList.remove("inputErr");
      }
    });
    var body = {
      title: infos[0].value,
      description: infos[1].value,
      category: {
        title: infos[2].value.split(",")[0],
        id: infos[2].value.split(",")[1],
      },
      brand: {
        title: infos[3].value.split(",")[0],
        id: infos[3].value.split(",")[1],
      },
      color: {
        title: infos[4].value.split(",")[0],
        id: infos[4].value.split(",")[1],
      },
      status: {
        title: infos[5].value.split(",")[0],
        id: infos[5].value.split(",")[1],
      },
      price: infos[6].value,
      isOfferable: isOffer,
      imageUrl: getImageUrl,
    };
    fetch("https://bootcampapi.techcs.io/api/fe/v1/product/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      response.json();
      if (response.status === 401) {
        setAddingStatus("Giriş Yapmadınız.");
        document.getElementById("failAdd").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failAdd").classList.add("d-none");
        }, 3000);
        document.getElementById("succesAdd").classList.add("d-none");
      } else if (response.status === 400) {
        setAddingStatus("Ürün Bilgileri Eksik.");
        document.getElementById("failAdd").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failAdd").classList.add("d-none");
        }, 3000);
        document.getElementById("succesAdd").classList.add("d-none");
      } else if (response.status === 200 || response.status === 201) {
        setAddingStatus("Ürün Eklendi.");
        document.getElementById("failAdd").classList.add("d-none");
        document.getElementById("succesAdd").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("succesAdd").classList.add("d-none");
        }, 3000);
      }
    });
  }
  return (
    <div>
      <Header />
      <div className="responsivePad10">
        <form className=" width80 addProductArea whiteBackground">
          <div className="d-flex">
            <div className="full-w padR45">
              <p className="bold">
                <b>Ürün Detayları</b>
              </p>
              <p className="paragraph">Ürün Adı</p>
              <input
                name="addProductInfo"
                className="inputArea full-w border-r-8"
                type="text"
                placeholder="Örnek: Iphone 12 Pro Max"
                required
              ></input>
              <p className="paragraph">Açıklama</p>
              <input
                name="addProductInfo"
                className="inputArea full-w border-r-8 description"
                type="text"
                placeholder="Ürün açıklaması girin"
                required
              ></input>
              <div className="d-flex flexbox">
                <div className="full-w">
                  <p className="paragraph">Kategori</p>
                  <select
                    className="inputArea border-r-8 full-w"
                    name="addProductInfo"
                    required
                  >
                    <option value="" disabled selected>
                      Kategori seç
                    </option>
                    {categorys?.map((item) => {
                      return (
                        <option key={item.id} value={[item.title, item.id]}>
                          {item.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="full-w">
                  <p className="paragraph">Marka</p>
                  <select
                    className="inputArea border-r-8 full-w"
                    name="addProductInfo"
                    required
                  >
                    <option value="" disabled selected>
                      Marka seç
                    </option>
                    {brand?.map((item) => {
                      return (
                        <option key={item.id} value={[item.title, item.id]}>
                          {item.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="d-flex flexbox">
                <div className="full-w">
                  <p className="paragraph">Renk</p>
                  <select
                    className="inputArea border-r-8 full-w"
                    name="addProductInfo"
                    required
                  >
                    <option value="" disabled selected>
                      Renk seç
                    </option>
                    {color?.map((item) => {
                      return (
                        <option key={item.id} value={[item.title, item.id]}>
                          {item.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="full-w">
                  <p className="paragraph">Kullanım Durumu</p>
                  <select
                    className="inputArea border-r-8 full-w"
                    name="addProductInfo"
                    required
                  >
                    <option value="" disabled selected>
                      Kullanım durumu seç
                    </option>
                    {status?.map((item) => {
                      return (
                        <option key={item.id} value={[item.title, item.id]}>
                          {item.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <p className="paragraph">Fiyat</p>
              <input
                name="addProductInfo"
                className="inputArea semi-w border-r-8"
                type="number"
                placeholder="Bir Fiyat Girin"
                required
              ></input>
              <div className="d-flex semi-w space-between align-center">
                <p className="paragraph">Teklif Opsiyonu</p>
                <label className="switch">
                  <input type="checkbox" name="isOfferable" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="full-w padL45">
              <p className="bold">
                <b>Ürün Görseli</b>
              </p>
              <FileUpload setImageUrl={setImageUrl} />
            </div>
          </div>
          <div className="saveButtonDiv d-flex full-w ">
            <button
              type="button"
              onClick={() => saveProduct()}
              className="bg4b9ce2 colorf0f8ff border-r-8 c-pointer"
            >
              Kaydet
            </button>
          </div>
        </form>
        <div
          id="failAdd"
          className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
        >
          <img src={fail} alt=""></img>
          <p>{getAddingStatus}</p>
        </div>
        <div
          id="succesAdd"
          className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
        >
          <img src={succes} alt=""></img>
          <p>{getAddingStatus}</p>
        </div>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  isAuth: state.isAuth,
  categorys: state.categorys,
  token: state.token,
});
export default connect(mapStatetoProps)(AddProduct);
