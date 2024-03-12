const initialState = {
  favorites: [], // Fix the typo here
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // Fix the typo here
      };
    default:
      return state;
  }
};

export default recipeReducer;
