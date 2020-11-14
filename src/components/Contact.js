import React from "react";
import github from "../img/github.svg";
import twitter from "../img/twitter.svg";
import mail from "../img/mail.svg";
import { StyledUl, StyledLi } from "../css/styled_components/StyledComponents";
import styled from "styled-components";

const ExStyledUl = styled(StyledUl)({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "rgba(255,255,153,0.2)",
  borderRadius: "10%",
  justifyContent: "space-around",
});
const ExStyledLi = styled(StyledLi)({
  margin: "1vh",
});

const Contact = () => {
  return (
    <div>
      <ExStyledUl className="contact">
        <ExStyledLi>
          <a target="_" href="https://github.com/sa82trip">
            <img src={github} alt="" />
          </a>
        </ExStyledLi>
        <ExStyledLi>
          <a target="_" href="https://twitter.com/vim_gil">
            <img src={twitter} alt="" />
          </a>
        </ExStyledLi>
        <ExStyledLi>
          <a href="mailto:sa82trip@gmail.com">
            <img src={mail} alt="" />
          </a>
        </ExStyledLi>
      </ExStyledUl>
    </div>
  );
};
export default Contact;
