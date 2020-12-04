import React from "react";
import styled from "styled-components";

// import Portafilter from "../assets/portafilter.jpg";
// import Chemex from "../assets/mike-marquez-2anddAkcE24-unsplash.jpg";
// import Banner from "assets/tyler-nix-6sfy2ENBODc-unsplash.jpg";
import { COLORS } from "../../constants";
import items from "../../data/items.json";
import { SingleHomePageItem } from "./SingleHomePageItem";

export const HomePageItems = () => {
  console.log("items", items);
  return (
    <>
      <div>
        <BannerImgAndText>
          <TopText>
            <h1>Just here to brew?</h1>
          </TopText>
          <BottomText>
            <h1>Create a recipe {">"}</h1>
          </BottomText>
          <BannerImg src={"tyler-nix-6sfy2ENBODc-unsplash.jpg"} />
        </BannerImgAndText>

        {items.map((item) => {
          return <SingleHomePageItem item={item} />;
        })}
      </div>
    </>
  );
};

const BannerImgAndText = styled.div`
  position: relative;
`;

const BannerImg = styled.img`
  max-width: 100vw;

  z-index: -10;
`;
const TopText = styled.div`
  position: absolute;
  z-index: 5;

  margin-top: 3rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;

  border-radius: 10px;
  background-color: ${COLORS.feldgrauDarkTransparent};
`;

const BottomText = styled(TopText)`
  margin-top: 24rem;
  right: 0rem;
`;
