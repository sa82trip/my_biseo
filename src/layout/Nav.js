import React, { useRef } from "react";
import styled from "styled-components";
import allActions from "../actions/index";
import { useDispatch } from "react-redux";
import {
  StyledLink,
  StyledUl,
  StyledLi,
} from "../css/styled_components/StyledComponents";
import Contact from "../components/Contact";
import { useOnClickOutside } from "../hooks";
import { Burger, Menu } from "../components";
import { Link } from "react-router-dom";

// import Contact from "../components/Contact";
// styled-components는 무조건 대문자로 시작해야한다.

const StyledNav = styled.div`
  border-bottom: 0.7rem solid #5f87af;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: space-around;
  position: relative;
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

const StyledDisDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media only screen and (max-width: 576px) {
    visibility: hidden;
  }
`;

const Nav = ({ width, theme, open, setOpen }) => {
  const dispatch = useDispatch();
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <StyledNav>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <StyledAppName>
          <Link
            style={{
              textDecoration: "none",
              color: "#bc5656",
              fontSize: "5rem",
              padding: "0 0 1rem 0",
            }}
            to="/"
            exact={true}
          >
            {width > parseInt(theme.mobile) ? "My Biseo" : "MBS"}
          </Link>
        </StyledAppName>
        <div></div>
        <StyledUl className="menu">
          <StyledDisDiv className="oList">
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
          </StyledDisDiv>
          <Contact />
        </StyledUl>
      </StyledNav>
    </>
  );
};

export default Nav;
