let initialState = {
  items: [],
  columnCount: 0,
};

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
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
      return { ...state, items: newItems, payload };

    default:
      return state;
  }
}

export const addItem = (name) => {
  return {
    type: "ADD_COLUMN",
    payload: name,
  };
};

export const deleteItem = (item) => {
  return {
    type: "REMOVE_COLUMN",
    payload: item,
  };
};

export const resetCard = () => {
  return {
    type: "MODIFY_COLUMN",
  };
};  
