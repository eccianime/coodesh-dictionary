import React from "react";
import { render } from "@testing-library/react-native";
import Provider from "../../../src/config/Provider";
import { Loading } from "../../../src/components";
import theme from "../../../src/config/theme";

describe("Loading Component", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <Provider>
        <Loading />
      </Provider>
    );

    const loadingText = getByText("Loading...");
    expect(loadingText).toBeTruthy();

    const spinner = getByTestId("spinner");
    expect(spinner).toBeTruthy();

    const center = getByTestId("center");
    expect(center.props.style.backgroundColor).toEqual("rgba(255,255,255,.9)");
  });

  it("uses the primary color for Spinner and Text", () => {
    const { getByTestId } = render(
      <Provider>
        <Loading />
      </Provider>
    );

    const spinner = getByTestId("spinner");
    expect(spinner.props.color).toEqual(theme.colors.primary[200]);

    const loadingText = getByTestId("loading-text");
    expect(loadingText.props.style.color).toEqual(theme.colors.primary[200]);
  });
});
