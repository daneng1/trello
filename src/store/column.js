let initialState = {
  items: [
    {
      title: "Column 1",
      description: "This is a test column",
      _id: "snm,dbflkwufha;hLKGkjhFGV"
    },
    {
      title: "Column 2",
      description: "This is a test column",
      _id: "FDSDGJHSFKLGb&T^*^&*"
    }
  ],
};

export default function columnReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_COLUMN":
      return {
        items: [...state.items, payload],
      };

    case "REMOVE_COLUMN":
      let newItems = state.items.filter((item) => item._id !== payload);
      return { ...state, items: newItems };

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

