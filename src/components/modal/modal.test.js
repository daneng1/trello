import {
  render,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/index.js";
import Modal from "./modal.js";

describe("___Colmun Tests___", () => {
  const { queryByTitle, getByTestId } = render(
    <Provider store={store}>
      <Modal 
      innerText="New Column"
      title="Column Name"
      description="Description"
      buttonTitle="Submit"
      />
    </Provider>
  );
  
  
  it("should open a new column and input fields should be valid", () => {
    const inputName = queryByTitle("inputName");
    const inputDesc = queryByTitle("inputDesc");
    expect(inputDesc).toBeTruthy();
    expect(inputName).toBeTruthy();
  });

  it("should be able to add text to the input fields", () => {
    const inputName = queryByTitle("inputName");
    const inputDesc = queryByTitle("inputDesc");
    fireEvent.change(inputName, {target: {value: "Test Title"}});
    expect(inputName).toBe("Test Title");
    fireEvent.change(inputDesc, {target: {value: "Test Description"}});
    expect(inputDesc).toBe("Test Description");
  })
});
