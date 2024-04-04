import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginBtn.Style';

import TestProfileImg from '../../assets/icons/icon-login-emtpyimage.png';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const defaultProfileImg = '../../assets/images/logo-main.png'; // Set the default image path

const LoginBtn = ({ profileImg = defaultProfileImg, userEmail }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <S.LoginWrapper onClick={handleLoginClick}>
      <S.ProfilePicture src={TestProfileImg} alt="Profile" />
      <S.LoginTextContainer>
        <span className="welcome-text">환영합니다!</span>
        <span className="guide-text">
          {userEmail ? userEmail : '이 곳을 눌러 로그인하세요!'}
        </span>
      </S.LoginTextContainer>
    </S.LoginWrapper>
  );
};

export default LoginBtn;

// import React from 'react';
// import * as S from './LoginBtn.Style';

// import TestProfileImg from '../../assets/images/logo-main-big.png';

// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// const defaultProfileImg = '../../assets/images/logo-main.png'; // Set the default image path

// const LoginBtn = ({ profileImg = defaultProfileImg, userEmail }) => {
//   return (
//     <S.LoginWrapper>
//       <S.ProfilePicture src={TestProfileImg} alt="Profile" />
//       <S.LoginTextContainer>
//         <span className="welcome-text">All about Gurdening</span>
//         <span className="guide-text">
//           {userEmail ? userEmail : 'Guide to live together'}
//         </span>
//       </S.LoginTextContainer>
//     </S.LoginWrapper>
//   );
// };

// export default LoginBtn;
