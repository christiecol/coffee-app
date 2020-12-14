const initialState = {
  user: {},
};

export default function UsersReducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "RESPONSE_USER": {
      return {
        ...state,
        user: action.email,
        favourites: action.favourites,
        token: action.token,
      };
    }
    case "ADD_TO_FAVOURITES": {
      console.log(action);
      newState.favourites.push(action.recipe);
      return newState;
    }

    case "REMOVE_FROM_FAVOURITES": {
      console.log(action);
      console.log(action.recipe);
      const idIndex = newState.favourites.indexOf(action.recipe);
      console.log(idIndex);
      newState.favourites.splice(idIndex);
      return newState;
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state) => {
  console.log(state);
  return state.users.user;
};
