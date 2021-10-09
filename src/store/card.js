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

    case "MOVE_CARD":
      console.log('update payload', payload);
      let updatedItems = state.items.map(item => item._id === payload[0] ? {...item, column_id:payload[1] } : item );
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

export const moveCard = (item) => {
  return {
    type: "MOVE_CARD",
    payload: item
  };
};  
