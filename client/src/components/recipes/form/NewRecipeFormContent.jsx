//todo: tooltip for more information

import React from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { FiGlobe, FiCoffee, FiTag } from "react-icons/fi";
import { GiMokaPot, GiCoffeeBeans } from "react-icons/gi";
import { IoWaterOutline, IoTimerOutline } from "react-icons/io5";
import { VscNote } from "react-icons/vsc";
import { MdComment } from "react-icons/md";

import { COLORS } from "../../../constants";

export const NewRecipeFormContent = () => {
  const handleSubmit = (ev) => {};
  return (
    <>
      <IconContext.Provider value={{ size: "2rem" }}>
        <Form>
          <Title>What Am I Drinking Today?</Title>

          <IconInput>
            <Icon>
              <FiGlobe />
            </Icon>
            <Input type="text" placeholder="Origin" />
          </IconInput>

          <IconInput>
            <Icon>
              <FiCoffee />
            </Icon>
            <Input type="text" placeholder="Roaster" />
          </IconInput>

          <IconInput>
            <Icon>
              <FiTag />
            </Icon>
            <Input type="text" placeholder="Name" />
          </IconInput>

          <IconInput>
            <Icon>
              <GiMokaPot />
            </Icon>
            <Input list="methods" placeholder="Brew Method" />
            <datalist id="methods">
              <option value="Chemex" />
              <option value="Pour Over" />
              <option value="Aeropress" />
              <option value="French Press" />
              <option value="Moka Pot" />
              <option value="Siphon" />
            </datalist>
          </IconInput>

          <IconInput>
            <Icon>
              <GiCoffeeBeans />
            </Icon>
            <Input type="text" placeholder="Grind Size" />
          </IconInput>

          <IconInput>
            <Icon>
              <IoWaterOutline />
            </Icon>
            <Input type="text" placeholder="Grams of Water" />
          </IconInput>

          <IconInput>
            <Icon>
              <IoTimerOutline />
            </Icon>
            <span>
              <TimeInput type="text" placeholder="Time" />m
            </span>
            <TimeInput type="text" />s
          </IconInput>

          <IconInput>
            <Icon>
              <VscNote />
            </Icon>
            <Input type="text" placeholder="Primary Tasting Notes" />
          </IconInput>

          <IconInput>
            <Icon>
              <MdComment />
            </Icon>
            <Input placeholder="Additional Comments" />
          </IconInput>

          <Button type="submit" onClick={(ev) => ev.preventDefault()}>
            Submit
          </Button>
        </Form>
      </IconContext.Provider>
    </>
  );
};

const Title = styled.h1`
  font-size: 1.4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  margin: 2rem 0;
  padding: 2rem 0;
  border-radius: 5px;
  width: 80%;
  background-color: ${COLORS.feldgrauLight};
  color: white;
  overflow: hidden;
  box-shadow: 0px 0px 9px 1px #252525;
`;

const IconInput = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;
  margin-top: 1.5rem;
`;

const Icon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-right: 5px;
  position: relative;
`;

const Input = styled.input`
  height: 2rem;
  width: 30vw;

  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 2px 0.5px ${COLORS.feldgrauDark};

  &:focus {
    outline: none;
    box-shadow: inset 0 0 5px ${COLORS.desertSand},
      inset 0 0 5px ${COLORS.desertSand}, inset 0 0 5px ${COLORS.desertSand};
  }
`;

const TimeInput = styled(Input)`
  width: 12.5vw;
  margin: 0 5px 0 8px;
`;

const Button = styled.button`
  all: unset;
  font-weight: bold;
  font-size: 1.3rem;
  color: ${COLORS.blackCoffee};
  padding: 10px 50px;
  margin: 2rem 0 0;
  border-radius: 20px;
  cursor: pointer;

  background-color: ${COLORS.cultured};
`;
