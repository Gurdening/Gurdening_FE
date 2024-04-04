import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from '@react-oauth/google';
import axios from 'axios';
import * as S from './LoginPage.Style';
import { CancelBtn } from '../../components/loginComp/CancelBtn';
import Logo from '../../assets/images/logo-login-gurdening.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = async (googleData) => {
    const GOOGLE_TOKEN_API_URL = 'https://oauth2.googleapis.com/token';
    const body = new URLSearchParams({
      code: googleData.code,
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    try {
      const response = await axios.post(GOOGLE_TOKEN_API_URL, body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const { access_token, refresh_token } = response.data;

      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);

      setIsLoggedIn(true);
      // 이메일 마이페이지 리디렉션
      navigate('/mypage', {
        state: { isLoggedIn: true, email: googleData.profileObj.email },
      });
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <S.LoginWrap>
        <S.LoginContainer>
          <S.Logo src={Logo} alt="Logo" />
          <GoogleLogin onSuccess={onSuccess}>구글로 로그인하기</GoogleLogin>
          <CancelBtn onClick={() => navigate(-1)} />
        </S.LoginContainer>
      </S.LoginWrap>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
