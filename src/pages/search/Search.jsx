// SearchPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInp from '../../components/searchComp/SearchInp';
import SearchBtn from '../../components/searchComp/SearchBtn';
import * as S from './Search.Style';

const SearchPage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    // 검색 로직
  };

  const handleBack = () => {
    navigate(-1); // 뒤로가기
  };

  return (
    <div className="searchPage">
      <S.SearchWrap>
        <SearchInp value={inputValue} onChange={handleInputChange} />
        <SearchBtn icon="searchIcon.png" onClick={handleSearch} />
        <SearchBtn icon="backIcon.png" onClick={handleBack} />
      </S.SearchWrap>
    </div>
  );
};

export default SearchPage;
