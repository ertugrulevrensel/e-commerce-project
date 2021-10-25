import React, { useEffect } from "react";
import "./Home.scss";
import Header from "../Components/Header";
import Banner from "../Assets/Banner.webp";
import Category from "../Components/Category";
import ProductList from "../Components/ProductList";
import { useParams } from "react-router-dom";
import gotoTopImg from "../Assets/go-up.png";
function Home() {
  let { categoryid } = useParams();
  useEffect(() => {
    if (categoryid === undefined) {
      //when the project is just started, all categories are selected
      document
        .getElementsByClassName("checkedLi")[0]
        ?.classList.remove("checkedLi");
      document.getElementById("allCategory").classList.add("checkedLi");
    } else {
      //if any category is selected, that category is displayed.
      document
        .getElementsByClassName("checkedLi")[0]
        ?.classList.remove("checkedLi");
      document.getElementById(`${categoryid}`)?.classList?.add("checkedLi");
    }
  }, [categoryid]);
  const toggleVisible = () => {
    //go to top button
    //visible when scrolled down 2000
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      document.getElementById("gotoTop")?.classList?.remove("d-none");
    } else if (scrolled <= 300) {
      document.getElementById("gotoTop")?.classList?.add("d-none");
    }
  };
  window.addEventListener("scroll", toggleVisible);
  function goTop() {
    //if click go top button, go top 0 with smooth effect
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="full-w">
      <Header />
      <div className="width80 homeBody">
        <div className="banner">
          <img className="border-r-8" src={Banner} alt=""></img>
        </div>
        <Category />
        <ProductList />
      </div>
      <img
        id="gotoTop"
        src={gotoTopImg}
        alt=""
        onClick={() => goTop()}
        className="p-fixed c-pointer d-none"
      ></img>
    </div>
  );
}
export default Home;
