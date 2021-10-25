import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getReceivedOfferList } from "../../../actions";

function ReceivedOffer(props) {
  let history = useHistory();
  function goProductDetail(id) {
    //if clicked any product name or image, go this product detail page
    history.push(`/product/${id}`);
  }
  function receivedOfferAccept(id) {
    //if click accept button, call accept process
    var url =
      "https://bootcampapi.techcs.io/api/fe/v1/account/accept-offer/" + id;
    fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify(id),
    }).then((response) => {
      //if response is success, show success notification and refresh received offer list
      if (response.status === 201 || response.status === 200) {
        document.getElementById("failAcceptOffer").classList.add("d-none");
        document.getElementById("succesBuy").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("succesBuy").classList.add("d-none");
        }, 3000);
        props.getReceivedOfferList(props.token);
        props.setStatus("Teklif Kabul Edildi.");
      } else if (response.status === 401) {
        //if response is fail, show fail notification
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failAcceptOffer").classList.add("d-none");
        }, 3000);
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Lütfen Giriş Yapınız.");
      } else {
        //if response is fail, show fail notification
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failAcceptOffer").classList.add("d-none");
        }, 3000);
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Teklif Kabul Edilemedi.");
      }
    });
  }
  function receivedOfferReject(id) {
    //if click reject button, call reject process
    var url =
      "https://bootcampapi.techcs.io/api/fe/v1/account/reject-offer/" + id;
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify(id),
    }).then((response) => {
      //if response is success, show success notification and refresh received offer list
      if (response.status === 201 || response.status === 200) {
        document.getElementById("failAcceptOffer").classList.add("d-none");
        document.getElementById("succesBuy").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("succesBuy").classList.add("d-none");
        }, 3000);
        props.setStatus("Teklif Reddedildi");
        props.getReceivedOfferList(props.token);
      } else if (response.status === 401) {
        //if response is fail, show fail notification
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failAcceptOffer").classList.add("d-none");
        }, 3000);
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Lütfen Giriş Yapınız.");
      } else {
        //if response is fail, show fail notification
        document.getElementById("failAcceptOffer").classList.remove("d-none");
        setTimeout(() => {
          document.getElementById("failAcceptOffer").classList.add("d-none");
        }, 3000);
        document.getElementById("succesBuy").classList.add("d-none");
        props.setStatus("Teklif Red Edilemedi.");
      }
    });
  }
  return (
    <div id="receivedOffers">
      {props.receivedOfferList.length === 0 ? (
        <>
          <div>Aldığınız bir teklif bulunamadı.</div>
        </>
      ) : (
        <>
          {props.receivedOfferList?.map((offer) => {
            return (
              <div
                key={offer.id}
                className="receivedOffer border-r-8 d-flex full-w align-center"
              >
                <div className="d-flex full-w">
                  <img
                    className="c-pointer border-r-8"
                    onClick={() => goProductDetail(offer.product.id)}
                    src={offer.product.imageUrl}
                    alt=""
                  ></img>
                  <div className="pad15">
                    <p
                      className="c-pointer"
                      onClick={() => goProductDetail(offer.product.id)}
                    >
                      {offer.product.title}
                    </p>
                    <div className="receivedOfferValue d-flex grayBackground border-r-8">
                      <p>
                        Alınan Teklif:{" "}
                        <b>{Number(offer.offeredPrice.toFixed(3))}</b>
                      </p>
                    </div>
                  </div>
                </div>
                {offer?.status === "offered" && !(offer?.isSold === "sold") ? (
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
                ) : offer?.status === "accepted" || offer?.isSold === "sold" ? (
                  <p className="color4b9ce2">Onaylandı</p>
                ) : (
                  <p className="colorf77474">Reddedildi</p>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
const mapStatetoProps = (state) => ({
  receivedOfferList: state.receivedOfferList,
  token: state.token,
});
export default connect(mapStatetoProps, { getReceivedOfferList })(
  ReceivedOffer
);
