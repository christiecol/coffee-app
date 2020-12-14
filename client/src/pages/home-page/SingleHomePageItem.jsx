import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";

export const SingleHomePageItem = ({ item: { img, title, subTitle, description, link, linkBrew, href } }) => {
  return (
    <ItemDiv>
      <Img src={img} />
      <ParaWrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Description><Href href="https://www.cafekujira.com/">{href}</Href>{description}</Description>
        {link && <Link to="/origins">{link}</Link>}
        {linkBrew && <Link to="/brewmethods">{linkBrew}</Link>}
        
      </ParaWrapper>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
`;

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

  box-shadow: 0px 0px 12px 0.5px rgba(0, 0, 0, 0.2);

  text-align: center;
  margin: 1rem 1rem 3rem 1rem;
  padding: 2.5rem 1rem;

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
`

const Description = styled.p`
  font-size: 1.2rem;

  padding-top: 0.5rem;

  line-height: 1.9rem;
`;

const Href = styled.a`
text-decoration: none;
`

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
`