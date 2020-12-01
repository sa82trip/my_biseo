import React from "react";
import { StyledH1 } from "./css/styled_components/StyledComponents";
import styled from "styled-components";

const StyledP = styled.p``;
const StyledStrong = styled.strong`
  color: skyblue;
`;
const StyledAnchor = styled.a`
  text-decoration: none;
`;

const MyInfo = () => {
  return (
    <div>
      <StyledH1>Welcome!!</StyledH1>
      <StyledP style={{ padding: "10px", color: "white", fontWeight: "500" }}>
        This web applicaiotn is for educationla purpose. not for any other
        reason.
        <br />I used &nbsp;
        <StyledAnchor href="https://reactjs.org/" target="_">
          <StyledStrong>React.js </StyledStrong>
        </StyledAnchor>
        with
        <StyledAnchor href="https://styled-components.com/" target="_">
          <StyledStrong> styled_components </StyledStrong>
        </StyledAnchor>
        for constructing layout and components. <br />
        <StyledAnchor href="https://styled-components.com/" target="_">
          <StyledStrong>flask </StyledStrong>
        </StyledAnchor>
        for building backend.
        <StyledAnchor href="https://www.mongodb.com/" target="_">
          <StyledStrong> mongoDB </StyledStrong>
        </StyledAnchor>
        for store database.
        <br />
        <StyledAnchor href="https://www.nginx.com/" target="_">
          <StyledStrong>Nginx, </StyledStrong>
        </StyledAnchor>
        <StyledAnchor href="https://gunicorn.org/" target="_">
          <StyledStrong> gunigorn </StyledStrong>
        </StyledAnchor>
        for server.
      </StyledP>
    </div>
  );
};
export default MyInfo;
