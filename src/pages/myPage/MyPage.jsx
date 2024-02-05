import React from 'react';
import LoginBtn from '../../components/myPageComp/LoginBtn';
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

// 이거 너가 주석 처리해놨던건데 하단으로 옮겨둘께!
// 로그인 성공시 요소 잠금해제
// import React from 'react';
// import LoginBtn from '../../components/myPageComp/LoginBtn';
// import MenuItems from '../../components/myPageComp/MyPageList';

// const MyPage = ({ isUserLoggedIn }) => {
//   return <div>{!isUserLoggedIn ? <LoginBtn /> : <MyPageList />}</div>;
// };

// export default MyPage;
