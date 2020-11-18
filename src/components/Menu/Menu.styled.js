import styled from "styled-components";
export { default } from "./Menu";

// Menu.styled.js
//일단 누르면 생성 되게 까지 했고, 이거에 효과 적용하고, 색상 바꿀 것이다. 그리고 로직을 좀 더 연구 할 거
//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 50vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: opacity 0.3s;
   {
    /* transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(100%)"}; */
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: blue;
    }
  }
`;
