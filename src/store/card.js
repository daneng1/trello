let initialState = {
  items: [
    {
      title: "CARD 1",
      description: "This is a test card",
      column_id: "snm,dbflkwufha;hLKGkjhFGV",
      _id: "nabdslakgailDGUwaukev"
    },
    {
      title: "CARD 2",
      description: "This is a test column",
      column_id: "FDSDGJHSFKLGb&T^*^&*",
      _id: "samnhedvkuDFKVCWA"
    }
  ],
};

export default function cardReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_CARD":
      return {
        items: [...state.items, payload],
      };

    case "REMOVE_CARD":
      let newItems = state.items.filter((item) => item._id !== payload);
      return { ...state, items: newItems };

    case "MODIFY_CARD":
      let updatedItems = state.items.map((item) => {
        item._id === payload._id ? item = payload : null});
        console.log(updatedItems);
      return { ...state, items: updatedItems };

    default:
      return state;
  }
}

export const addCard = (name) => {
  return {
    type: "ADD_CARD",
    payload: name,
  };
};

export const deleteCard = (id) => {
  return {
    type: "REMOVE_CARD",
    payload: id,
  };
};

export const updateCard = (item) => {
  return {
    type: "MODIFY_CARD",
    payload: item
  };
};  
