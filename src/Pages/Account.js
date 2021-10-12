import React from "react";
import "../Account.css";
import profile from "../Assets/Profile-image.png";
import Header from "../Components/Header";

function Account(props) {
  function receivedOfferAccept(id1, id2, id4) {
    document.getElementById(id2).classList.add("d-none");
    document.getElementById(id1).classList.add("d-none");
    document.getElementById(id4).classList.remove("d-none");
  }
  function receivedOfferReject(id1, id2, id3) {
    document.getElementById(id2).classList.add("d-none");
    document.getElementById(id1).classList.add("d-none");
    document.getElementById(id3).classList.remove("d-none");
  }
  return (
    <div className="grayBackground">
      <Header />
      <div className="d-flex profileDetail whiteBackground border-r-8 width80 align-center">
        <img src={profile} alt=""></img>
        <p>aysegul@example.com</p>
      </div>
      <div className="width80 whiteBackground offersArea">
        <div className="d-flex">
          <p>Teklif Aldıklarım</p>
          <p>Teklif Verdiklerim</p>
        </div>
        <div>
          {props.getProductList.map((product) => {
            return (
              <div
                key={product.id}
                className="receivedOffer border-r-8 d-flex full-w"
              >
                <img src={product.imageUrl} alt=""></img>
                <div className="justify-center d-flex flex-d-col">
                  <p>{product.title}</p>
                  <div className="receivedOfferValue grayBackground border-r-8">
                    <p>
                      Alınan Teklif: <b>119,90</b>
                    </p>
                  </div>
                </div>
                <div className="d-flex receivedOfferButton align-center">
                  <button
                    id={product.id + 1}
                    onClick={() =>
                      receivedOfferAccept(
                        product.id + 1,
                        product.id + 2,
                        product.id + 4
                      )
                    }
                    className="bg4b9ce2 colorf0f8ff border-r-8"
                  >
                    Onayla
                  </button>
                  <button
                    id={product.id + 2}
                    onClick={() =>
                      receivedOfferReject(
                        product.id + 1,
                        product.id + 2,
                        product.id + 3
                      )
                    }
                    className="colorf0f8ff border-r-8 bgf77474"
                  >
                    Reddet
                  </button>
                  <p id={product.id + 3} className="d-none colorf77474">
                    Reddedildi
                  </p>
                  <p id={product.id + 4} className="d-none color4b9ce2">
                    Onaylandı
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Account;
