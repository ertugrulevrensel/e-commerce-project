import React, { useState } from "react";
import "./Modal.scss";
import fail from "../Assets/fail.png";
import succes from "../Assets/succes.png";
import { connect } from "react-redux";
import { buyProduct } from "../actions";

function BuyModal(props, { token }) {
  const [getStatus, setStatus] = useState();
  function toggleModal() {
    document.getElementById("succesBuy").classList.add("d-none");
    document.getElementById("failSignBuy").classList.add("d-none");
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  function buyProducts(id) {
    buyProduct(id, token).then((response) => {
      if (response.status === 201 || response.status === 200) {
        document.getElementById("succesBuy").classList.remove("d-none");
        document.getElementById("failSignBuy").classList.add("d-none");
        setStatus("Satın Alındı.");
        props.setIsProductSold("true");
      } else if (response.status === 401) {
        document.getElementById("failSignBuy").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        setStatus("Lütfen Giriş Yapınız.");
      }
    });
    // let url = "https://bootcampapi.techcs.io/api/fe/v1/product/purchase/" + id;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     Authorization: `Bearer ${props.getToken}`,
    //   },
    //   body: JSON.stringify(id),
    // })
  }
  return (
    <div
      id="buyModal"
      className="d-none d-flex  p-fixed align-center justify-center bg4b9ce2O7"
    >
      <div>
        <div className="d-flex flex-d-col modals align-center justify-center whiteBackground border-r-8">
          <p className="buyTxt">Satın Al</p>
          <p className="buyTitle">Satın almak istiyor musunuz?</p>
          <div className="d-flex buyModalButton full-w">
            <button
              onClick={() => toggleModal()}
              className="full-w bgf0f8ff border-r-8 color4b9ce2"
            >
              Vazgeç
            </button>
            <button
              onClick={() => buyProducts(props.product.id)}
              className="full-w bg4b9ce2 border-r-8 colorf0f8ff"
            >
              Satın Al
            </button>
          </div>
        </div>
      </div>
      <div
        id="failSignBuy"
        className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
      >
        <img src={fail} alt=""></img>
        <p>{getStatus}</p>
      </div>
      <div
        id="succesBuys"
        className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
      >
        <img src={succes} alt=""></img>
        <p>{getStatus}</p>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  token: state.token,
});
export default connect(mapStatetoProps)(BuyModal);
