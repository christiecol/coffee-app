const initialState = {
  user: { favourites: [] },
};

export default function UsersReducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "RESPONSE_USER": {
      console.log("RESPONSEUSER", action.email);
      return {
        ...state,
        user: action.email,
        favourites: action.favourites,
        token: action.token,
      };
    }
    case "ADD_TO_FAVOURITES": {
      try {
        console.log("NEWSTATEFAVS", newState.favourites);
        newState.user.favourites.push(action.recipe);
        console.log("NEWSTATE", newState);
        // console.log("NEWSTATEFAV", newState.favourites);
      } catch (err) {
        console.log(err);
      }
      return newState;
    }

    case "REMOVE_FROM_FAVOURITES": {
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

export const getFav = (state) => {
  return state.favourites;
};
