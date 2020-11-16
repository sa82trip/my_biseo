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
          const result = data["parsed_result"].response.body.items.item;
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
                brief info of {one.stateDt}
                <br /> accumulated confirmed patient
                {expressionList[Math.round(Math.random() * 10)]}
                {one.decideCnt}
                <br />
                accumulated death case
                {expressionList[Math.round(Math.random() * 10)]}
                {one.deathCnt}
              </StyledLi>
            ))
          : "It is not available temporary"}
      </ul>
    </CovidDiv>
  );
};
export default Covid;
