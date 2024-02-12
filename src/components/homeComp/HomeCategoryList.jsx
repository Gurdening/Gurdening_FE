import React from 'react';
import HomeCateItem from './HomeCateItem';
import * as S from './HomeCategoryList.Style';
import Emoji_COOKING from '../../assets/emojis/emoji-cooking.png';
import Emoji_DAILY_LIFE from '../../assets/emojis/emoji-dailylife.png';
import Emoji_CLEANLINESS from '../../assets/emojis/emoji-cleanliness.png';
import Emoji_TREATMENT from '../../assets/emojis/emoji-treatment.png';
import Emoji_HEALTH from '../../assets/emojis/emoji-health.png';
import Emoji_HOME from '../../assets/emojis/emoji-home.png';
import Emoji_EXERCISE from '../../assets/emojis/emoji-exercise.png';
import Emoji_LAW from '../../assets/emojis/emoji-law.png';

// 카테고리 데이터 리스트
const categoryData = [
  { name: '요리', icon: Emoji_COOKING, path: '/category/COOKING' },
  { name: '일상생활', icon: Emoji_DAILY_LIFE, path: '/category/DAILY_LIFE' },
  { name: '청결', icon: Emoji_CLEANLINESS, path: '/category/CLEANLINESS' },
  { name: '치료', icon: Emoji_TREATMENT, path: '/category/TREATMENT' },
  { name: '건강', icon: Emoji_HEALTH, path: '/category/HEALTH' },
  { name: '가정', icon: Emoji_HOME, path: '/category/HOME' },
  { name: '운동', icon: Emoji_EXERCISE, path: '/category/EXERCISE' },
  { name: '법률', icon: Emoji_LAW, path: '/category/LAW' },
];

const HomeCategoryList = () => {
  return (
    <S.CategoryListWrapper>
      <S.CategoryTitle>🤔어떤 매뉴얼이 필요하신가요?</S.CategoryTitle>
      <S.CategoryItemsContainer>
        {categoryData.map((category) => (
          <HomeCateItem
            key={category.name}
            name={category.name}
            icon={category.icon}
            path={category.path}
          />
        ))}
      </S.CategoryItemsContainer>
    </S.CategoryListWrapper>
  );
};

export default HomeCategoryList;
