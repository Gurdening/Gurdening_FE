import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginBtn.Style';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const defaultProfileImg = '../../assets/images/logo-main.png'; // Set the default image path

const LoginBtn = ({ profileImg = defaultProfileImg }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // 소셜 로그인 페이지로 리다이렉션
  };

  return (
    <S.LoginWrapper>
      <S.ProfilePicture src={profileImg} />
      <S.StyledLoginBtn onClick={handleLoginClick}>
        <span className="login-text">
          안내로 더불어 성장하는 공간, Gurdening
        </span>
        <span className="login-action">
          {isLoggedIn ? 'user@email.com' : '로그인하기'}
        </span>
      </S.StyledLoginBtn>
    </S.LoginWrapper>
  );
};

export default LoginBtn;
