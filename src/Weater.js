import React, { useEffect, useState } from "react";

const Weather = (lat, lon) => {
  console.log("coords", lon, lat);
  const [data, setData] = useState("");

  // 일단 도시 이름 나오게 함
  // fetch and axios take response in different way
  useEffect(() => {
    const result = fetch(`/weather?lon=${lon}&lan=${lat}`).then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, []);

  return (
    <div style={{ color: "rgba(229, 229, 234)" }}>
      {data
        ? `${data["name"]}의 날씨${data["weather"][0].description}`
        : "현재 날씨 정보 알 수 없음"}
    </div>
  );
};

export default Weather;
