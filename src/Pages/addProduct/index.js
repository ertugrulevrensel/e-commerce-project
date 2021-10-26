import React, { useState, useEffect } from "react";
import "./AddProduct.scss";
import Header from "../../Components/header";
import fail from "../../Assets/fail.webp";
import succes from "../../Assets/succes.webp";
import FileUpload from "../../Components/fileUpload";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setLoading } from "../../actions";
import axios from "axios";

function AddProduct({ isAuth, categorys, token, loading, setLoading }) {
  //create state
  const [getAddingStatus, setAddingStatus] = useState();
  const [getImageUrl, setImageUrl] = useState();
  const [color, setColor] = useState([]);
  const [brand, setBrand] = useState([]);
  const [status, setStatus] = useState([]);
  let history = useHistory();
  //memo process
  const memo = (callback) => {
    const cache = new Map();
    return (...args) => {
      const selector = JSON.stringify(args);
      if (cache.has(selector)) return cache.get(selector);
      const value = callback(...args);
      cache.set(selector, value);
      return value;
    };
  };
  //if not is auth, go home
  if (!isAuth) {
    history.push("/");
  }
  const memoizedAxiosGet = memo(axios.get);
  useEffect(() => {
    //get all color and set color state
    memoizedAxiosGet(
      "https://bootcampapi.techcs.io/api/fe/v1/detail/color/all"
    ).then((response) => setColor(response.data));
    //get all brands and set brand state
    memoizedAxiosGet(
      "https://bootcampapi.techcs.io/api/fe/v1/detail/brand/all"
    ).then((response) => setBrand(response.data));
    //get all status and set status state
    memoizedAxiosGet(
      "https://bootcampapi.techcs.io/api/fe/v1/detail/status/all"
    ).then((response) => setStatus(response.data));
  }, []); // eslint-disable-line
  function saveProduct() {
    //create product process
    //take input values
    var infos = [];
    var isOffer = document.querySelector("[name=isOfferable]").checked;
    infos = document.querySelectorAll("[name=addProductInfo]");
    //if input value is undefined, show error
    document.querySelectorAll("[name=addProductInfo]").forEach((item) => {
      if (item.value === "") {
        item.classList.add("inputErr");
      } else {
        item.classList.remove("inputErr");
      }
    });
    //create body variable for use in axios
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
    //call create product process
    setLoading(true);
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
        //if response is fail, show fail notification
        setLoading(false);
        setAddingStatus("Giriş Yapmadınız.");
        document.getElementById("failAdd").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failAdd").classList.add("d-none");
        }, 3000);
        document.getElementById("succesAdd").classList.add("d-none");
      } else if (response.status === 400) {
        //if response is fail, show fail notification
        setLoading(false);
        setAddingStatus("Ürün Bilgileri Eksik.");
        document.getElementById("failAdd").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failAdd").classList.add("d-none");
        }, 3000);
        document.getElementById("succesAdd").classList.add("d-none");
      } else if (response.status === 200 || response.status === 201) {
        //if response is success, show success notification and clear form
        setLoading(false);
        document.querySelectorAll("[name=addProductInfo]").forEach((item) => {
          item.value = "";
        });
        setAddingStatus("Ürün Eklendi.");
        document.getElementById("failAdd").classList.add("d-none");
        document.getElementById("succesAdd").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("succesAdd").classList?.add("d-none");
        }, 3000);
      }
    });
  }
  return (
    <div>
      <Header />
      {loading === true ? <div class="spinnerUpload"></div> : null}
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
  loading: state.loading,
});
export default connect(mapStatetoProps, { setLoading })(AddProduct);
