import React, { useState, useEffect } from "react";
import { post, get } from "axios";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // python에서 받아온 딕셔너리
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  const handleIdChange = (e) => {
    const newId = e.target.value;
    setId(newId);
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const postHandle = (e) => {
    e.preventDefault();
    console.log("enter");
    const formData = new FormData();
    formData.append("id", id);
    formData.append("password", password);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    post("/login", formData, config).then((response) => {
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
      <header className="App-header">
        <h1>My Biseo</h1>
        <p>The current time is {currentTime}.</p>
        <form onSubmit={postHandle}>
          <div>
            <input type="text" name="id" value={id} onChange={handleIdChange} />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
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
          <li>{`${one.title} : => ${one.author}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
