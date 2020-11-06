import React from "react";
import styled from "styled-components";

// styled-components는 무조건 대문자로 시작해야한다.
const StyledNav = styled.div`
  width: 100;
  // background-color: #f6f7f8;
  background-color: white;
  border-bottom: 1px solid black;
  margin-bottom: 2px;
  font-weight: bold;
  background: #e0eafc;
  background: -webkit-linear-gradient(to right; #CFDEF3; #e0eafc);
  background: linear-gradient(to right; #CFDEF3; #e0eafc);
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const StyledLi = styled.li`
  list-style-type: none;
  margin: 0 2vw;
  font-size: 3vh;
`;
const Styleda = styled.a`
  text-decoration: none;
  color: black;
  padding: 2vw;
  font-family: monospace;
  &:hover {
    color: lightgray;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <Styleda target="_" href="https://github.com/sa82trip">
          <StyledLi>github</StyledLi>
        </Styleda>
        <Styleda>
          <StyledLi>Todo</StyledLi>
        </Styleda>
        <Styleda>
          <StyledLi>blog</StyledLi>
        </Styleda>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
