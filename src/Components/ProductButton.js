import axios from "axios";
import React from "react";

function ProductButton(props) {
  console.log(props.getCancelOfferID);
  function cancelOffer() {
    axios
      .delete(
        `http://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${props.getCancelOfferID}`,
        {
          headers: {
            Authorization: `Bearer ${props.getToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // response.json();
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          document.getElementById("succesBuy").classList.remove("d-none");
          document.getElementById("failCancelOffer").classList.add("d-none");
          document.getElementById("offeredValuediv").classList.add("d-none");
          props.setStatus("Teklif Geri Çeklidi.");
          props.setOfferValue("0");
        } else if (response.status === 401) {
          document.getElementById("failCancelOffer").classList.remove("d-none");
          document.getElementById("succesBuy").classList.add("d-none");
          props.setStatus("Lütfen Giriş Yapınız.");
        } else {
          document.getElementById("failCancelOffer").classList.remove("d-none");
          document.getElementById("succesBuy").classList.add("d-none");
          props.setStatus("Teklif Geri Çekme Başarısız.");
        }
      });
  }
  function toggleOffer() {
    document.getElementById("offerModal").classList.toggle("d-none");
  }
  function toggleBuy() {
    document.getElementById("buyModal").classList.toggle("d-none");
  }
  return (
    <>
      {!props.getProduct.isSold && props.getProduct.isOfferable ? (
        <div>
          <div
            id="offeredValuediv"
            className="d-none grayBackground d-flex semi-w border-r-8"
          >
            <p>
              Verilen Teklif: <b>{props.getofferValue}</b>
            </p>
          </div>
          <div className="d-flex productButton margin30">
            <button
              onClick={() => toggleBuy()}
              className="productBuyButton full-w border-r-8"
            >
              Satın Al
            </button>
            {props.getofferValue > 0 && !(props.getCancelOfferID === "") ? (
              <button
                onClick={() => cancelOffer()}
                className="productOfferButton full-w border-r-8"
              >
                Teklifi Geri Çek
              </button>
            ) : (
              <button
                onClick={() => toggleOffer()}
                className="productOfferButton full-w border-r-8"
              >
                Teklif Ver
              </button>
            )}
          </div>
        </div>
      ) : props.getProduct.isSold ? (
        <div className=" notOnSale semi-w border-r-8">
          Bu Ürün Satışta Değil
        </div>
      ) : !props.getProduct.isOfferable ? (
        <div className="d-flex productButton margin30">
          <button
            onClick={() => toggleBuy()}
            className="productBuyButton semi-w border-r-8"
          >
            Satın Al
          </button>
        </div>
      ) : null}
    </>
  );
}

export default ProductButton;
