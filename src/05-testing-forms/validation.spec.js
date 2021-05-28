const { render, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { ProfileFormWithValidation } = require("./validation");

describe("ProfileFormWithValidation", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(<ProfileFormWithValidation />);

    expect(getByLabelText("Имя:")).toBeInTheDocument();
    expect(getByLabelText("Фамилия:")).toBeInTheDocument();
    expect(getByLabelText("Возраст:")).toBeInTheDocument();
    expect(getByText("Отправить")).toBeInTheDocument();
  })

  describe("on submit", () => {
    it("validates that firstName is filled in", async () => {
      const { getByText } = render(<ProfileFormWithValidation />); 

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });
      expect(getByText("Имя обязательно к заполнению")).toBeInTheDocument();
    })
    it("validates that firstName has less than 20 symbols", async () => {
      const { getByText, getByLabelText } = render(<ProfileFormWithValidation />); 

      fireEvent.input(getByLabelText("Имя:"), { target: { value: "abcdefghijklmonpqrstuvwxyz" } });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });

      expect(getByText("Имя может сожержать не больше 20 символов")).toBeInTheDocument();
    })
    it("validates that lastName has only latin characters", async () => {
      const { getByText, getByLabelText } = render(<ProfileFormWithValidation />); 
      fireEvent.input(getByLabelText("Фамилия:"), { target: { value: "123" } });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });
      
      expect(getByText("Фамилия может сожержать только буквы латинского алфавита")).toBeInTheDocument();
    })

    it("validates that age is bigger than 18", async () => {
      const { getByText, getByLabelText } = render(<ProfileFormWithValidation />); 
      fireEvent.input(getByLabelText("Возраст:"), { target: { value: "3" } });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });
      
      expect(getByText("Возраст должен быть больше 18")).toBeInTheDocument();
    })

    it("validates that age is smaller than 99", async () => {
      const { getByText, getByLabelText } = render(<ProfileFormWithValidation />); 
      fireEvent.input(getByLabelText("Возраст:"), { target: { value: "123" } });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });
      
      expect(getByText("Возраст должен быть меньше 99")).toBeInTheDocument();
    })
  })
})