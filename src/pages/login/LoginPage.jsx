import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import * as S from './LoginPage.Style';
import { CancelBtn } from '../../components/loginComp/CancelBtn';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = async (googleData) => {
    // Google에서 제공하는 인증 코드를 사용하여 백엔드 서버에 인증 요청
    const GOOGLE_TOKEN_API_URL = 'https://oauth2.googleapis.com/token';
    const body = new URLSearchParams({
      code: googleData.code,
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    try {
      const response = await axios.post(GOOGLE_TOKEN_API_URL, body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const accessToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      setIsLoggedIn(true);
      navigate('/mypage');
    } catch (error) {
      console.error('Login Failed:', error);
      // navigate('/error');
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Google Login Failed:', error);
    // navigate('/error');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (!isLoggedIn) {
    return (
      <S.LoginContainer>
        <S.Logo src="../../assets/images/logo-login-gurdening.png" alt="Logo" />
        <GoogleLogin
          clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          responseType="code"
          accessType="offline"
          scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
        />
        <CancelBtn onClick={handleCancel} />
      </S.LoginContainer>
    );
  } else {
    //
    return null;
  }
};

export default LoginPage;
