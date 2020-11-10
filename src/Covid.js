import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CovidDiv = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #c7c7cc;
`;

const StyledLi = styled.li`
  decoration: none;
`;
const expressionList = [
  "🚑",
  "🚠",
  "❌",
  "❗",
  "💉",
  "💊",
  "🥵",
  "😱",
  "🤧",
  "🙀",
];

const Covid = () => {
  const [situation, setSituation] = useState([]);

  useEffect(() => {
    fetch("/api/covid")
      .then((res) => {
        res.json().then((data) => {
          console.log(data.response.body.items.item);
          const result = data.response.body.items.item;
          setSituation(() => result.slice(0, 1));
          console.log(result);
        });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  // 계속 에러가 난 이유는... 진짜 받아오기 전이니깐....
  return (
    <CovidDiv>
      <ul>
        {situation
          ? situation.map((one) => (
              <StyledLi key={one.create_dt}>
                {one.stateDt}의 코로나소식,
                <br /> 누적확진자
                {expressionList[Math.round(Math.random() * 10)]}
                {one.decideCnt}
                <br />
                누적사망자
                {expressionList[Math.round(Math.random() * 10)]}
                {one.deathCnt}
              </StyledLi>
            ))
          : "no data"}
      </ul>
    </CovidDiv>
  );
};
export default Covid;
