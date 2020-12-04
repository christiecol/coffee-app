const initialState = {
  pending: false,
  origins: [],
  error: null,
};

export default function AllOriginsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_ORIGINS": {
      return {
        ...state,
        pending: true,
      };
    }

    case "RESPONSE_ALL_ORIGINS": {
      console.log(state);
      return {
        ...state,

        origins: action.payload,
        pending: false,
      };
    }

    case "RESPONSE_ALL_ORIGINS_ERROR": {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
}

export const getOrigins = (state) => state.origins;
export const getOriginsPending = (state) => state.pending;
export const getOriginsError = (state) => state.error;
