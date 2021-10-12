import React from "react";
import "../Modal.css";
import exit from "../Assets/x.png";
function OfferModal(props) {
  var tmp;
  props.getProductList.map((product) => {
    if (product.id === props.getID) {
      tmp = product;
    }
  });
  function toggleModal() {
    document.getElementById("offerModal").classList.toggle("d-none");
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
            <label className="full-w" for="percent20">
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
            <label className="full-w" for="percent30">
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
            <label className="full-w" for="percent40">
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
          <button className="confirmButton border-r-8 bg4b9ce2">Onayla</button>
        </div>
      </div>
    </div>
  );
}

export default OfferModal;
