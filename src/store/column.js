let initialState = {
  items: [],
};

export default function columnReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "GET_COLUMNS":
      return items;

    case "ADD_COLUMN":
      return {
        items: [...state.items, payload],
      };

    case "REMOVE_COLUMN":
      let newItems = state.items.filter((item) => item._id !== payload);
      return { ...state, items: newItems, columnCount: state.columnCount - 1 };

    case "MODIFY_COLUMN":
      let updatedItems = state.items.map((item) => item._id === payload._id ? item = payload : null);
        // if(item._id === payload._id) {
        //   item.title = payload.title;
        //   item.description = payload.description;
        // }
      console.log(updatedItems);
      return {...state, items: updatedItems };

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

export const updateColumn = (item) => {
  return {
    type: "MODIFY_COLUMN",
    payload: item,
  };
};  

export const getColumns = () => {
  return {
    type: "GET_COLUMNS",
  };
};
