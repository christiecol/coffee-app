const initialState = {
  user: {},
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case "RESPONSE_USER": {
      return {
        ...state,
        user: action.email,
      };
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state) => state.user;
