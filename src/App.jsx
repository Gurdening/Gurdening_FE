import styled from 'styled-components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import MyPage from './pages/myPage/MyPage';
import LoginPage from './pages/login/LoginPage';
import NavBar from './components/navBar/NavBar';
import MyInfScrollCont from './components/InfScroll/MyInfScrollCont';
// import ErrorPage from '';

const Wrapper = styled.div`
  position: relative;
  height: 100vh; // 뷰포트 높이에 맞추어 전체 화면 사용
  overflow: hidden; // x축 스크롤 방지
`;

const ContentContainer = styled.div`
  background-color: #ffffff;
  overflow-y: scroll; // y축 스크롤 활성화
  overflow-x: hidden; // x축 스크롤 방지
  height: calc(100vh - 50px); // NavBar 높이만큼 제외
  -webkit-overflow-scrolling: touch; // iOS 스크롤 부드럽게
`;

const App = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* 기타 라우트 */}
        </Routes>
      </ContentContainer>
      <NavBar />
    </Wrapper>
  );
};

export default App;
