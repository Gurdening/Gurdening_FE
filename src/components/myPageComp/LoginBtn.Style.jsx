import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px;
  background-color: #fef5a6;
  border-radius: 20px;
  margin: 15px; // 래퍼 주위의 공간을 위한 마진
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 그림자 효과
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 15px;
`;

export const StyledLoginBtn = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;

  & .login-text {
    display: block;
    font-size: 14px;
    color: #6b501e; // 글자 색상 설정
    margin-bottom: 4px;
  }

  & .login-action {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #473513; // 글자 색상 설정
  }

  // &:hover {
  //   opacity: 0.9;
  // }
`;
