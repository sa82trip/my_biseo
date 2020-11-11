import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions/index";
import loading from "./css/loading.css";

const Weather = () => {
  const [data, setData] = useState("");
  const isLoading = useSelector((state) => state.isLoadingReducer);
  const dispatch = useDispatch();
  const [localStatus, setLocalStatus] = useState(true);
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  // 일단 도시 이름 나오게 함
  // fetch and axios take response in different way
  useEffect(() => {
    if (navigator.geolocation) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    navigator.geolocation.getCurrentPosition((loc) => {
      setLon(() => loc.coords.longitude.toString());
      setLat(() => loc.coords.latitude.toString());
    });
    if (lat && lon) {
      const result = fetch(`/api/weather?lon=${lon}&lat=${lat}`).then((res) =>
        res
          .json()
          .then((data) => {
            setData(data);
          })
          .then(() => {
            dispatch(allActions.isLoadingActions.reverse_status());
            setLocalStatus(isLoading["status"]);
          })
      );
    }
  }, [lat, lon]);

  if (localStatus)
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  return (
    <div style={{ color: "rgba(229, 229, 234)", margin: "1em" }}>
      {data
        ? `${data["name"]}의 날씨 : ${data["weather"][0].description}`
        : "현재 날씨 정보 알 수 없음"}
    </div>
  );
};

export default Weather;
