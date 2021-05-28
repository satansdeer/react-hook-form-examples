const { render, fireEvent } = require("@testing-library/react");
const { CreditCardForm } = require("./normalization");

describe("CreditCardForm", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(<CreditCardForm />);

    expect(getByLabelText("Номер карты:")).toBeInTheDocument();
    expect(getByText("Отправить")).toBeInTheDocument();
  });

  describe("on card number change", () => {
    it("breaks the card number into groups of four digits", async () => {
      const { getByLabelText } = render(
        <CreditCardForm />
      );

      const ccInput = getByLabelText("Номер карты:");
      fireEvent.input(ccInput, { target: { value: "1234123412341234" } });

      expect(ccInput.value).toEqual("1234 1234 1234 1234");
    });

    it("limits the card number by 19 digits", async () => {
      const { getByLabelText } = render(
        <CreditCardForm />
      );

      const ccInput = getByLabelText("Номер карты:");
      fireEvent.input(ccInput, { target: { value: "12341234123412341234" } });

      expect(ccInput.value).toEqual("1234 1234 1234 1234");
    });
  });
});