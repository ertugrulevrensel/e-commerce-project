import React, { useState } from "react";
import uploads from "../Assets/upload.png";
import "../FileUpload.css";
import succes from "../Assets/succes.png";
import fail from "../Assets/fail.png";
import axios from "axios";

function FileUpload(props) {
  const [getUploadStatus, setUploadStatus] = useState("Yükleme Başarısız.");
  const initApp = () => {
    const droparea = document.querySelector(".uploadArea");

    const active = () => droparea.classList.add("green-border");

    const inactive = () => droparea.classList.remove("green-border");

    const prevents = (e) => e.preventDefault();

    ["dragenter", "dragover", "dragleave", "drop"].forEach((evtName) => {
      droparea.addEventListener(evtName, prevents);
    });

    ["dragenter", "dragover"].forEach((evtName) => {
      droparea.addEventListener(evtName, active);
    });

    ["dragleave", "drop"].forEach((evtName) => {
      droparea.addEventListener(evtName, inactive);
    });

    droparea.addEventListener("drop", getDropFile);
  };

  document.addEventListener("DOMContentLoaded", initApp);
  function postFile(file) {
    if (file.length > 1) {
      setUploadStatus("Birden fazla dosya yüklemeyiniz.");
      document.getElementById("failUpload").classList.remove("d-none");
      console.log("hata1");
    } else if (file[0].size > 1024 * 400) {
      setUploadStatus("Dosya boyutu en fazla 100kb olmalıdır.");
      document.getElementById("failUpload").classList.remove("d-none");
      console.log("hata2");
    } else if (
      !(file[0].type === "image/jpeg" || file[0].type === "image/png")
    ) {
      setUploadStatus("PNG veya JPEG formatında dosya yükleyiniz.");
      document.getElementById("failUpload").classList.remove("d-none");
      console.log("hata3");
    } else {
      console.log(file);
      document.getElementById("failUpload").classList.add("d-none");
      axios("http://bootcampapi.techcs.io/api/fe/v1/file/upload/image", file, {
        methot: "POST",
        headers: {
          Authorization: `Bearer ${props.getToken}`,
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => console.log(response));
    }
  }
  function getInputFile() {
    postFile(document.getElementById("inputElement").files);
  }

  const getDropFile = (e) => {
    const file = e.dataTransfer.files;
    postFile(file);
  };
  return (
    <div className="p-relative">
      <section className="d-flex uploadArea full-w border-r-8 flex-d-col align-center">
        <img className="uploadImg" src={uploads} alt=""></img>
        <div className="d-flex flex-d-col align-center uploadFont">
          <p>
            <b>Sürükleyip bırakarak yükle</b>
          </p>
          <p>veya</p>
        </div>
        <label className="inputElementButton c-pointer" htmlFor="inputElement">
          Görsel Seçin
        </label>
        <input
          id="inputElement"
          className="d-none full-w full-h"
          type="file"
          onChange={() => getInputFile()}
        ></input>
        <p className="uploadTypeText">PNG ve JPEG Dosya boyutu: max. 400kb</p>
      </section>
      <div
        id="succesAddProduct"
        className="d-flex d-none p-fixed succesBuyModal border-r-8 align-center justify-center"
      >
        <img src={succes} alt=""></img>
        <p>Teklif Verildi.</p>
      </div>
      <div
        id="failUpload"
        className="d-flex d-none p-fixed failSignModal border-r-8 align-center justify-center"
      >
        <img src={fail} alt=""></img>
        <p>{getUploadStatus}</p>
      </div>
    </div>
    // <div class="droparea">
    //   <i class="far fa-images"></i>
    //   <p>Drop your .png or .jpg files here!</p>
    //   <p>
    //     <small>Up to 20 images, No max file size.</small>
    //   </p>
    // </div>
  );
}

export default FileUpload;
