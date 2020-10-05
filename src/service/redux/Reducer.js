const initialCard = {
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

function reducer(state = initialCard, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        card: [
          ...state.card,
          {
            text: action.payload,
            id: action.id,
          },
        ],
      };
    default:
      return state;
  }
}

export default reducer;
