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

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_CARD":
      return {
        items: [...state.items, payload],
      };

    case "REMOVE_CART":
      let newItems = state.items.filter((item) => item !== payload);
      return { ...state, items: newItems, cardCount: state.cardCount - 1 };

    case "MODIFY_CARD":
      let updatedItems = state.items.map((item) => {
        item === payload ? item = payload : null});
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

export const deleteCard = (item) => {
  return {
    type: "REMOVE_CARD",
    payload: item,
  };
};

export const modifyCard = (item) => {
  return {
    type: "MODIFY_CARD",
    payload: item
  };
};  
