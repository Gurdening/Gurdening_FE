import styled from 'styled-components';

export const MyPageListWrapper = styled.div`
  background-color: var(--main-color);
  margin-bottom: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MyPageTitle = styled.div`
  background-color: var(--sub-color);
  color: white;
  font-size: 20px;
  font-weight: 500;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const IconContainer = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export const MyPageItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 16px 25px;
  font-size: 20px;
  color: #65551b;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid var(--sub-color);
  }
`;
