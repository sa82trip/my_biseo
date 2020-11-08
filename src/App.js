import React, { useState, useEffect } from "react";
import Weather from "./Weater";
import Covid from "./Covid";
import TodoContainer from "./components/TodoContainer";
import styled from "styled-components";
import Nav from "./layout/Nav";
// import { Route } from "react-router-dom";
// import { Home, About } from "./pages/";
import "./css/app.css";
import { useDispatch, useSelector } from "react-redux";

const StyledHeaderDiv = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: orange;
  padding: 1.5rem;
  border: 2px yellow;
`;

const StyledAppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(569px, auto) 1fr;
  background: rgba(58, 58, 60);
`;

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [visibleFlg, setVisivleFlg] = useState(false);
  const isLoading = useSelector((state) => state.isLoadingReducer);
  const dispatch = useDispatch();

  // .then(() => {
  //   const el = document.querySelector(".loader-container");
  //   if (el) {
  //     el.remove();
  //     setIsLoading(!isLoading);
  //   }
  // });

  useEffect(() => {
    console.log("isLoading", isLoading);
    fetch("/time")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentTime(data.time);
      });
    navigator.geolocation.getCurrentPosition((loc) => {
      setLon(() => loc.coords.longitude);
      setLat(() => loc.coords.latitude);
    });
  }, []);

  return (
    <>
      <Nav />
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: ".5rem",
          background: "rgba(58, 58, 60)",
        }}
      >
        <StyledHeaderDiv>Page Name</StyledHeaderDiv>
      </header>
      <StyledAppContainer className="App">
        <div className="grid-item">
          <h1>1</h1>
          <Weather lat={lat} lon={lon} />
          <Covid />
        </div>
        <div className="grid-item">
          <header className="App-header">
            <p style={{ color: "rgba(229, 229, 234)" }}>
              The current time is {currentTime}.
            </p>
          </header>
          <TodoContainer visibility={visibleFlg} />
          <button onClick={() => setVisivleFlg(!visibleFlg)}>todo</button>
        </div>
        <div className="grid-item">
          <h1>2</h1>
          <Weather lat={lat} lon={lon} />
          <Covid />
        </div>
        <div></div>
      </StyledAppContainer>
    </>
  );
}

export default App;
