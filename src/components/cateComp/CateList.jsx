import React from 'react';
import CateItem from './CateItem';
import { CateListWrapper } from './CateList.Style';
import cookEmoji from '../../assets/emojis/emoji-cook.png';

// 카테고리 데이터 리스트
const categoryData = [
  { name: '요리', icon: cookEmoji, path: '/category/COOKING' },
  { name: '일상생활', icon: cookEmoji, path: '/category/DAILY_LIFE' },
  { name: '청결', icon: cookEmoji, path: '/category/CLEANLINESS' },
  { name: '치료', icon: cookEmoji, path: '/category/TREATMENT' },
  { name: '건강', icon: cookEmoji, path: '/category/HEALTH' },
  { name: '가정', icon: cookEmoji, path: '/category/HOME' },
  { name: '운동', icon: cookEmoji, path: '/category/EXERCISE' },
  { name: '법률', icon: cookEmoji, path: '/category/LAW' },
];

const CategoryList = () => {
  return (
    <CateListWrapper>
      {categoryData.map((category) => (
        <CateItem
          key={category.name}
          name={category.name}
          icon={category.icon}
          path={category.path}
        />
      ))}
    </CateListWrapper>
  );
};

export default CategoryList;
