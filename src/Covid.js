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
    let tempArray = [];
    try {
      fetch("/api/covid").then((res) => {
        res.json().then((data) => {
          console.log(data.response.body.items.item);
          const result = data.response.body.items.item;
          console.log(result);
          if (result.length > 1) {
            setSituation(() => result.slice(0, 1));
          } else if (!tempArray.length) {
            tempArray.push(result);
            setSituation(tempArray);
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  // 계속 에러가 난 이유는... 진짜 받아오기 전이니깐....
  return (
    <CovidDiv>
      <ul>
        {situation
          ? situation.map((one) => (
              <StyledLi
                key={one.create_dt}
                onClick={() => {
                  console.log("clicked!");
                }}
              >
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
          : "COVID관련 정보 업데이트중 9AM 예정"}
      </ul>
    </CovidDiv>
  );
};
export default Covid;
