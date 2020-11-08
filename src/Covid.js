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
    fetch("/covid")
      .then((res) => {
        res.json().then((data) => {
          setSituation(() => data);
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
        {situation.response
          ? situation.response.body.items.item.map((one) => (
              <StyledLi key={one.create_dt}>
                {one.stateDt},
                <br /> 누적확진자
                {expressionList[Math.round(Math.random() * 10)]}
                {one.decideCnt}
                <br />
                누적사망자 {one.deathCnt}
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
