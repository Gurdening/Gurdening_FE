import React from 'react';
import * as S from './SearchBtn.Style';

const SearchBtn = ({ icon, onClick }) => (
  <S.SearchBtn onClick={onClick}>
    <img src={`/assets/${icon}`} alt="icon" />
  </S.SearchBtn>
);

export default SearchBtn;
