import styled from 'styled-components';

export const Cancel = styled.button`
  background-color: #fbb24d;
  color: #473513;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 10px 40px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 300px;
  height: 50px;
  transition:
    background-color 0.3s,
    border 0.3s;

  &:hover {
    background-color: #fbf3c9;
  }

  &:active {
    border: 2px solid #473513; // 클릭 시 테두리 추가
  }
`;
