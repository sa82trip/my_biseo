import React, { useState, useEffect } from "react";
import { get } from "axios";
import Weather from "./Weater";
import Covid from "./Covid";
import TodoContainer from "./components/TodoContainer";
import Clock from "./components/Clock";

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [situation, setSituation] = useState([]);
  const [visibleFlg, setVisivleFlg] = useState(false);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
    navigator.geolocation.getCurrentPosition((loc) => {
      setLon(() => loc.coords.longitude);
      setLat(() => loc.coords.latitude);
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        background: "#E0EAFC",
        background: "-webkit-linear-gradient(to right, #CFDEF3, #E0EAFC)",
        background: "linear-gradient(to right, #CFDEF3, #E0EAFC)",
      }}
    >
      <Weather lat={lat} lon={lon} />
      <Covid />
      <header className="App-header">
        <h1>My Biseo</h1>
        <Clock />
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
      <TodoContainer visibility={visibleFlg} />
      <button onClick={() => setVisivleFlg(!visibleFlg)}>todo</button>
    </div>
  );
}

export default App;
