import React, { useState, useEffect } from "react";
import Weather from "./Weater";
import Covid from "./Covid";
import TodoContainer from "./components/TodoContainer";
import styled from "styled-components";
import Nav from "./layout/Nav";
import "./css/app.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useViewport } from "./context/ViewportProvider";

const StyledHeaderDiv = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: orange;
  padding: 1.5rem;
  border: 2px yellow;
`;

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-itmes: center;
  // height: 100vh;
  @media only screen and (max-width: 630px) {
    background: #262626;
    box-shadow: 3px 3px 5px black;
    height: auto;
  } // background: #aa4b6b; // background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b) ; // background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b) ;
`;

const StyledVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  padding: none;
  z-index: -1;
  position: fixed; /* optional depending on what you want to do in your app */
  filter: opacity(60%);
`;

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const isLoading = useSelector((state) => state.isLoadingReducer);
  const { height } = useViewport();

  useEffect(() => {
    fetch("/api/time")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, [isLoading, height]);

  return (
    <>
      <Router>
        <StyledVideo
          loop
          autoPlay
          src="https://wedistill.io/uploads/videos/processed/1716/Northernlights2_HD.mp4.mp4"
        ></StyledVideo>
        <div
          className="whole"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="flex-left"></div>
          <div
            className="app"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <StyledAppContainer
              containerHeight={() => height - 10}
              className="App"
            >
              <Nav />
              <Switch>
                <Route path="/info">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <header className="App-header">
                      <p style={{ color: "#d787af" }}>
                        The current time is {currentTime}.
                      </p>
                    </header>
                    <Weather />
                    <Covid />
                  </div>
                </Route>
                <Route path="/todo">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <header className="App-header">
                      <p style={{ color: "#d787af" }}>
                        The current time is {currentTime}.
                      </p>
                    </header>
                    <TodoContainer />
                  </div>
                </Route>
              </Switch>
            </StyledAppContainer>
          </div>
          <div className="flex-right"></div>
        </div>
      </Router>
    </>
  );
}

export default App;
