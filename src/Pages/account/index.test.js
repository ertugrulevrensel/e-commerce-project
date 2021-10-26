import React from "react";
import { render } from "@testing-library/react";
import Account from ".";
import { Provider } from "react-redux";
import App from "../../App";
import store from "../../store/store";

describe("account Page", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <Account />
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
