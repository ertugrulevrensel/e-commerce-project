import React from "react";
import { render } from "@testing-library/react";
import SignUp from ".";
import { Provider } from "react-redux";
import App from "../../../App";
import store from "../../../store/store";

describe("signUp Page", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <SignUp />
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
