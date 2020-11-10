import React, { useState, useEffect } from "react";
import Weather from "./Weater";
import Covid from "./Covid";
import TodoContainer from "./components/TodoContainer";
import styled from "styled-components";
import Nav from "./layout/Nav";
import "./css/app.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const StyledHeaderDiv = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: orange;
  padding: 1.5rem;
  border: 2px yellow;
`;

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: stretch;
  height: 100vh;
  background: #aa4b6b;
  background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);
  background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);
`;

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const isLoading = useSelector((state) => state.isLoadingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("isLoading", isLoading);
    fetch("/time")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, [isLoading]);

  return (
    <>
      <Router>
        <Nav />
        <StyledAppContainer className="App">
          <Switch>
            <Route path="/info">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "620px",
                }}
              >
                <header style={{ marginTop: "9rem" }} className="App-header">
                  <p style={{ color: "rgba(229, 229, 234)" }}>
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
                  width: "620px",
                }}
              >
                <header style={{ marginTop: "9rem" }} className="App-header">
                  <p style={{ color: "rgba(229, 229, 234)" }}>
                    The current time is {currentTime}.
                  </p>
                </header>
                <TodoContainer />
              </div>
            </Route>
          </Switch>
        </StyledAppContainer>
      </Router>
    </>
  );
}

export default App;
