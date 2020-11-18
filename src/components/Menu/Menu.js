import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { StyledLink } from "../../css/styled_components/StyledComponents";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/" onClick={() => setOpen(!open)}>
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        mybiseo
      </StyledLink>
      <StyledLink to="/todo" onClick={() => setOpen(!open)}>
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Todo
      </StyledLink>
      <StyledLink to="/info" onClick={() => setOpen(!open)}>
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        info
      </StyledLink>
    </StyledMenu>
  );
};
Menu.protoTypes = {
  open: bool.isRequired,
};
export default Menu;
