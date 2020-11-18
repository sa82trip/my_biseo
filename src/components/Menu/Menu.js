import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { StyledLink } from "../../css/styled_components/StyledComponents";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/" onClick={() => setOpen(!open)}>
        mybiseo
      </StyledLink>
      <StyledLink to="/todo" onClick={() => setOpen(!open)}>
        Todo
      </StyledLink>
      <StyledLink to="/info" onClick={() => setOpen(!open)}>
        info
      </StyledLink>
    </StyledMenu>
  );
};
Menu.protoTypes = {
  open: bool.isRequired,
};
export default Menu;
