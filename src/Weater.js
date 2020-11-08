import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions/index";
import loading from "./css/loading.css";

const Weather = (lat, lon) => {
  console.log("coords", lon, lat);
  const [data, setData] = useState("");
  const isLoading = useSelector((state) => state.isLoadingReducer);
  const dispatch = useDispatch();
  const [localStatus, setLocalStatus] = useState(true);

  // 일단 도시 이름 나오게 함
  // fetch and axios take response in different way
  useEffect(() => {
    const result = fetch(`/weather?lon=${lon}&lan=${lat}`).then((res) =>
      res
        .json()
        .then((data) => {
          setData(data);
        })
        .then(() => {
          dispatch(allActions.isLoadingActions.reverse_status());
          setLocalStatus(isLoading["status"]);
          console.log(isLoading);
        })
    );
  }, []);

  if (localStatus) return <div className="loader"></div>;
  return (
    <div style={{ color: "rgba(229, 229, 234)" }}>
      {data
        ? `${data["name"]}의 날씨${data["weather"][0].description}`
        : "현재 날씨 정보 알 수 없음"}
    </div>
  );
};

export default Weather;
