import styled from 'styled-components';

export const MyPageListWrapper = styled.div`
  background-color: #c8e6c9; /* Adjust the color to match your screenshot */
  padding: 10px 20px;
  margin: 8px 0;
  border-radius: 10px;
`;

export const MyPageItem = styled.div`
  padding: 10px 0;
  font-size: 18px;
  color: #3e4c59; /* Adjust the text color as needed */
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #a5d6a7; /* Adjust the border color to match your screenshot */
  }
`;
