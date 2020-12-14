import React from "react";
import styled from "styled-components";

import { HomePageItems } from "./HomePageItems";
import Banner from "../../images/tyler-nix-6sfy2ENBODc-unsplash.jpg";

export const HomePage = () => {
  return (
    <Background>
      <HomePageItems />
    </Background>
  );
};

const Background = styled.div`
  /* background-image: url(${Banner});
  background-size: cover;
  overflow: hidden;
  height: 100vh; */
`;
