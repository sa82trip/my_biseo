import styled from "styled-components";

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export const StyledLi = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 450px) {
    font-weight: 900;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledInput = styled.input`
    @media only screen and (max-width: 450px) {
        width:${(props) => props.inputWidth + "px"};
        margin: 0 0.5rem 0 0.5rem;
`;

// styled-component를 사용하기
export const StyledH1 = styled.h1`
  color: #ffd7af;
  margin: 0 0 0.5rem 0.5rem;
  @media only screen and (max-width: 375px) {
  }
  // props를 이용하기
`;
// styled-component를 상속하기
export const H1ex = styled(StyledH1)`
  background: #3a3a3a;
  color: #84aa84;
`;
