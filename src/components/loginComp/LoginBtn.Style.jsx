import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px;
  background-color: #fbf3c9;
  border-radius: 20px;
  margin: 40px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 100%;
`;

export const ProfilePicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const LoginTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .welcome-text {
    font-size: 20px;
    font-weight: 500;
    color: #2d1914;
    margin-bottom: 10px;
  }

  & .guide-text {
    font-size: 18px;
    color: #65551b;
    font-weight: 300;
  }
`;
