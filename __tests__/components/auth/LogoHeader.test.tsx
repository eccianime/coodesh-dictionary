import { render } from "@testing-library/react-native";
import { LogoHeader } from "../../../src/components";
import Provider from "../../../src/config/Provider";

beforeAll(() => {
  console.warn = jest.fn();
});

describe("LogoHeader", () => {
  it("LogoHeader renders correctly", () => {
    const { getByTestId } = render(
      <Provider>
        <LogoHeader />
      </Provider>
    );
    const logoHeader = getByTestId("logo-header");
    expect(logoHeader).toBeTruthy();
  });

  it("LogoHeader contains LogoSVG", () => {
    const { getByTestId } = render(
      <Provider>
        <LogoHeader />
      </Provider>
    );
    const logoSVG = getByTestId("logo-svg");
    expect(logoSVG).toBeTruthy();
  });

  it("LogoHeader contains WaveSVG", () => {
    const { getByTestId } = render(
      <Provider>
        <LogoHeader />
      </Provider>
    );
    const waveSVG = getByTestId("wave-svg");
    expect(waveSVG).toBeTruthy();
  });
});
