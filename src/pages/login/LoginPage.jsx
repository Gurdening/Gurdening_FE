import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginWrap } from './LoginPage.Style'; 

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const LoginPage = () => {
  const [showComponent, setShowComponent] = useState(true);
  const navigate = useNavigate();

  const onSuccess = (response) => {
    console.log('Google Login Success:', response);
    // TODO: 로그인 처리 로직 추가
  };

  const onFailure = (error) => {
    console.error('Google Login Failed:', error);
  };

  // useEffect(() => {
  //   // 추가 로직
  // }, []);

  return (
    <LoginWrap>
      {showComponent ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      ) 
      // : (
      //   // 로그인 성공 후 표시할 컴포넌트 -> 구글이메일로 변경된 상호작용 막힌 버튼, 마이페이지리스트들, 로그아웃 버튼
      // )
    };
    </LoginWrap>
  );
};

export default LoginPage;


// import React from 'react';
// import { GoogleLogin } from 'react-google-login';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import MyPage from '../myPage/MyPage';

// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// const key = `${process.env.REACT_APP_CLIENT_ID}`;
// const url = `${process.env.REACT_APP_REDIRECT_URL}`;

// const GOOGLE_AUTH_URL = ``; //URL
// const GOOGLE_API_URL = ""; //TOKEN

// const LoginPage = () => {
//   const [] = useState(true);
//   const navigate = useNavigate();

//   const handleGoogleLogin = () => {
//     window.location.href = GOOGLE_AUTH_URL;
//   };

//   const handleGoogleCallback = async () => {{
//     const code = new URLSearchParams(window.location.search).get("code");

//     try {
//       setShowComponen(false);
//       const response = await axios.post(GOOGLE_LOGIN_API_URL, null, {
//         params: {
//           grant_type: "authorization_code",
//           client_id: `${process.env.REACT_APP_CLIENT_ID}`,
//           redirect_uri: `${process.env.REACT_REDIRECT_URL}`,
//           code: code,
//         },
//         headers: {
//           "Content-Type": "application/x-www-form-ulencoded;charset=utf-8",
//         },
//       });

//       const accessToken = response.data.access_token;
//     }

//     localStorage.setItem("accessToken", );
//     localStorage.setItem("accessToken", );
//     navigate("/dashboard");
//     catch (error) {
//       console.error(error);
//     }
//   }};
//   useEffect(() => {
//     if (window.location.pathname ==="/auth/google/callback") {
//       handleGoogleCallback();
//     }
//   }, []);

//   return {
//     {showComponent ? (
//       <S.LoginWrap>
//         <GoogleLogin
//       clientId={clientId}
//       buttonText="Sign with Google"
//       onSuccess={onSuccess}
//       onFailure={onFailure}
//       cookiePolicy={'single_host_origin'}
//     />
//       </S.LoginWrap>
//     )};
//   };
// };

// export default LoginPage;

// const GURDENING_LOGIN_API_URL = `http://localhost:8080/api/oauth2/callback/google`;

// function LoginPage() {
//   const navigate = useNavigate();

//   const onSuccess = (response) => {
//     axios
//       .post('YOUR_BACKEND_ENDPOINT', {
//         token: response.tokenId,
//       })
//       .then((response) => {
//         // JWT 토큰 저장
//         localStorage.setItem('token', response.data.token);
//         // 로그인 성공 후 경로 설정
//         navigate('/dashboard');
//       })
//       .catch((error) => {
//         console.log('Login Failed:', error);
//       });
//   };

//   const onFailure = (error) => {
//     console.log('Google Login Failed:', error);
//   };

//   return (
//     <GoogleLogin
//       clientId={clientId}
//       buttonText="Sign with Google"
//       onSuccess={onSuccess}
//       onFailure={onFailure}
//       cookiePolicy={'single_host_origin'}
//     />
//   );
// }

// export default LoginPage;
