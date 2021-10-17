import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../AddProduct.css";
import Header from "../Components/Header";
import fail from "../Assets/fail.png";
import succes from "../Assets/succes.png";
import FileUpload from "../Components/FileUpload";
import { useHistory } from "react-router-dom";

function AddProduct(props) {
  const [getAddingStatus, setAddingStatus] = useState();
  const [getImageUrl, setImageUrl] = useState();
  let history = useHistory();
  useEffect(() => {
    if (!props.getIsOauth) {
      history.push("/");
    }
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
  }, []); // eslint-disable-line
  function saveProduct() {
    var infos = [];
    var isOffer = document.querySelector("[name=isOfferable]").checked;
    infos = document.querySelectorAll("[name=addProductInfo]");

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
    console.log(body);
    fetch("http://bootcampapi.techcs.io/api/fe/v1/product/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${props.getToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      response.json();
      if (response.status === 401) {
        setAddingStatus("Giriş Yapmadınız.");
        document.getElementById("failAdd").classList.remove("d-none");
        document.getElementById("succesAdd").classList.add("d-none");
      } else if (response.status === 200 || response.status === 201) {
        setAddingStatus("Ürün Eklendi.");
        document.getElementById("failAdd").classList.add("d-none");
        document.getElementById("succesAdd").classList.remove("d-none");
      }
    });
  }
  return (
    <div>
      <Header getIsOauth={props.getIsOauth} />
      <div className=" width80 addProductArea whiteBackground">
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
            ></input>
            <p className="paragraph">Açıklama</p>
            <input
              name="addProductInfo"
              className="inputArea full-w border-r-8 description"
              type="text"
              placeholder="Ürün açıklaması girin"
            ></input>
            <div className="d-flex flexbox">
              <div className="full-w">
                <p className="paragraph">Kategori</p>
                <select
                  className="inputArea border-r-8 full-w"
                  name="addProductInfo"
                >
                  <option value="" disabled selected>
                    Kategori seç
                  </option>
                  {props.category.map((item) => {
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
                >
                  <option value="" disabled selected>
                    Marka seç
                  </option>
                  {props.brand.map((item) => {
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
                >
                  <option value="" disabled selected>
                    Renk seç
                  </option>
                  {props.color.map((item) => {
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
                >
                  <option value="" disabled selected>
                    Kullanım durumu seç
                  </option>
                  {props.status.map((item) => {
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
            <FileUpload getToken={props.getToken} setImageUrl={setImageUrl} />
          </div>
        </div>
        <div className="saveButtonDiv d-flex full-w ">
          <button
            onClick={() => saveProduct()}
            className="bg4b9ce2 colorf0f8ff border-r-8"
          >
            Kaydet
          </button>
        </div>
      </div>
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
  );
}

export default AddProduct;
