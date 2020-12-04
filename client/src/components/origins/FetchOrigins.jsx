import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  requestAllOrigins,
  responseAllOrigins,
  responseAllOriginsError,
} from "../../redux/actions/actions";

//selectors
import {
  getOrigins,
  getOriginsPending,
  getOriginsError,
} from "../../redux/reducers/AllOriginsReducer";

export const FetchOrigins = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllOrigins());
    console.log("hello");
    fetch("/api/origins")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          throw res.error;
        }
        console.log(responseAllOrigins);
        dispatch(responseAllOrigins(res.origins));
        return res.origins;
      })
      .catch((error) => {
        dispatch(responseAllOriginsError(error));
      });
  }, []);
  console.log(responseAllOrigins);

  return (
    <>
      <div>Hello</div>
    </>
  );
};
