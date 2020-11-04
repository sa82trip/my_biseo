import React, { useState, useEffect } from "react";
import { post, get } from "axios";
import Weather from "./Weater";
import Covid from "./Covid";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  // python에서 받아온 data
  const [data, setData] = useState([]);

  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [situation, setSituation] = useState([]);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
    fetch("/covid").then((res) => {
      res.json().then((data) => {
        setSituation(() => data.response.body.items.item);
      });
    });
  }, []);

  const handleIdChange = (e) => {
    const author = e.target.value;
    setAuthor(author);
  };
  const handlePasswordChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
  };

  const postHandle = (e) => {
    e.preventDefault();
    console.log("enter");
    const formData = new FormData();
    formData.append("author", author);
    formData.append("description", description);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    post("/insert", formData, config).then((response) => {
      console.log(response);
      setData(response.data);
    });
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "gray",
      }}
    >
      <Weather lat={lat} lon={lon} />
      <Covid test_props={situation} />
      <header className="App-header">
        <h1>My Biseo</h1>
        <p>The current time is {currentTime}.</p>
        <form onSubmit={postHandle}>
          <div>
            <input
              type="text"
              name="author"
              value={author}
              onChange={handleIdChange}
            />
          </div>
          <div>
            <input
              type="description"
              name="description"
              value={description}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">login</button>
        </form>
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
      <ul>
        {data.map((one) => (
          <li key={one._id}>{`${one.title} : => ${one.author}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
