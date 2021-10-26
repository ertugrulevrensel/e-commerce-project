import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../../App";
import store from "../../store/store";
import NotFound from ".";

describe("notFound Page", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <NotFound />
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
