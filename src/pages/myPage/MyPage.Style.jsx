import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: #c8e6c9; // 초록색 배경
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Icon = styled.span`
  // 여기에 아이콘 스타일 추가
`;

export const Text = styled.span`
  // 여기에 텍스트 스타일 추가
  margin-left: 10px;
`;
