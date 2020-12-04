import React from "react";
import { FetchOrigins } from "../../components/origins/FetchOrigins";

import { getOrigins } from "../../redux/reducers/AllOriginsReducer";
console.log(getOrigins);

export const OriginsPage = () => {
  return (
    <div>
      <FetchOrigins />
    </div>
  );
};
