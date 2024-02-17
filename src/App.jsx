import styled from 'styled-components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import MyPage from './pages/myPage/MyPage';
// import LoginPage from './pages/login/LoginPage';
import NavBar from './components/navBar/NavBar';
import SearchPage from './pages/search/SearchPage';
// import Bookmark from './pages/bookmark/Bookmark';
// import History from './pages/history/History';
import Suggestion from './pages/suggestion/Suggestion';
import ErrorPage from './pages/errorPage/ErrorPage';
import ListPage from './pages/list/ListPage';
import Menual from './pages/menual/Menual';
import Incompleted from './components/incompleted/Incompleted';
import LoginPage from './pages/login/LoginPage';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  background-color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 90px);
  -webkit-overflow-scrolling: touch;
`;

const App = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:category" element={<ListPage />} />
          <Route path="/category/:category/:postId" element={<Menual />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/bookmark" element={<Incompleted />} />
          {/* <Route path="/mypage/history" element={<Incompleted />} /> */}
          <Route path="/mypage/history" element={<History />} />
          <Route path="/mypage/suggestion" element={<Suggestion />} />
          {/* <Route path="/login" element={<Incompleted />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </ContentContainer>
      <NavBar />
    </Wrapper>
  );
};

export default App;
