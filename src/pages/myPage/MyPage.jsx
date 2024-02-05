import React from 'react';
import LoginBtn from '../../components/loginComp/LoginBtn';
import MyPageList from '../../components/myPageComp/MyPageList';
import * as S from './MyPage.Style';

import HistoryIcon from '../../assets/icons/icon-mypage-history.png';
import BookMarkIcon from '../../assets/icons/icon-mypage-bookmark.png';
import SuggestionIcon from '../../assets/icons/icon-mypage-suggestion.png';

const myPageItems = [
  { icon: HistoryIcon, text: 'History', path: '/mypage/history' },
  { icon: BookMarkIcon, text: 'Bookmark', path: '/mypage/bookmark' },
  { icon: SuggestionIcon, text: 'Suggestion', path: '/mypage/suggestion' },
];

const MyPage = () => {
  return (
    <S.MyPageWrap>
      <LoginBtn />
      <MyPageList title="My Page" items={myPageItems} />
    </S.MyPageWrap>
  );
};

export default MyPage;
