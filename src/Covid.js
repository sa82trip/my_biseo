import React, { useEffect, useState } from "react";

const Covid = () => {
  const [situation, setSituation] = useState([]);

  useEffect(() => {
    fetch("/covid").then((res) => {
      res.json().then((data) => {
        setSituation(() => data);
      });
    });
  }, []);
  // 계속 에러가 난 이유는... 진짜 받아오기 전이니깐....
  return (
    <div className="covid">
      <ul>
        {situation.response
          ? situation.response.body.items.item.map((one) => (
              <li key={one.create_dt}>
                {one.stateDt}, 누적확진자{one.decideCnt} 누적사망자
                {one.deathCnt}
              </li>
            ))
          : "no data"}
      </ul>
    </div>
  );
};
export default Covid;
