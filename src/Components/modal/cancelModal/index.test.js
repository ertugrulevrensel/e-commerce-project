import React from "react";
import { render } from "@testing-library/react";
import CancelModal from ".";
import { Provider } from "react-redux";
import App from "../../../App";
import ProductDetail from "../../../Pages/productDetail";
import store from "../../../store/store";

describe("cancelModal Components", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <ProductDetail>
            <CancelModal />
          </ProductDetail>
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
