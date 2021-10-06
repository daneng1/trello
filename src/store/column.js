let initialState = {
  items: [],
  columnCount: 0,
};

export default function columnReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "GET_COLUMNS":
      return items;

    case "ADD_COLUMN":
      return {
        items: [...state.items, payload],
        cardCount: state.columnCount + 1,
      };

    case "REMOVE_COLUMN":
      let newItems = state.items.filter((item) => item !== payload);
      return { ...state, items: newItems, columnCount: state.columnCount - 1 };

    case "MODIFY_COLUMN":
      let updatedItems = state.items.map((item) => {
        item === payload ? item = payload: null});
      return { ...state, items: updatedItems };

    default:
      return state;
  }
}

export const addColumn = (item) => {
  return {
    type: "ADD_COLUMN",
    payload: item,
  };
};

export const deleteColumn = (item) => {
  return {
    type: "REMOVE_COLUMN",
    payload: item,
  };
};

export const updateColumn = () => {
  return {
    type: "MODIFY_COLUMN",
  };
};  

export const getColumns = () => {
  return {
    type: "GET_COLUMNS",
  };
};
