import React from 'react';
import CateItem from './CategoryItem';
import { CategoryListWrapper } from './CategoryList.Style';
import cookEmoji from '../../assets/emojis/emoji-cook.png';
import hospitalEmoji from '../../assets/emojis/emoji-hospital.png';
import pinggu from '../../assets/emojis/pinggu.png';

// 카테고리 데이터 리스트
const categoryData = [
  { name: '요리', icon: cookEmoji, path: '/menual1' },
  { name: '일상생활', icon: hospitalEmoji, path: '/menual2' },
  { name: '청결', icon: pinggu, path: '/menual3' },
  { name: '치료', icon: cookEmoji, path: '/menual4' },
  { name: '건강', icon: cookEmoji, path: '/menual5' },
  { name: '가정', icon: cookEmoji, path: '/menual6' },
  { name: '운동', icon: cookEmoji, path: '/menual7' },
  { name: '법률', icon: cookEmoji, path: '/menual8' },
];

const CategoryList = () => {
  return (
    <CategoryListWrapper>
      {categoryData.map((category) => (
        <CateItem
          key={category.name}
          name={category.name}
          icon={category.icon}
          path={category.path}
        />
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
