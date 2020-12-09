import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

export const SingleHomePageItem = ({ item: { img, title, description } }) => {
  return (
    <ItemDiv>
      <Img src={img} />
      <ParaWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ParaWrapper>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  margin-top: 1rem;
`;

const Img = styled.img`
  max-width: 100vw;
  overflow: hidden;
`;

const ParaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 12px 0.5px rgba(0, 0, 0, 0.2);

  text-align: center;
  margin: 3rem 1rem;
  padding: 1rem;

  background-color: ${COLORS.cultured};
`;

const Title = styled.h1`
  font-size: 1.5rem;

  // border bottom
  &::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-top: 0.5rem;
    border-bottom: 1px solid ${COLORS.culturedDark};
  }
`;

const Description = styled.p`
  padding-top: 0.5rem;
`;
