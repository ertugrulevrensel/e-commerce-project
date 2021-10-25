import React from "react";
import { render } from "@testing-library/react";
import Category from ".";
import { Provider } from "react-redux";
import App from "../../App";
import Home from "../../Pages/Home";
import store from "../../store/store";

describe("Category Components", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <Home>
            <Category />
          </Home>
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
