// // SearchPage.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SearchInp from '../../components/searchComp/SearchInp';
// import SearchBtn from '../../components/searchComp/SearchBtn';
// import * as S from './SearchPage.Style';

// const SearchPage = () => {
//   const [inputValue, setInputValue] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSearch = () => {
//     // 검색 로직
//   };

//   const handleBack = () => {
//     navigate(-1); // 뒤로가기
//   };

//   return (
//     <div className="searchPage">
//       <S.SearchWrap>
//         <SearchInp value={inputValue} onChange={handleInputChange} />
//         <SearchBtn icon="searchIcon.png" onClick={handleSearch} />
//         <SearchBtn icon="backIcon.png" onClick={handleBack} />
//       </S.SearchWrap>
//     </div>
//   );
// };

// export default SearchPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './SearchPage.Style';
import Loading from '../../components/loading/Loading';

const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearches = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/post/list`,
        );
        setPosts(response.data.content);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearches();
  }, []);

  const filteredPosts = searchTerm
    ? posts.filter((post) => post.title.includes(searchTerm))
    : [];

  const handleSearchClick = (post) => {
    navigate(`/category/${post.category}/${post.id}`);
  };

  return (
    <S.SearchCont>
      <S.SearchInput
        type="text"
        name="search"
        placeholder="찾고싶은 매뉴얼을 입력하세요!"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <S.SearchTitle>검색 결과</S.SearchTitle>
      {loading ? (
        <S.SearchLoading>
          <Loading />
        </S.SearchLoading>
      ) : (
        <S.SearchList>
          {filteredPosts.map((post) => (
            <S.SearchItem key={post.id} onClick={() => handleSearchClick(post)}>
              {post.title}
            </S.SearchItem>
          ))}
        </S.SearchList>
      )}
    </S.SearchCont>
  );
};

export default SearchPage;
