import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import allActions from "../actions/index";
import { useDispatch } from "react-redux";
import { StyledUl, StyledLi } from "../css/styled_components/StyledComponents";
import Contact from "../components/Contact";

// import Contact from "../components/Contact";
// styled-components는 무조건 대문자로 시작해야한다.

const StyledNav = styled.div`
  border-bottom: 0.7rem solid #5f87af;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: space-around;
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  @media only screen and (min-width: 630px) {
    align-items: space-around;
  }
`;

const Styleda = styled.a`
  text-decoration: none;
  color: #81a681;
  font-size: 3vh;
  font-weight: bold;
  font-family: monospace;
  transition: background 2s;
  &:hover {
    transform: rotate(360deg);
    opacity: 30%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  // color: rgba(94, 92, 230);
  color: #81a681;
  font-size: 3vh;
  font-weight: bold;
  font-family: monospace;
  &:hover {
    background: #e0eafc;
    opacity: 30%;
  }
  &:active {
    color: red;
  }
  @media only screen and (max-width: 430px) {
  }
`;
const StyledAppName = styled.div`
  // color: #fcba03;
  color: #bc5656;
  font-size: 5rem;
  padding: 0 0 1rem 0;
  &:hover {
    color: red;
  }
  @media only screen and (max-width: 430px) {
    font-weight: 900;
  }
`;

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledNav>
        <StyledAppName> My Biseo </StyledAppName>
        <div>
          {/*
          <img src={diary} alt="" style={{ width: "5rem" }} />
            */}
        </div>
        <StyledUl className="menu">
          {/*
          <Styleda target="_" href="https://github.com/sa82trip">
            <StyledLi>github</StyledLi>
          </Styleda>
            */}
          <Styleda>
            <StyledLink to="/">
              <StyledLi>MyBiseo</StyledLi>
            </StyledLink>
          </Styleda>
          <Styleda
            name="TODO"
            onClick={() => dispatch(allActions.setCurrentPage("TODO"))}
          >
            <StyledLink to="/todo">
              <StyledLi>Todo</StyledLi>
            </StyledLink>
          </Styleda>
          <Styleda
            name="INFO"
            onClick={() => dispatch(allActions.setCurrentPage("INFO"))}
          >
            <StyledLink to="/info">
              <StyledLi>info</StyledLi>
            </StyledLink>
          </Styleda>
          <Contact />
        </StyledUl>
      </StyledNav>
    </>
  );
};

export default Nav;
