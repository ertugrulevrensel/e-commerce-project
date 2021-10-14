import { useHistory } from "react-router-dom";
import "../ProductList.css";
function ProductList(props) {
  let history = useHistory();
  function goDetail(id) {
    props.setID(id);
    history.push(`/product/${id}`);
  }

  return (
    <div className="d-grid productList">
      {props.getProductList.map((product) => {
        return (
          <div
            className="d-flex flex-d-col product border-r-8 c-pointer"
            onClick={() => goDetail(product.id)}
            key={product.id}
          >
            <div className="d-flex flex-d-col productImg">
              <img src={product.imageUrl} alt=""></img>
            </div>
            <div className="d-flex space-between">
              <p className="brand">
                <b>{product.brand.title}</b>
              </p>
              <div className="d-flex productColor">
                <b>Renk: </b> <p> {product.color.title}</p>
              </div>
            </div>
            <div className="productPrice">
              <b>{product.price} TL</b>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
