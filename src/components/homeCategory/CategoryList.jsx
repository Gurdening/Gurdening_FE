import React from 'react';
import CateItem from './CategoryItem';
import { CategoryListWrapper } from './CategoryList.Style';

// 카테고리 데이터 리스트
const categoryData = [
  { name: '요리', icon: 'cook-icon.png', path: '/menual1' },
  { name: '일상생활', icon: 'cook-icon.png', path: '/menual2' },
  { name: '청결', icon: 'cook-icon.png', path: '/menual3' },
  { name: '치료', icon: 'cook-icon.png', path: '/menual4' },
  { name: '건강', icon: 'cook-icon.png', path: '/menual5' },
  { name: '가정', icon: 'cook-icon.png', path: '/menual6' },
  { name: '운동', icon: 'cook-icon.png', path: '/menual7' },
  { name: '법률', icon: 'cook-icon.png', path: '/menual8' },
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
