// ManualItem.jsx
import React from 'react';
import {
  ManualItemWrapper,
  ManualItemImage,
  ManualItemContent,
  ManualItemTitle,
  ManualItemDescription,
} from './ManualItem.styles'; // 스타일 컴포넌트 임포트

const ManualItem = ({ title, description, images }) => {
  const firstImage = images[0] || ''; // 첫 번째 이미지 사용, 없을 경우 빈 문자열

  /* 백엔드 api에서 이미지의 첫번째를 받아오는 방법: 단락 평가
  {
  "title": "Manual Title",
  "description": "Description of the manual",
  "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg"]
}
*/

  return (
    <ManualItemWrapper>
      {firstImage && <ManualItemImage src={firstImage} alt={title} />}
      <ManualItemContent>
        <ManualItemTitle>{title}</ManualItemTitle>
        <ManualItemDescription>{description}</ManualItemDescription>
      </ManualItemContent>
    </ManualItemWrapper>
  ); //firstimg가 빈 문자열이 아닐 때만 컴포넌트 렌더링
};

export default ManualItem;
