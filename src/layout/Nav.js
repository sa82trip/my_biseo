import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import allActions from "../actions/index";
import { useDispatch } from "react-redux";
import diary from "../img/diary.svg";
import github from "../img/github.svg";
import twitter from "../img/twitter.svg";
import mail from "../img/mail.svg";

// styled-components는 무조건 대문자로 시작해야한다.
const StyledNav = styled.div`
  border-bottom: 1px solid white;
  font-weight: bold;
  margin: 0.5rem 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

const StyledLi = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const Styleda = styled.a`
  text-decoration: none;
  background-color: black;
  color: rgba(94, 92, 230);
  font-size: 3vh;
  font-weight: bold;
  font-family: monospace;
  transition: background 2s;
  &:hover {
    transform: rotate(360deg);
    background: #e0eafc;
    opacity: 30%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(94, 92, 230);
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
`;
const StyledAppName = styled.div`
  color: #fcba03;
  font-size: 5rem;
  padding: 0 0 1rem 0;
  &:hover {
    color: red;
  }
`;

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledNav>
        <div>
          <img src={diary} alt="" style={{ width: "5rem" }} />
          <StyledUl
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <StyledLi>
              <a target="_" href="https://github.com/sa82trip">
                <img src={github} alt="" />
              </a>
            </StyledLi>
            <StyledLi>
              <a target="_" href="https://twitter.com/vim_gil">
                <img src={twitter} alt="" />
              </a>
            </StyledLi>
            <StyledLi>
              <a href="mailto:sa82trip@gmail.com">
                <img src={mail} alt="" />
              </a>
            </StyledLi>
          </StyledUl>
        </div>
        <StyledAppName> My Biseo </StyledAppName>
        <StyledUl>
          <Styleda target="_" href="https://github.com/sa82trip">
            <StyledLi>github</StyledLi>
          </Styleda>
          <Styleda>
            <StyledLi>My Biseo</StyledLi>
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
        </StyledUl>
      </StyledNav>
    </>
  );
};

export default Nav;
