import React from "react";
import { cancelOffer, getGivenOfferList, getProduct } from "../../../actions";
import { connect } from "react-redux";
import "../Modal.scss";
import { useParams } from "react-router-dom";

function CancelModal(props) {
  let { id } = useParams();
  //close cancel offer modal when click cancel button
  function toggleModal() {
    document.getElementById("succesCancel")?.classList.add("d-none");
    document.getElementById("failCancelOffer")?.classList.add("d-none");
    document.getElementById("cancelModal")?.classList.toggle("d-none");
  }
  function CancelProductsOffers() {
    //set cancel id
    let cancelID = "";
    props.givenOfferList?.forEach((item) => {
      if (item.product.id === id) {
        cancelID = item.id;
      }
    });
    //cancel offer process
    cancelOffer(cancelID, props.token).then((response) => {
      if (response.status === 200 || response.status === 201) {
        //if response is success, show success notification
        document.getElementById("succesBuys")?.classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("succesBuys")?.classList.add("d-none");
        }, 3000);
        document.getElementById("failSignBuy")?.classList.add("d-none");
        //close offer value div
        document.getElementById("offeredValuediv")?.classList.add("d-none");
        props.setStatus("Teklif Geri Çeklidi.");
        props.getGivenOfferList(props.token);
        //close cancel offer modal after response is success
        document.getElementById("cancelModal")?.classList.add("d-none");
      } else if (response.status === 401) {
        //if response is fail, show fail notification
        document.getElementById("failSignBuy")?.classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failSignBuy")?.classList.add("d-none");
        }, 3000);
        document.getElementById("succesBuys")?.classList.add("d-none");
        props.setStatus("Lütfen Giriş Yapınız.");
      } else {
        //if response is fail, show fail notification
        document.getElementById("failSignBuy")?.classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failSignBuy")?.classList.add("d-none");
        }, 3000);
        document.getElementById("succesBuys")?.classList.add("d-none");
        props.setStatus("Teklif Geri Çekme Başarısız.");
      }
    });
  }
  return (
    <div
      id="cancelModal"
      className="d-none d-flex  p-fixed align-center justify-center bg4b9ce2O7"
    >
      <div>
        <div className="d-flex flex-d-col modals align-center justify-center whiteBackground border-r-8">
          <p className="buyTxt">Teklifi Geri Çek</p>
          <p className="buyTitle">Teklifi geri çekmek istiyor musunuz?</p>
          <div className="d-flex buyModalButton full-w">
            <button
              onClick={() => toggleModal()}
              className="full-w bgf0f8ff border-r-8 color4b9ce2"
            >
              Vazgeç
            </button>
            <button
              onClick={() => CancelProductsOffers(props.product.id)}
              className="full-w bg4b9ce2 border-r-8 colorf0f8ff"
            >
              Teklifi Geri Çek
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  givenOfferList: state.givenOfferList,
  token: state.token,
});

export default connect(mapStatetoProps, { getGivenOfferList, getProduct })(
  CancelModal
);
