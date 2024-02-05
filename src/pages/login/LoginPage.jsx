// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
// import * as S from './LoginPage.Style';
// import { CancelBtn } from '../../components/loginComp/CancelBtn';
// import.meta.env.VITE_GOOGLE_CLIENT_ID;

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 추적하는 상태 변수 추가

//   // Google Login 성공 핸들러
//   const handleLoginSuccess = (response) => {
//     console.log('Login Success:', response);
//     // TODO: 서버로 로그인 정보를 보내고 확인 처리를 해야 함
//     // 서버에서 확인 후 JWT 토큰을 받아 로컬 스토리지에 저장 예정
//     localStorage.setItem('token', response.tokenId); // JWT 토큰 저장 예시
//     setIsLoggedIn(true); // 로그인 상태를 true로 업데이트
//     navigate('/mypage'); // 마이페이지로 리다이렉션
//   };

//   // Google Login 실패 핸들러
//   const handleLoginFailure = (error) => {
//     console.error('Login Failed:', error);
//     navigate('/error'); // 에러 페이지로 리다이렉션
//   };

//   // 취소 버튼 클릭 핸들러
//   const handleCancel = () => {
//     navigate(-1); // 이전 페이지로 이동
//   };

//   // 로그인 상태에 따라 렌더링할 컴포넌트를 결정
//   if (!isLoggedIn) {
//     return (
//       <S.LoginWrap>
//         <S.LoginContainer>
//           <S.Logo src="path-to-your-logo.png" alt="Gurdening Logo" />
//           <GoogleLogin
//             clientId={process.env.VITE_GOOGLE_CLIENT_ID} // 환경변수에서 클라이언트 ID 가져오기
//             buttonText="구글로 로그인"
//             onSuccess={handleLoginSuccess}
//             onFailure={handleLoginFailure}
//             cookiePolicy={'single_host_origin'}
//           />
//           {/* <CancelBtn onClick={handleCancel}>Cancel</CancelBtn> */}
//           <CancelBtn onClick={handleCancel} />
//         </S.LoginContainer>
//       </S.LoginWrap>
//     );
//   } else {
//     return null;
//   }
// };

// export default LoginPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
// import * as S from './LoginPage.Style';
// import { CancelBtn } from '../../components/loginComp/CancelBtn';

// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Google Login 성공 핸들러
//   const handleLoginSuccess = async (response) => {
//     console.log('Login Success:', response);
//     // 서버로 로그인 정보 전송 및 확인 처리
//     try {
//       // 예시: 서버 로그인 API URL
//       const YOUR_BACKEND_ENDPOINT = 'YOUR_BACKEND_LOGIN_API_URL';

//       // 서버로 tokenId 전송 (Google 응답에서 받은)
//       const { data } = await axios.post(YOUR_BACKEND_ENDPOINT, {
//         tokenId: response.tokenId,
//       });

//       // 서버 응답에서 자체 accessToken 및 refreshToken 저장
//       localStorage.setItem('accessToken', data.accessToken);
//       localStorage.setItem('refreshToken', data.refreshToken);

//       setIsLoggedIn(true);
//       navigate('/mypage'); // 마이페이지로 리다이렉션
//     } catch (error) {
//       console.error('Login Failed:', error);
//       navigate('/error'); // 에러 페이지로 리다이렉션
//     }
//   };

//   // Google Login 실패 핸들러
//   const handleLoginFailure = (error) => {
//     console.error('Login Failed:', error);
//     navigate('/error'); // 에러 페이지로 리다이렉션
//   };

//   // 취소 버튼 클릭 핸들러
//   const handleCancel = () => {
//     navigate(-1); // 이전 페이지로 이동
//   };

//   if (!isLoggedIn) {
//     return (
//       <S.LoginWrap>
//         <S.LoginContainer>
//           <S.Logo src="path-to-your-logo.png" alt="Gurdening Logo" />
//           <GoogleLogin
//             clientId={clientId}
//             buttonText="구글로 로그인"
//             onSuccess={handleLoginSuccess}
//             onFailure={handleLoginFailure}
//             cookiePolicy={'single_host_origin'}
//           />
//           <CancelBtn onClick={handleCancel} />
//         </S.LoginContainer>
//       </S.LoginWrap>
//     );
//   } else {
//     // 로그인 성공 후 표시할 컴포넌트
//     // 예: 사용자 정보 표시, 로그아웃 버튼 등
//     return null;
//   }
// };

// export default LoginPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
// import axios from 'axios';
// import * as S from './LoginPage.Style';
// import { CancelBtn } from '../../components/loginComp/CancelBtn';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 추적하는 상태 변수

//   const handleLoginSuccess = async (googleData) => {
//     const GOOGLE_TOKEN_API_URL = 'https://oauth2.googleapis.com/token';
//     const body = new URLSearchParams({
//       code: googleData.code, // 이 부분은 구글 로그인 응답에서 제공되는 코드로 변경해야 할 수 있음
//       client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//       client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET, // 클라이언트 시크릿도 필요
//       redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
//       grant_type: 'authorization_code',
//     });

//     try {
//       const response = await axios.post(GOOGLE_TOKEN_API_URL, body.toString(), {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });

//       const accessToken = response.data.access_token;
//       const refreshToken = response.data.refresh_token;

//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);

//       setIsLoggedIn(true); // 로그인 상태 업데이트
//       navigate('/mypage'); // 마이페이지로 리다이렉션
//     } catch (error) {
//       console.error('Login Failed:', error);
//       navigate('/error'); // 에러 페이지로 리다이렉션
//     }
//   };

//   const handleLoginFailure = (error) => {
//     console.error('Google Login Failed:', error);
//     navigate('/error'); // 에러 페이지로 리다이렉션
//   };

//   const handleCancel = () => {
//     navigate(-1); // 이전 페이지로 이동
//   };

//   if (!isLoggedIn) {
//     return (
//       <S.LoginContainer>
//         <S.Logo src="path-to-your-logo.png" alt="Logo" />
//         <GoogleLogin
//           clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//           buttonText="Sign in with Google"
//           onSuccess={handleLoginSuccess}
//           onFailure={handleLoginFailure}
//           cookiePolicy={'single_host_origin'}
//         />
//         <CancelBtn onClick={handleCancel} />
//       </S.LoginContainer>
//     );
//   } else {
//     return null;
//   }
// };

// export default LoginPage;

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
        <S.Logo src="path-to-your-logo.png" alt="Logo" />
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
