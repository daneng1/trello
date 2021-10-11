import {
  render,
  fireEvent,
  waitFor,
  queryByTitle,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/index.js";
import Board from "./board.js";

describe("___Colmun Tests___", () => {
  const { queryByTitle, getByTestId } = render(
    <Provider store={store}>
      <Board id='board'/>
    </Provider>
  );
  
  const addColumnButton = queryByTitle("addColumnBtn");
  fireEvent.click(addColumnButton);
  const inputName = getByTestId("inputName");
  const inputDesc = getByTestId("inputDesc");
  
  it("should open a new column and input fields should be valid", () => {
    expect(inputDesc).toBeTruthy();
    expect(inputName).toBeTruthy();
  });

  it("column should take input from the user and create a new column", () => {
    fireEvent.change(inputName, { target: { value: "New Column" } });
    fireEvent.change(inputDesc, { target: { value: "New Description" } });
    // const addColumnBtn = queryByTitle('addColumnBtn');
    expect(inputName.value).toBe('New Column');
    expect(inputDesc.value).toBe('New Description');
  });
});
