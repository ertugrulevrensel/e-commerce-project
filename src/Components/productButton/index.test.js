import React from "react";
import { render } from "@testing-library/react";
import ProductButton from ".";
import { Provider } from "react-redux";
import App from "../../App";
import ProductDetail from "../../Pages/productDetail";
import store from "../../store/store";

describe("productButton Components", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <ProductDetail>
            <ProductButton />
          </ProductDetail>
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
