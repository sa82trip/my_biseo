import React from "react";
import { StyledH1 } from "./css/styled_components/StyledComponents";
import styled from "styled-components";

const StyledP = styled.p``;
const StyledStrong = styled.strong`
  color: skyblue;
`;

const MyInfo = () => {
  return (
    <div>
      <StyledH1>Welcome!!</StyledH1>
      <StyledP style={{ padding: "10px", color: "white", fontWeight: "500" }}>
        This web applicaiotn is for educationla purpose. not for any other
        reason.
        <br />I used &nbsp;
        <StyledStrong>React.js with styled_components</StyledStrong> for
        constructing layout and components. <br />
        <StyledStrong>flask</StyledStrong> for building backend.{" "}
        <StyledStrong>mongoDB</StyledStrong> for store database.
        <br />
        <StyledStrong>Nginx, gunigorn</StyledStrong> for server.
      </StyledP>
    </div>
  );
};
export default MyInfo;
