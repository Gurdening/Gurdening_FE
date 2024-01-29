import styled from 'styled-components';

export const ManualItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e0ffe0; // 연한 초록색 배경
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ManualItemImage = styled.img`
  width: 100%; // 이미지가 컨테이너의 전체 너비를 차지하도록 설정
  height: 150px; // 고정된 높이, 또는 비율에 따라 조정 가능
  object-fit: cover; // 이미지 비율을 유지하면서 컨테이너에 맞춤
`;

export const ManualItemContent = styled.div`
  padding: 10px;
`;

export const ManualItemTitle = styled.h3`
  margin: 0;
  color: #333; // 제목 색상
  font-size: 1.2em;
`;

export const ManualItemDescription = styled.p`
  color: #666; // 설명 색상
  font-size: 1em;
`;

// import styled from 'styled-components';

// export const ManualItemWrapper = styled.div`
//   background-color: #e0f2d7; // 연한 초록색 배경
//   border-radius: 8px;
//   margin: 10px;
//   overflow: hidden;
// `;

// export const ManualItemImage = styled.img`
//   width: 100%;
//   height: auto; // 이미지의 비율을 유지하면서 너비에 맞춤
// `;

// export const ManualItemContent = styled.div`
//   padding: 8px;
// `;

// export const ManualItemTitle = styled.h3`
//   margin: 0;
//   color: #333;
// `;

// export const ManualItemDescription = styled.p`
//   color: #666;
// `;
