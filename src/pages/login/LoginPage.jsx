// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import * as S from './LoginPage.Style';
// import { CancelBtn } from '../../components/loginComp/CancelBtn';
// import Logo from '../../assets/images/logo-login-gurdening.png';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginClick = () => {
//     const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
//     const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
//     const scope = encodeURIComponent(
//       'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
//     );
//     const responseType = 'code';
//     const accessType = 'offline';
//     const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`;

//     window.location.href = authUrl;
//   };

//   const handleCancel = () => {
//     navigate(-1);
//   };

//   if (!isLoggedIn) {
//     return (
//       <S.LoginWrap>
//         <S.LoginContainer>
//           <S.Logo src={Logo} alt="Logo" />
//           <S.CancelBtn onClick={handleLoginClick}>
//             구글로 로그인하기
//           </S.CancelBtn>
//           <CancelBtn onClick={handleCancel} />
//         </S.LoginContainer>
//       </S.LoginWrap>
//     );
//   } else {
//     // 로그인 후 페이지 리다이렉션 또는 추가 컴포넌트 렌더링
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
// import Logo from '../../assets/images/logo-login-gurdening.png';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginSuccess = async (googleData) => {
//     // Google에서 제공하는 인증 코드를 사용하여 백엔드 서버에 인증 요청
//     const GOOGLE_TOKEN_API_URL = 'https://oauth2.googleapis.com/token';
//     const body = new URLSearchParams({
//       code: googleData.code,
//       client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
//       redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
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

//       setIsLoggedIn(true);
//       navigate('/mypage');
//     } catch (error) {
//       console.error('Login Failed:', error);
//       // navigate('/error');
//     }
//   };

//   const handleLoginFailure = (error) => {
//     console.error('Google Login Failed:', error);
//     // navigate('/error');
//   };

//   const handleCancel = () => {
//     navigate(-1);
//   };

//   if (!isLoggedIn) {
//     return (
//       <S.LoginWrap>
//         <S.LoginContainer>
//           <S.Logo src={Logo} alt="Logo" />
//           <GoogleLogin
//             clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
//             buttonText="구글로 로그인하기"
//             onSuccess={handleLoginSuccess}
//             onFailure={handleLoginFailure}
//             cookiePolicy={'single_host_origin'}
//             responseType="code"
//             accessType="offline"
//             scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
//           />
//           <CancelBtn onClick={handleCancel} />
//         </S.LoginContainer>
//       </S.LoginWrap>
//     );
//   } else {
//     //
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
import Logo from '../../assets/images/logo-login-gurdening.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = async (googleData) => {
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
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Google Login Failed:', error);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (!isLoggedIn) {
    return (
      <S.LoginWrap>
        <S.LoginContainer>
          <S.Logo src={Logo} alt="Logo" />
          <GoogleLogin
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            buttonText="구글로 로그인하기"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            responseType="code"
            accessType="offline"
            scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
            render={(renderProps) => (
              <S.LogBtn
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                구글로 로그인하기
              </S.LogBtn>
            )}
          />
          <CancelBtn onClick={handleCancel} />
        </S.LoginContainer>
      </S.LoginWrap>
    );
  } else {
    return null;
  }
};

export default LoginPage;
