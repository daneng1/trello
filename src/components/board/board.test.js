import {
  cleanup,
  render,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/index.js";
import Board from "./board.js";

describe.afterEach(cleanup);

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

});
