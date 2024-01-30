import React from 'react';
import * as S from './SearchInp.Style';
import { SearchBtn } from './SearchBtn.Style';

const SearchInp = ({ value, onChange }) => (
  <S.SearchInp
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search"
  />
);

export default SearchInp;
