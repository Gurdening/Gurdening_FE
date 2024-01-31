import styled from 'styled-components';

export const CateListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  // 뭔가 중복 들어가 보인다는게 아니라 중복이 맞았답니다 짜잔!
  // Category.Style.jsx에도 padding-bottom이 들어가 있어서 중복이 되는거였어!
  // 나도 어디에 적용 시켜놔야 할지 몰라서 일단 여기다가 padding 50을 주면
  // 아래에도 gap이 들어가는거같아서 일단 여기다가 주석 추가했어!
  /* padding-bottom: 50px; */
  // 이거 left 안준게 중앙 맞는딩?? 스크롤도 없어!
  /* padding-left: 20px; */
  max-height: 100vh;
  overflow-y: auto;
`;
