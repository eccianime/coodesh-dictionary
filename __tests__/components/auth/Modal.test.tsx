import { render, waitFor } from "@testing-library/react-native";
import React from "react";
import { Provider as RRProvider } from "react-redux";

import configureStore from "redux-mock-store";

import { Modal } from "../../../src/components";
import Provider from "../../../src/config/Provider";

beforeAll(() => {
  console.warn = jest.fn();
});

describe("Modal", () => {
  const mockStore = configureStore([]);

  it("Modal is visible when isVisible is true", () => {
    const { getByText } = render(
      <RRProvider store={mockStore({})}>
        <Provider>
          <Modal isVisible={true} text="Test Text" type="success" />
        </Provider>
      </RRProvider>
    );
    const modalText = getByText("Test Text");
    expect(modalText).toBeTruthy();
  });

  it("Modal is not visible when isVisible is false", () => {
    const { queryByText } = render(
      <RRProvider store={mockStore({})}>
        <Provider>
          <Modal isVisible={false} text="Test Text" type="success" />
        </Provider>
      </RRProvider>
    );
    const modalText = queryByText("Test Text");
    expect(modalText).toBeNull();
  });

  it('Modal displays success icon and text for type "success"', () => {
    const { getByTestId, getByText } = render(
      <RRProvider store={mockStore({})}>
        <Provider>
          <Modal isVisible={true} text="Success Text" type="success" />
        </Provider>
      </RRProvider>
    );
    const successIcon = waitFor(() => getByTestId("success-icon"));
    const successText = waitFor(() => getByText("Success!"));
    expect(successIcon).toBeTruthy();
    expect(successText).toBeTruthy();
  });

  it('Modal displays error icon and text for type "error"', () => {
    const { getByTestId, getByText } = render(
      <RRProvider store={mockStore({})}>
        <Provider>
          <Modal isVisible={true} text="Error Text" type="error" />
        </Provider>
      </RRProvider>
    );
    const errorIcon = waitFor(() => getByTestId("error-icon"));
    const errorText = waitFor(() => getByText("We got an Error!"));
    expect(errorIcon).toBeTruthy();
    expect(errorText).toBeTruthy();
  });
});
