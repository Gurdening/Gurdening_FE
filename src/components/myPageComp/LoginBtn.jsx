import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginBtn.Style';

import TestProfileImg from '../../assets/icons/icon-login-emtpyimage.png';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const defaultProfileImg = '../../assets/images/logo-main.png'; // Set the default image path

const LoginBtn = ({ profileImg = defaultProfileImg }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // 소셜 로그인 페이지로 리다이렉션
  };

  return (
    <S.LoginWrapper onClick={handleLoginClick}>
      <S.ProfilePicture src={TestProfileImg} alt="Profile" />
      <S.LoginTextContainer>
        <span className="welcome-text">Welcome to Guardning!</span>
        <span className="guide-text">Guide us to live together</span>
      </S.LoginTextContainer>
    </S.LoginWrapper>
  );
};

export default LoginBtn;
