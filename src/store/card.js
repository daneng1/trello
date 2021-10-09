let initialState = {
  items: [
    {
      title: "Column 1 CARD 1",
      description: "This is the description for this card.",
      column_id: "snm,dbflkwufha;hLKGkjhFGV",
      _id: "nabdslakgailDGUwaukev"
    },
    {
      title: "Column 2 CARD 1",
      description: "This is the description for this card.",
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

    case "MOVE_CARD":
      let updatedItems = state.items.map(item => item._id === payload[0] ? {...item, column_id:payload[1] } : item );
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

export const moveCard = (item) => {
  return {
    type: "MOVE_CARD",
    payload: item
  };
};  
