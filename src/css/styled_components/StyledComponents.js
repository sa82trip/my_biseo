import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export const StyledLi = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  transition: transform 3s;
  -webkit-transition: color 300ms linear;
  -moz-transition: color 300ms linear;
  -o-transition: color 300ms linear;
  -ms-transition: color 300ms linear;
  transition: color 300ms linear;
  &:hover {
    color: white;
    text-decoration: underline wavy red;
  }
  @media only screen and (max-width: 450px) {
    font-weight: 900;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledButton = styled.button`
  @media only screen and (max-width: 575px) {
    color: red;
    border: 0;
    padding: 1rem;
    font-size: 0.8rem;
    margin: 10px;
  }
`;
export const StyledInput = styled.input`
  width: 200px;
  @media only screen and (max-width: 575px) {
    width: ${(props) => props.inputWidth + "px"};
    margin: 0 0.5rem 0 0.5rem;
  }
`;

// styled-component를 사용하기
export const StyledH1 = styled.h1`
  color: #ffd7af;
  margin: 0 0 0.5rem 0.5rem;
  @media only screen and (max-width: 375px) {
    width: 339px;
  }
  // props를 이용하기
`;
// styled-component를 상속하기
export const H1ex = styled(StyledH1)`
  background: #3a3a3a;
  color: #84aa84;
`;

export const StyledLink = styled(Link)`
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
