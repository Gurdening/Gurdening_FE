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
//     }
//   };

//   const handleLoginFailure = (error) => {
//     console.error('Google Login Failed:', error);
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
//             render={(renderProps) => (
//               <S.LogBtn
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//               >
//                 구글로 로그인하기
//               </S.LogBtn>
//             )}
//           />
//           <CancelBtn onClick={handleCancel} />
//         </S.LoginContainer>
//       </S.LoginWrap>
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
import Logo from '../../assets/images/logo-login-gurdening.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = async (googleData) => {
    const GOOGLE_TOKEN_API_URL = 'https://oauth2.googleapis.com/token';
    const body = new URLSearchParams({
      code: googleData.code,
      client_id: `${import.meta.env.VITE_GOOGLE_CLIENT_ID}`,
      redirect_uri: `${import.meta.env.VITE_GOOGLE_REDIRECT_URI}`,
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
    // 로그인이 되어있는 경우 마이페이지로 리디렉션
    navigate('/mypage', { state: { isLoggedIn: true } });
    return null;
  }
};

export default LoginPage;
