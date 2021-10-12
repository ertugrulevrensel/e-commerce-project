import React from "react";
import "../Modal.css";

function BuyModal() {
  function toggleModal() {
    document.getElementById("buyModal").classList.toggle("d-none");
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
          <button className="full-w bg4b9ce2 border-r-8 colorf0f8ff">
            Satın Al
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyModal;
