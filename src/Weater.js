import React, { useEffect, useState } from "react";

const Weather = (lon, lan) => {
  console.log("coords", lon, lan);
  const [data, setData] = useState("");

  // 일단 도시 이름 나오게 함
  useEffect(() => {
    const result = fetch(`/weather?lon=${lon}&lan=${lan}`).then((res) =>
      res.json().then((data) => setData(data["name"]))
    );
    // console.log(
    //   fetch("/weather").then((res) =>
    //     res.json().then((data) => setData(data["name"]))
    //   )
    // );
  }, []);

  return <div>{data}의 날씨</div>;
};

export default Weather;
