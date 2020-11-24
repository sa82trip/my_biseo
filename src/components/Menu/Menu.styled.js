import styled from "styled-components";
export {default} from "./Menu";

// Menu.styled.js
//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({theme}) => theme.primaryDark};
  height: 50vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
	z-index: 1;
  opacity: ${({open}) => (open ? "1" : "0")};
  visibility: ${({open}) => (open ? "visible" : "hidden")};
  transition: opacity 0.3s;
   {
    /* transform: ${({open}) =>
		open ? "translateX(0)" : "translateX(100%)"}; */
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({theme}) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({theme}) => theme.mobile}) {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }

    &:hover {
      color: blue;
    }
  }
`;
