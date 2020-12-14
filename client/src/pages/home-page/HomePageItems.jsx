import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import items from "../../data/items.json";
import { SingleHomePageItem } from "./SingleHomePageItem";
import Banner from "../../images/tyler-nix-6sfy2ENBODc-unsplash.jpg";
import Logo from "../../images/logoFull.png";

import { FiCoffee } from "react-icons/fi";

export const HomePageItems = () => {
  return (
    <>
      <BannerImgAndText>
        <ImgDivDiv>
          <ImgDiv>
            <LogoImg src={Logo} />
          </ImgDiv>
        </ImgDivDiv>

        <BannerOverlay>
          <BottomText>
            <p>
              Helping you brew better coffee at home, one cup at a time
              <FiCoffee style={{ size: "2rem", paddingTop: "5px" }} />
            </p>
          </BottomText>

          <BannerImg src={Banner} />
        </BannerOverlay>
      </BannerImgAndText>
      <RecipeLinkDiv>
        <p>meow</p>
      </RecipeLinkDiv>

      {items.map((item) => {
        return <SingleHomePageItem item={item} />;
      })}
    </>
  );
};

const BannerImgAndText = styled.div`
  position: relative;
  z-index: -100;
`;

const ImgDivDiv = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 1rem;

  position: absolute;

  width: 100%;
`;

const LogoImg = styled.img`
  width: 40%;
  height: auto;
`;

const BannerImg = styled.img`
  width: 100vw;
  z-index: -10;
  overflow: hidden;
  position: relative;
`;

const BannerOverlay = styled.div`
  display: flex;

  justify-content: center;
  align-items: flex-end;

  background-color: ${COLORS.overlay};

  /* position: absolute; */
`;

const BottomText = styled.div`
  text-align: center;
  position: absolute;
  z-index: 5;

  margin-bottom: 7%;

  margin-right: 1rem;
  margin-left: 1rem;

  font-size: 1.8rem;
  line-height: 1.7rem;
  letter-spacing: 4px;
  font-weight: 800;

  padding: 1rem;
  color: white;
  z-index: 10;

  background-color: ${COLORS.darkTransparentTwo};
`;

const RecipeLinkDiv = styled.div``;
