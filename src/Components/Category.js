import React from "react";
import "../Category.css";

function Category() {
  var category = [
    { title: "ayakkabı", id: "62pL2inlLwf8zwJAOram" },
    { title: "tişört", id: "LgFcz5mxlMCGbMG0tBkQ" },
    { id: "TxgNNs9rIRtnAoKxpm74", title: "pantolon" },
    { title: "polar", id: "YEgm4zGr3xHKNjp62SqK" },
    { id: "YHYl2X5OtRhppR6ubAZD", title: "kazak" },
    { title: "sweatshirt", id: "ffEeQi75i5d9K6D9sX1s" },
    { id: "gUPSzB5uINdZgw961FVy", title: "şort" },
    { title: "mont", id: "j9UBgBVEbInp8wHL5xVl" },
    { id: "o3Ek85JOEKhq71a635Vk", title: "gömlek" },
  ];
  return (
    <ul className="category d-flex space-between">
      <li className="checkedLi">Hepsi</li>
      {category.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
      <li>Diğer</li>
    </ul>
  );
}

export default Category;
