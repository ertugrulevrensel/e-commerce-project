import React from "react";
import "../Modal.css";
import fail from "../Assets/fail.png";
import succes from "../Assets/succes.png";
import axios from "axios";

function BuyModal(props) {
  function toggleModal() {
    document.getElementById("succesBuy").classList.add("d-none");
    document.getElementById("failSignBuy").classList.add("d-none");
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  function buyProduct(id) {
    let url = "http://bootcampapi.techcs.io/api/fe/v1/product/purchase/" + id;
    axios(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${props.getToken}`,
      },
      body: JSON.stringify(id),
    }).then(function (response) {
      if (response.status === 201 || response.status === 200) {
        console.log(props.product);
        document.getElementById("succesBuy").classList.remove("d-none");
        document.getElementById("failSignBuy").classList.add("d-none");
      } else if (response.status === 401) {
        document.getElementById("failSignBuy").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
      }
    });
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     Authorization: `Bearer ${props.getToken}`,
    //   },
    // }).then((response) => {
    //   response.json();
    //   console.log("buying" + response);
    //   if (response.status === 201 || response.status === 200) {
    //     document.getElementById("succes").classList.remove("d-none");
    //     document.getElementById("failSign").classList.add("d-none");
    //   } else if (response.status === 401) {
    //     document.getElementById("failSign").classList.remove("d-none");
    //     document.getElementById("succes").classList.add("d-none");
    //   }
    // });
  }
  return (
    <div
      id="buyModal"
      className="d-none d-flex  p-fixed align-center justify-center bg4b9ce2O7"
    >
      <div className="d-flex flex-d-col modals align-center justify-center whiteBackground border-r-8">
        <p>Satın Al</p>
        <p>Satın almak istiyor musunuz?</p>
        <div className="d-flex buyModalButton full-w">
          <button
            onClick={() => toggleModal()}
            className="full-w bgf0f8ff border-r-8 color4b9ce2"
          >
            Vazgeç
          </button>
          <button
            onClick={() => buyProduct(props.product.id)}
            className="full-w bg4b9ce2 border-r-8 colorf0f8ff"
          >
            Satın Al
          </button>
        </div>
      </div>
      <div
        id="failSignBuy"
        className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
      >
        <img src={fail} alt=""></img>
        <p>Giriş Yapmadınız.</p>
      </div>
    </div>
  );
}

export default BuyModal;
