import {
  render,
  fireEvent,
  waitFor,
  queryByTitle,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../store/index.js";
import App from "../app.js";

describe("___Colmun Tests___", () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const addColumnButton = queryByTitle("addColumnBtn");
  fireEvent.click(addColumnButton);
  const columnInputName = queryByTitle("columnInputName");
  const columnInputDesc = queryByTitle("columnInputDesc");

  it("should open a new column and input fields should be valid", () => {
    expect(columnInputDesc).toBeTruthy();
    expect(columnInputName).toBeTruthy();
  });

  it("column should take input from the user and create a new column", () => {
    fireEvent.change(columnInputName, { target: { value: "New Column" } });
    fireEvent.change(columnInputDesc, { target: { value: "New Description" } });
    const addColumnBtn = queryByTitle('addColumnBtn');
    
  });
});
