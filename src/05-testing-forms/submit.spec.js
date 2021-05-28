const { render, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { ProfileForm } = require("./submit");

describe("ProfileForm", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(<ProfileForm />);

    expect(getByLabelText("Имя:")).toBeInTheDocument();
    expect(getByLabelText("Фамилия:")).toBeInTheDocument();
    expect(getByText("Отправить")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("collects name and surname", async () => {
      const formSubmit = jest.fn().mockImplementation((data) => data);

      const { getByText, getByLabelText } = render(
        <ProfileForm formSubmit={formSubmit} />
      );

      fireEvent.input(getByLabelText("Имя:"), { target: { value: "Foo" } });
      fireEvent.input(getByLabelText("Фамилия:"), { target: { value: "Bar" } });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });

      expect(formSubmit).toBeCalledWith({
        name: "Foo",
        surname: "Bar",
      });
    });
  });
});