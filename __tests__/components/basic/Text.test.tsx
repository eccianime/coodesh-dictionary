import { render } from "@testing-library/react-native";
import { Text } from "../../../src/components";
import Provider from "../../../src/config/Provider";
import { FONTS } from "../../../src/config/theme";

beforeAll(() => {
  console.warn = jest.fn();
});

const TextDefaultProps = {
  backgroundColor: undefined,
  color: "#212121",
  fontFamily: "Urbanist_500Medium",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: "400",
  letterSpacing: 0,
  lineHeight: 21,
  textDecorationLine: undefined,
};

describe("Text", () => {
  it("renders without crashing", () => {
    render(
      <Provider>
        <Text />
      </Provider>
    );
  });

  it("renders with correct props", () => {
    const props = {
      children: "Hello world",
      style: { color: "red" },
    };
    const { getByText } = render(
      <Provider>
        <Text {...props} />
      </Provider>
    );
    const text = getByText(props.children);
    expect(text.props.style).toEqual([TextDefaultProps, props.style]);
  });

  it("renders with correct font size", () => {
    const { getByTestId } = render(
      <Provider>
        <Text />
      </Provider>
    );
    const text = getByTestId("text");
    // sm equals 14
    expect(text.props.style.fontSize).toEqual(14);
  });

  it("renders with correct font family", () => {
    const { getByTestId } = render(
      <Provider>
        <Text fontFamily={"bold"} />
      </Provider>
    );
    const text = getByTestId("text");
    expect(text.props.style.fontFamily).toEqual(FONTS.Bold);
  });

  it("does not allow font scaling", () => {
    const { getByTestId } = render(
      <Provider>
        <Text />
      </Provider>
    );
    const text = getByTestId("text");
    expect(text.props.allowFontScaling).toEqual(false);
  });
});
