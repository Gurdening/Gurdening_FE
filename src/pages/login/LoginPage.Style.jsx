import styled from 'styled-components';

export const LoginWrap = styled.div`
  width: 325px;
  margin: 0 auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 85px;
  height: 100vh;
`;

export const Logo = styled.img`
  margin-bottom: 150px;
  max-width: 80%;
`;

export const LogBtn = styled.div`
  // background-color: #fbb24d;
  // color: white;
  background-color: #fbb24d;
  border: 2px solid transparent;
  color: #473513;
  border: none;
  border-radius: 20px;
  padding: 10px 40px;
  margin-bottom: 10px; // 버튼 사이의 간격
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 300px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fbf3c9;
  }
  &:active {
    border: 2px solid #473513;
  }
`;
