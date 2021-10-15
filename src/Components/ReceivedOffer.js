import React from "react";

function ReceivedOffer(props) {
  function receivedOfferAccept(id) {
    var url =
      "http://bootcampapi.techcs.io/api/fe/v1/account/accept-offer/" + id;
    fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${props.getToken}`,
      },
      body: JSON.stringify(id),
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        document.getElementById("failAcceptOffer").classList.add("d-none");
        document.getElementById("succesAcceptOffer").classList.remove("d-none");
        props.setStatus("Teklif Kabul Edildi.");
      } else if (response.status === 401) {
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        document.getElementById("succesAcceptOffer").classList.add("d-none");
        props.setStatus("Lütfen Giriş Yapınız.");
      } else {
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        document.getElementById("succesAcceptOffer").classList.add("d-none");
        props.setStatus("Teklif Kabul Edilemedi.");
      }
    });
  }
  function receivedOfferReject(id) {
    var url =
      "http://bootcampapi.techcs.io/api/fe/v1/account/reject-offer/" + id;
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${props.getToken}`,
      },
      body: JSON.stringify(id),
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        document.getElementById("failAcceptOffer").classList.add("d-none");
        document.getElementById("succesBuy").classList.remove("d-none");
        props.setStatus("Teklif Reddedildi");
      } else if (response.status === 401) {
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Lütfen Giriş Yapınız.");
      } else {
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Teklif Red Edilemedi.");
      }
    });
  }
  return (
    <div id="receivedOffers">
      {props.getReceivedOffer.map((offer) => {
        return (
          <div
            key={offer.id}
            className="receivedOffer border-r-8 d-flex full-w align-center"
          >
            <img src={offer.product.imageUrl} alt=""></img>
            <div className="justify-center d-flex flex-d-col">
              <p>{offer.product.title}</p>
              <div className="receivedOfferValue grayBackground border-r-8">
                <p>
                  Alınan Teklif: <b>{offer.offeredPrice}</b>
                </p>
              </div>
            </div>
            {offer.status === "offered" ? (
              <div className="d-flex receivedOfferButton align-center">
                <button
                  onClick={() => receivedOfferAccept(offer.id)}
                  className="bg4b9ce2 colorf0f8ff border-r-8"
                >
                  Onayla
                </button>
                <button
                  onClick={() => receivedOfferReject(offer.id)}
                  className="colorf0f8ff border-r-8 bgf77474"
                >
                  Reddet
                </button>
              </div>
            ) : offer.status === "accepted" ? (
              <p className="color4b9ce2">Onaylandı</p>
            ) : (
              <p className="colorf77474">Reddedildi</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ReceivedOffer;
