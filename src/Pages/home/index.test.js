import React from "react";
import { render } from "@testing-library/react";
import Home from ".";
import { Provider } from "react-redux";
import App from "../../App";
import store from "../../store/store";

describe("FileUpload Components", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <Home />
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
