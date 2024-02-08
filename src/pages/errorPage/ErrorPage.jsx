import React from 'react';
import * as S from './ErrorPage.Style';
import Logo from '../../components/logoComp/Logo';
import BacklBtn from '../../components/backBtn/BackBtn';

function ErrorPage() {
  return (
    <S.ErrorWrap>
      <Logo />
      <S.ErrContainer>
        <S.ErrTitle>다시 한번 확인해주세요!</S.ErrTitle>
        <S.ErrText>
          여긴 아무것도 없는 곳이에요!
          <br />
          아래의 버튼을 눌러서 돌아가주세요!
        </S.ErrText>
        <BacklBtn title="돌아가기" />
      </S.ErrContainer>
    </S.ErrorWrap>
  );
}

export default ErrorPage;

// ErrorBoundary.jsx
// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, error: null, errorInfo: null };
//   }

//   static getDerivedStateFromError(error) {
//     // 에러 발생시 상태 업데이트
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // 에러 정보를 state에 저장
//     this.setState({
//       error: error,
//       errorInfo: errorInfo,
//     });
//   }

//   componentDidUpdate(prevProps) {
//     // 경로가 변경되었을 때 에러 상태 초기화
//     if (this.props.location !== prevProps.location) {
//       this.setState({ hasError: false, error: null, errorInfo: null });
//     }
//   }

//   render() {
//     if (this.state.hasError) {
//       // 에러 UI 렌더링
//       return <div>에러가 발생했습니다.</div>;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
