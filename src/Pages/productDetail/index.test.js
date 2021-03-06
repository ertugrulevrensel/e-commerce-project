import React from "react";
import { render } from "@testing-library/react";
import ProductDetail from ".";
import { Provider } from "react-redux";
import App from "../../App";
import store from "../../store/store";

describe("productDetail Page", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <ProductDetail />
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
