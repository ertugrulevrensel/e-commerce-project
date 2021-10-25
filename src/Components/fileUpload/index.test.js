import React from "react";
import { render } from "@testing-library/react";
import FileUpload from ".";
import { Provider } from "react-redux";
import App from "../../App";
import AddProduct from "../../Pages/addProduct";
import store from "../../store/store";

describe("FileUpload Components", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <AddProduct>
            <FileUpload />
          </AddProduct>
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
