const { render, fireEvent } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
const { act } = require("react-dom/test-utils");
const { ImageUploadForm } = require("./files");

describe("ImageUploadForm", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(<ImageUploadForm />);

    expect(getByLabelText("Картинка:")).toBeInTheDocument();
    expect(getByText("Отправить")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("sends the picture file to the uploadData function", async () => {
      const uploadData = jest.fn();
      const file = new File(["hello"], "test.png", { type: "image/png" });

      const { getByText, getByLabelText } = render(
        <ImageUploadForm uploadData={uploadData} />
      );

      userEvent.upload(getByLabelText("Картинка:"), file)
      
      await act(async () => {
        fireEvent.click(getByText("Отправить"))
      })

      expect(uploadData.mock.calls[0][0]["picture"]).toContain(file)
    });
  });
});