import React from 'react';
import * as S from './TopBar.Style';

const TopBar = ({ onBack, onLike, isLiked, onBookmark, isBookmarked }) => {
  return (
    <S.TopBarContainer>
      <S.BackIcon onClick={onBack} />
      <S.ActionIcons>
        <S.LikeIcon $isLiked={isLiked} onClick={onLike} />
        <S.BookmarkIcon $isBookmarked={isBookmarked} onClick={onBookmark} />
      </S.ActionIcons>
    </S.TopBarContainer>
  );
};

export default TopBar;
