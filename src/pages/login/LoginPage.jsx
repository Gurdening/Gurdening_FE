import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyPage from '../myPage/MyPage';
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GURDENING_LOGIN_API_URL = `http://localhost:8080/api/oauth2/callback/google`;

function LoginPage() {
  const navigate = useNavigate();

  const onSuccess = (response) => {
    axios
      .post('YOUR_BACKEND_ENDPOINT', {
        token: response.tokenId,
      })
      .then((response) => {
        // JWT 토큰 저장
        localStorage.setItem('token', response.data.token);
        // 로그인 성공 후 경로 설정
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log('Login Failed:', error);
      });
  };

  const onFailure = (error) => {
    console.log('Google Login Failed:', error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default LoginPage;
