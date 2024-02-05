import styled from 'styled-components';

export const Cancel = styled.button`
  background-color: #fbb24d;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 40px;
  margin-bottom: 10px; // 버튼 사이의 간격
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #b0b0b0; // 호버 시 색상 변경
  }
`;
