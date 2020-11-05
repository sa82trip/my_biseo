import React, { useState, useEffect } from "react";
import { get } from "axios";
import Weather from "./Weater";
import Covid from "./Covid";
import TodoList from "./components/TodoList";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [situation, setSituation] = useState([]);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "gray",
      }}
    >
      <Weather lat={lat} lon={lon} />
      <Covid />
      <header className="App-header">
        <h1>My Biseo</h1>
        <p>The current time is {currentTime}.</p>
        <button
          onClick={() => {
            get("/read?parameter=spring").then((response) => {
              console.log(response.title);
            });
          }}
        >
          read요청
        </button>
      </header>
      <TodoContainer />
    </div>
  );
}

export default App;
