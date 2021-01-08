import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";

export const SingleHomePageItem = ({
  item: { img, title, subTitle, description, link, linkBrew, href },
}) => {
  return (
    <ItemDiv>
      <Img src={img} />
      <ParaWrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Description>
          <Href href="https://www.cafekujira.com/">{href}</Href>
          {description}
        </Description>
        {link && (
          <Link
            to="/origins"
            aria-label="Want to know more about specific origins?"
          >
            {link}
          </Link>
        )}
        {linkBrew && (
          <Link to="/brewmethods" aria-label="browse all brew methods">
            {linkBrew}
          </Link>
        )}
      </ParaWrapper>
    </ItemDiv>
  );
};

const ItemDiv = styled.div``;

const Img = styled.img`
  max-width: 100vw;
  overflow: hidden;

  position: relative;
`;

const ParaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 5rem 1rem;

  background-color: ${COLORS.cultured};
`;

const Title = styled.h1`
  font-size: 1.8rem;

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

const SubTitle = styled.h2`
  font-size: 1.4rem;

  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.2rem;

  padding-top: 0.5rem;

  line-height: 1.9rem;
`;

const Href = styled.a`
  text-decoration: none;
`;

const Link = styled(NavLink)`
  all: unset;

  padding: 15px;
  margin-top: 1rem;

  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 3px;

  border: 1px solid ${COLORS.feldgrauDarkTransparent};
  color: ${COLORS.feldgrauDark};

  &:hover {
    color: ${COLORS.desertSand};
    border: 1px solid ${COLORS.desertSand};
  }

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;
