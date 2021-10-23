import React, { useState, useEffect } from "react";
import uploads from "../Assets/upload.png";
import "./FileUpload.scss";
import succes from "../Assets/succes.png";
import fail from "../Assets/fail.png";
import axios from "axios";
import deleteImg from "../Assets/delete.svg";
import { connect } from "react-redux";

function FileUpload(props) {
  const [getUploadStatus, setUploadStatus] = useState("Yükleme Başarısız.");
  const [getProgressPercent, setProgressPercent] = useState(0);

  function deleteImage() {
    document.getElementById("viewUploadImg").classList.add("d-none");
    document.getElementById("uploadSection").classList.remove("d-none");
    document.getElementById("inputElement").value = "";
    document.getElementById("progressBarArea").classList.add("d-none");
    document.getElementById("uploadDetail").classList.remove("d-none");
  }

  const initApp = () => {
    const droparea = document.getElementById("uploadSection");
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
  useEffect(() => {
    initApp();
  }, ""); // eslint-disable-line

  function postFile(file) {
    if (file.length > 1) {
      setUploadStatus("Birden fazla dosya yüklemeyiniz.");
      document.getElementById("failUpload").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("failUpload").classList.add("d-none");
      }, 3000);
    } else if (file[0].size > 1024 * 400) {
      setUploadStatus("Dosya boyutu en fazla 100kb olmalıdır.");
      document.getElementById("failUpload").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("failUpload").classList.add("d-none");
      }, 3000);
    } else if (
      !(file[0].type === "image/jpeg" || file[0].type === "image/png")
    ) {
      setUploadStatus("PNG veya JPEG formatında dosya yükleyiniz.");
      document.getElementById("failUpload").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("failUpload").classList.add("d-none");
      }, 3000);
    } else {
      document.getElementById("failUpload").classList.add("d-none");
      var percentCompleted = 0;
      function config(progressEvent) {
        percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgressPercent(percentCompleted);
        if (percentCompleted === 100) {
          document.getElementById("uploadSection").classList.add("d-none");
          document.getElementById("progressBarArea").classList.add("d-none");
          document.getElementById("uploadDetail").classList.add("d-none");
          document.getElementById("viewUploadImg").classList.remove("d-none");
        } else {
          document.getElementById("uploadDetail").classList.add("d-none");
          document.getElementById("uploadSection").classList.remove("d-none");
          document.getElementById("viewUploadImg").classList.add("d-none");
          document.getElementById("progressBarArea").classList.remove("d-none");
          document.getElementById("progressBlue").style.width =
            percentCompleted;
        }
      }
      const formData = new FormData();
      formData.append("file", file[0], file[0].name);
      axios
        .post(
          "https://bootcampapi.techcs.io/api/fe/v1/file/upload/image",
          formData,
          // config,
          {
            headers: {
              Authorization: `Bearer ${props.token}`,
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: config,
          }
        )
        .then((response) => {
          props.setImageUrl(response.data.url);
          document
            .getElementById("viewImg")
            .setAttribute("src", response.data.url);
        })
        .catch((err) => {
          setUploadStatus("Görsel Yüklenemedi.");
          document.getElementById("failUpload").classList.remove("d-none");
        });
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
      <section
        id="uploadSection"
        className="d-flex uploadArea full-w border-r-8 flex-d-col align-center"
      >
        <div id="uploadDetail" className="d-flex flex-d-col align-center">
          <img className="uploadImg" src={uploads} alt=""></img>
          <div className="d-flex flex-d-col align-center uploadFont">
            <p>
              <b>Sürükleyip bırakarak yükle</b>
            </p>
            <p>veya</p>
          </div>
          <label
            className="inputElementButton c-pointer"
            htmlFor="inputElement"
          >
            Görsel Seçin
          </label>
          <input
            id="inputElement"
            className="d-none full-w full-h"
            type="file"
            onChange={() => getInputFile()}
            required
          ></input>
          <p className="uploadTypeText">PNG ve JPEG Dosya boyutu: max. 400kb</p>
        </div>
        <div
          id="progressBarArea"
          className="d-none full-w d-flex flex-d-col justify-center align-center"
        >
          <p>%{getProgressPercent}</p>
          <div className="progressBar">
            <div
              id="progressBlue"
              style={{ width: `${getProgressPercent}%` }}
            ></div>
          </div>
          <p>Yükleniyor</p>
        </div>
      </section>
      <div id="viewUploadImg" className="d-none d-flex p-relative">
        <img id="viewImg" className="border-r-8" src="" alt=""></img>
        <img
          src={deleteImg}
          alt=""
          onClick={() => deleteImage()}
          className="deleteImgIcon c-pointer"
        ></img>
      </div>

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
  );
}

const mapStatetoProps = (state) => ({
  token: state.token,
});
export default connect(mapStatetoProps)(FileUpload);
