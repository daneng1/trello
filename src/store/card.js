let initialState = {
  items: [],
  cardCount: 0,
};

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_CARD":
      return {
        items: [...state.items, payload],
        cardCount: state.cardCount + 1,
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

export const addItem = (name) => {
  return {
    type: "ADD_CARD",
    payload: name,
  };
};

export const deleteItem = (item) => {
  return {
    type: "REMOVE_CARD",
    payload: item,
  };
};

export const modifyCard = () => {
  return {
    type: "MODIFY_CARD",
  };
};  
