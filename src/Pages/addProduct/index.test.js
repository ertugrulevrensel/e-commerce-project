import React from "react";
import { render } from "@testing-library/react";
import AddProduct from ".";
import { Provider } from "react-redux";
import App from "../../App";
import store from "../../store/store";

describe("addProduct Page", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <AddProduct />
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
