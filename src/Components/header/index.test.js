import React from "react";
import { render } from "@testing-library/react";
import Header from ".";
import { Provider } from "react-redux";
import App from "../../App";
import Home from "../../Pages/home";
import store from "../../store/store";

describe("Header Components", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <Home>
            <Header />
          </Home>
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
