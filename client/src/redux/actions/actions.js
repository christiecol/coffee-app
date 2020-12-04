//origins
export const requestAllOrigins = () => {
  return {
    type: "REQUEST_ALL_ORIGINS",
  };
};

export const responseAllOrigins = (origins) => {
  return {
    type: "RESPONSE_ALL_ORIGINS",
    origins,
  };
};

export const responseAllOriginsError = (error) => {
  return {
    type: "RESPONSE_ALL_ORIGINS_ERROR",
    error,
  };
};
