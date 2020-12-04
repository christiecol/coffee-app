import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

import { BurgerContent } from "./BurgerContent";
import { useViewport } from "../../util";
import { COLORS } from "../../constants";
import { NavbarContent } from "./NavbarContent";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const size = useViewport();
  const currentWidth = size.width;
  const mobileBreakpoint = 600;

  //toggle dropdown menu
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <MobNavBar>
      <Bar>
        {currentWidth > mobileBreakpoint ? (
          <NavbarContent />
        ) : (
          <IconContext.Provider value={{ size: "30px" }}>
            <Catimor>Catimor</Catimor>
            <GiHamburgerMenu onClick={handleToggle} />
          </IconContext.Provider>
        )}
      </Bar>
      {toggle === true ? (
        <DropDownDiv>
          <BurgerContent />
        </DropDownDiv>
      ) : null}
    </MobNavBar>
  );
};

const MobNavBar = styled.div`
  top: 0;
  margin-top: 0;
`;

const DropDownDiv = styled.div``;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;
  padding: 0 40px;
  width: 100vw;
  height: 3.5rem;

  color: white;
  background-color: ${COLORS.feldgrauLight};
  z-index: 1000;
`;

const Catimor = styled.h2`
  font-size: 1.5rem;
`;
