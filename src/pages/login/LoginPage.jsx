import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginWrap } from './LoginPage.Style'; // 스타일 파일 임포트 확인 필요

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const LoginPage = () => {
  const [showComponent, setShowComponent] = useState(true);
  const navigate = useNavigate();

  const onSuccess = async (response) => {
    console.log('Google Login Success:', response);
    // TODO: 여기에 로그인 처리 로직 추가

    // 예시: 서버에 토큰 전송 및 응답 처리
    try {
      const { data } = await axios.post('YOUR_BACKEND_ENDPOINT', {
        token: response.tokenId,
      });
      localStorage.setItem('token', data.token); // JWT 토큰 저장
      navigate('/dashboard'); // 로그인 성공 후 경로 설정
    } catch (error) {
      console.error('Login process failed:', error);
    }
  };

  const onFailure = (error) => {
    console.error('Google Login Failed:', error);
  };

  return (
    <LoginWrap>
      {showComponent && (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </LoginWrap>
  );
};

export default LoginPage;
