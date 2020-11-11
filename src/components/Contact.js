import React from "react";
import github from "../img/github.svg";
import twitter from "../img/twitter.svg";
import mail from "../img/mail.svg";
import { StyledUl, StyledLi } from "../css/styled_components/StyledComponents";

const Contact = () => {
  return (
    <div>
      <StyledUl
        className="contact"
        style={{
          display: "flex",
          background: "white",
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
  );
};
export default Contact;
