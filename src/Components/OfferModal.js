import React from "react";
import "../Modal.css";
import exit from "../Assets/x.png";
import fail from "../Assets/fail.png";
import succes from "../Assets/succes.png";
import cookie from "js-cookie";

function OfferModal(props) {
  console.log(cookie.get());
  var tmp;
  props.getProductList.map((product) => {
    if (product.id === props.getID) {
      tmp = product;
    }
  });
  function toggleModal() {
    document.getElementById("offerModal").classList.toggle("d-none");
  }
  function offerProduct() {
    console.log(props.getIsOauth);

    if (document.getElementById("customOffer").value > 0) {
      console.log("price");
      goOffer(document.getElementById("customOffer").value);
    } else {
      var element = document.getElementsByName("offerPercent");
      for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
          let offer = element[i].value * tmp.price;
          goOffer(offer);
        }
      }
    }
  }
  function goOffer(price) {
    var url = "http://bootcampapi.techcs.io/api/fe/v1/product/offer/" + tmp.id;
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${props.getToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ offeredPrice: Number(price.toFixed(2)) }),
    }).then((response) => {
      response.json();
      console.log(response);
      if (response.status === 401) {
        document.getElementById("failSign").classList.remove("d-none");
        document.getElementById("succes").classList.add("d-none");
      } else if (response.status === 201 || response.status === 200) {
        document.getElementById("succes").classList.remove("d-none");
        document.getElementById("failSign").classList.add("d-none");
        props.setOfferValue(Number(price.toFixed(2)));
      }
    });
  }

  return (
    <div
      id="offerModal"
      className="d-flex d-none p-fixed align-center justify-center bg4b9ce2O7"
    >
      <div className=" flex-d-col modals align-center justify-center whiteBackground border-r-8">
        <div className="d-flex">
          <p>Teklif Ver</p>
          <button onClick={() => toggleModal()} className="exit">
            <img src={exit} alt=""></img>
          </button>
        </div>

        <div className="bgf0f8ff full-w d-flex border-r-8 align-center">
          <img className="border-r-8" src={tmp.imageUrl} alt=""></img>
          <p>{tmp.title}</p>
          <p className="buyPrice">{tmp.price} TL</p>
        </div>
        <div className="offerArea full-w">
          <div className="d-flex full-w align-center border-r-8">
            <input
              id="percent20"
              type="radio"
              name="offerPercent"
              value="0.2"
            ></input>
            <label className="full-w" htmlFor="percent20">
              %20'si Kadar Teklif Ver
            </label>
          </div>
          <div className="d-flex full-w align-center border-r-8">
            <input
              id="percent30"
              type="radio"
              name="offerPercent"
              value="0.3"
            ></input>
            <label className="full-w" htmlFor="percent30">
              %30'u Kadar Teklif Ver
            </label>
          </div>
          <div className="d-flex full-w align-center border-r-8">
            <input
              id="percent40"
              type="radio"
              name="offerPercent"
              value="0.4"
            ></input>
            <label className="full-w" htmlFor="percent40">
              %40'ı Kadar Teklif Ver
            </label>
          </div>
          <div className="d-flex full-w align-center border-r-8 customOfferDiv">
            <input
              id="customOffer"
              className="full-w"
              type="text"
              name="offerPercent"
              placeholder="Teklif Belirle"
            ></input>
          </div>
        </div>
        <div className="d-flex full-w justify-center ">
          <button
            onClick={() => offerProduct()}
            className="confirmButton border-r-8 bg4b9ce2"
          >
            Onayla
          </button>
        </div>
      </div>
      <div
        id="failSign"
        className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
      >
        <img src={fail} alt=""></img>
        <p>Giriş Yapmadınız.</p>
      </div>
      <div
        id="succes"
        className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
      >
        <img src={succes} alt=""></img>
        <p>Teklif Verildi.</p>
      </div>
    </div>
  );
}

export default OfferModal;
