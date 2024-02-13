import React from 'react';
import LoginBtn from '../../components/loginComp/LoginBtn';
import MyPageList from '../../components/myPageComp/MyPageList';
import * as S from './MyPage.Style';

import HistoryIcon from '../../assets/icons/icon-mypage-history.png';
import BookMarkIcon from '../../assets/icons/icon-mypage-bookmark.png';
import SuggestionIcon from '../../assets/icons/icon-mypage-suggestion.png';

const myPageItems = [
  { icon: HistoryIcon, text: '최근 본 매뉴얼', path: '/mypage/history' },
  { icon: BookMarkIcon, text: '즐겨찾기', path: '/mypage/bookmark' },
  { icon: SuggestionIcon, text: '문의하기', path: '/mypage/suggestion' },
];

const MyPage = () => {
  return (
    <S.MyPageWrap>
      <LoginBtn />
      <MyPageList title="마이페이지" items={myPageItems} />
    </S.MyPageWrap>
  );
};

export default MyPage;
