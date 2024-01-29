import styled from 'styled-components';

export const CateItemWrapper = styled.div`
  width: 325px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: #677d22;
  background-color: #d2d999;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fef5a6;
  }
`;

export const CateIconWrapper = styled.div`
  width: 80px;
  height: 60px;
  background-color: #d2d999;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  padding: 5px;
`;

export const CateIcon = styled.img`
  width: 60px;
  height: 60px;
  // margin-right: 10px;
`;

export const CateTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; // 텍스트 중앙정렬
`;

export const CateText = styled.span`
  font-size: 25px;
  color: #6b501e;
  // color: #473513;
`;
