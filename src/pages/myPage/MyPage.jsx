// 로그인 성공시 요소 잠금해제
// import React from 'react';
// import LoginBtn from '../../components/myPageComp/LoginBtn';
// import MenuItems from '../../components/myPageComp/MyPageList';

// const MyPage = ({ isUserLoggedIn }) => {
//   return <div>{!isUserLoggedIn ? <LoginBtn /> : <MyPageList />}</div>;
// };

// export default MyPage;

import React from 'react';
import LoginBtn from '../../components/myPageComp/LoginBtn';
import MyPageList from '../../components/myPageComp/MyPageList';

const MyPage = ({ isUserLoggedIn }) => {
  return (
    <div>
      {!isUserLoggedIn && <LoginBtn />}
      <MyPageList />
      <LogoutButton />
    </div>
  );
};

export default MyPage;
