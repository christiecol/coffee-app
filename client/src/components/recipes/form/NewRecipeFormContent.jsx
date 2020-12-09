//todo: tooltip for more information

import React, { useState } from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { FiGlobe, FiCoffee, FiTag } from "react-icons/fi";
import { GiMokaPot, GiCoffeeBeans } from "react-icons/gi";
import { IoWaterOutline, IoTimerOutline } from "react-icons/io5";
import { VscNote } from "react-icons/vsc";
import { MdComment } from "react-icons/md";

import { COLORS } from "../../../constants";
import { responseRecipe } from "../../../redux/actions/actions";

export const NewRecipeFormContent = () => {
  const [origin, setOrigin] = useState("");
  const [roaster, setRoaster] = useState("");
  const [name, setName] = useState("");
  const [brewMethod, setBrewMethod] = useState("");
  const [grindSize, setGrindSize] = useState("");
  const [water, setWater] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [notes, setNotes] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        origin,
        roaster,
        name,
        brewMethod,
        grindSize,
        water,
        minutes,
        seconds,
        notes,
        comments,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <IconContext.Provider value={{ size: "2rem" }}>
        <Form onSubmit={handleSubmit}>
          <Title>What Am I Drinking Today?</Title>

          <IconInput>
            <Icon>
              <FiGlobe />
            </Icon>
            <Input
              value={origin}
              type="text"
              placeholder="Origin"
              onChange={(ev) => setOrigin(ev.target.value)}
            />
          </IconInput>

          <IconInput>
            <Icon>
              <FiCoffee />
            </Icon>
            <Input
              value={roaster}
              type="text"
              placeholder="Roaster"
              onChange={(ev) => setRoaster(ev.target.value)}
            />
          </IconInput>

          <IconInput>
            <Icon>
              <FiTag />
            </Icon>
            <Input
              value={name}
              type="text"
              placeholder="Name"
              onChange={(ev) => setName(ev.target.value)}
            />
          </IconInput>

          <IconInput>
            <Icon>
              <GiMokaPot />
            </Icon>
            <Input
              list="methods"
              value={brewMethod}
              placeholder="Brew Method"
              onChange={(ev) => setBrewMethod(ev.target.value)}
            />
            <datalist id="methods">
              <option value="Aeropress" />
              <option value="Chemex" />
              <option value="French Press" />
              <option value="Moka Pot" />
              <option value="Pour Over" />
              <option value="Siphon" />
            </datalist>
          </IconInput>

          <IconInput>
            <Icon>
              <GiCoffeeBeans />
            </Icon>
            <Input
              value={grindSize}
              type="text"
              placeholder="Grind Size"
              onChange={(ev) => setGrindSize(ev.target.value)}
            />
          </IconInput>

          <IconInput>
            <Icon>
              <IoWaterOutline />
            </Icon>
            <Input
              value={water}
              type="text"
              placeholder="Grams of Water"
              onChange={(ev) => setWater(ev.target.value)}
            />
          </IconInput>

          <IconInput>
            <Icon>
              <IoTimerOutline />
            </Icon>
            <span>
              <TimeInput
                value={minutes}
                type="text"
                placeholder="Time"
                onChange={(ev) => setMinutes(ev.target.value)}
              />
              m
            </span>
            <TimeInput
              value={seconds}
              type="text"
              onChange={(ev) => setSeconds(ev.target.value)}
            />
            s
          </IconInput>

          <IconInput>
            <Icon>
              <VscNote />
            </Icon>
            <Input
              value={notes}
              type="text"
              placeholder="Primary Tasting Notes"
              onChange={(ev) => setNotes(ev.target.value)}
            />
          </IconInput>

          <IconInput>
            <Icon>
              <MdComment />
            </Icon>
            <Input
              value={comments}
              placeholder="Additional Comments"
              type="text"
              onChange={(ev) => setComments(ev.target.value)}
            />
          </IconInput>

          <Button type="submit">Submit</Button>
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
