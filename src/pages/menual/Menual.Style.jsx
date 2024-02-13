import styled from 'styled-components';

export const MenualWrap = styled.div`
  padding-top: 56px;
  margin-top: 56px;
  width: 325px;
  margin: 0 auto;
`;

export const ManualTitle = styled.h1`
  color: #6b501e;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const ManualContent = styled.div`
  width: 325px;
  color: #6b501e;
  font-size: 15px;
  margin-bottom: 40px;
  letter-spacing: 0.5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ManualImage = styled.img`
  width: 100%;
  padding-top: 10px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
