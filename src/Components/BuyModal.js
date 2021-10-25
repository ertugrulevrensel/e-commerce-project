import React from "react";
import "./Modal.scss";
import { connect } from "react-redux";
import { buyProduct, getProduct, getGivenOfferList } from "../actions";

function BuyModal(props) {
  //close buy modal when click cancel button
  function toggleModal() {
    document.getElementById("succesBuys").classList.add("d-none");
    document.getElementById("failSignBuy").classList.add("d-none");
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  // buying functions
  function buyProducts(id) {
    buyProduct(id, props.token).then((response) => {
      if (response.status === 201 || response.status === 200) {
        // if response status is success, show success notification
        document.getElementById("succesBuys").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("succesBuys").classList.add("d-none");
        }, 3000);
        document.getElementById("failSignBuy").classList.add("d-none");
        props.setStatus("Satın Alındı.");
        props.getProduct(id);
        getGivenOfferList(props.token);
        document.getElementById("buyModal").classList.add("d-none");
      } else if (response.status === 401) {
        // if response status is fil, show fail notification
        document.getElementById("failSignBuy").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failSignBuy").classList.add("d-none");
        }, 3000);
        document.getElementById("succesBuys").classList.add("d-none");
        props.setStatus("Lütfen Giriş Yapınız.");
      }
    });
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
      {/* <div
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
      </div> */}
    </div>
  );
}

const mapStatetoProps = (state) => ({
  token: state.token,
});
export default connect(mapStatetoProps, { getProduct, getGivenOfferList })(
  BuyModal
);
