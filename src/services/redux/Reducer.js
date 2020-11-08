const initialState = {
  visibility: 'ALL',
  cards: [
    {
      text: 'Card 1',
      id: 1,
    },
    {
      text: 'Card 2',
      id: 2,
    },
    {
      text: 'Card 3',
      id: 3,
    },
  ],
};

function reducerList(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            text: action.payload,
            id: action.id,
          },
        ],
      };

    case 'DELETE_TODO':
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };

    default:
      return state;
  }
}

export default reducerList;
