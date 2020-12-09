import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { FetchOrigins } from "../../components/origins/FetchOrigins";
import { getOrigins } from "../../redux/reducers/AllOriginsReducer";

export const OriginsPage = () => {
  const state = useSelector(getOrigins);
  console.log("origins", state);
  const dummyData = [
    {
      fact:
        " amet ea aute tempor minim reprehenderit elit laboris deserunt labore.",
      flavorProfile: "Velit esse sint esse est labore cillum esse.",
    },
  ];
  return (
    <Grid>
      {state.origins.map((origin) => {
        return (
          <Card>
            <ImgDiv>
              <Image src={origin.img} />
              <Country>{origin.origin}</Country>
            </ImgDiv>
            <Fact>{dummyData[0].fact}</Fact>
            <Flavor>{dummyData[0].flavorProfile}</Flavor>
          </Card>
        );
      })}
      <FetchOrigins />
    </Grid>
  );
};

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  margin-bottom: 1rem;

  background: rgba(0, 0, 0, 0.5);
`;

const Grid = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  width: 70vw;
  min-height: 9rem;
  position: relative;
  z-index: -10;

  border-radius: 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  text-align: center;

  max-width: 100vw;
  position: relative;
  margin: 2rem 2rem;
  padding: 1rem;
  box-shadow: 0px 7px 30px 0px rgba(0, 0, 0, 0.3);
  /* text-decoration: none; */
  border-radius: 20px;
`;

const Country = styled.h2`
  position: absolute;
  z-index: 10;
  color: white;
  font-size: 10vw;
`;

const Fact = styled.p`
  margin-bottom: 1rem;
`;

const Flavor = styled.p``;
