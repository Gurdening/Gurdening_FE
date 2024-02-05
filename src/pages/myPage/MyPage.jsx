import React from 'react';
import LoginBtn from '../../components/loginComp/LoginBtn';
import MyPageList from '../../components/myPageComp/MyPageList';
import * as S from './MyPage.Style';

import HistoryIcon from '../../assets/icons/icon-mypage-history.png';
import BookMarkIcon from '../../assets/icons/icon-mypage-bookmark.png';
import SuggestionIcon from '../../assets/icons/icon-mypage-suggestion.png';

// 요건 컴포넌트 재사용 테스트 아이콘이야
import EditIcon from '../../assets/icons/icon-mypage-edit.png';
import NoticeIcon from '../../assets/icons/icon-mypage-notice.png';
import FAQIcon from '../../assets/icons/icon-mypage-faq.png';

const myPageItems = [
  { icon: HistoryIcon, text: 'History', path: '/history' },
  { icon: BookMarkIcon, text: 'Bookmark', path: '/bookmark' },
  { icon: SuggestionIcon, text: 'Suggestion', path: '/suggestion' },
];

const TestItems = [
  { icon: EditIcon, text: 'Edit Profile', path: '/editprofile' },
  { icon: NoticeIcon, text: 'Notice', path: '/notice' },
  { icon: FAQIcon, text: 'FAQ', path: '/faq' },
];

const MyPage = () => {
  return (
    <S.MyPageWrap>
      <LoginBtn />
      <MyPageList title="My Page" items={myPageItems} />
      {/* 여기는 재사용 테스트 해보려고 만든거야 */}
      <MyPageList title="TEST" items={TestItems} />
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
