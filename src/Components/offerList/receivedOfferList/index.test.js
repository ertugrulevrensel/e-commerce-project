import React from "react";
import { render } from "@testing-library/react";
import ReceivedOffer from ".";
import { Provider } from "react-redux";
import App from "../../../App";
import Account from "../../../Pages/account";
import store from "../../../store/store";

describe("receivedList Components", () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it("should be render", () => {
    const { container } = render(
      <Provider store={store}>
        <App>
          <Account>
            <ReceivedOffer />
          </Account>
        </App>
      </Provider>
    );

    expect(container.innerHTML).not.toEqual("");
  });
});
