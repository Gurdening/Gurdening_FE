import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MyPageList.Style'; // Import styled components

const MyPageList = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <S.MyPageListWrapper>
      <S.MyPageTitle>MyPage</S.MyPageTitle>
      <S.MyPageItem onClick={() => handleNavigation('/history')}>
        History
      </S.MyPageItem>
      <S.MyPageItem onClick={() => handleNavigation('/bookmark')}>
        Bookmark
      </S.MyPageItem>
      <S.MyPageItem onClick={() => handleNavigation('/suggestion')}>
        Suggestion
      </S.MyPageItem>
    </S.MyPageListWrapper>
  );
};

export default MyPageList;
