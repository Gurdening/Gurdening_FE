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

// import React from 'react';
// import { SearchBtn } from './SearchBtn';
// import * as S from './SearchInp.Style';

// const SearchInp = ({ value, onChange, onClick, icon }) => (
//   <S.SearchInpCont>
//     <S.SearchInp
//       type="text"
//       value={value}
//       onChange={onChange}
//       placeholder="Search"
//     />
//     <SearchBtn onClick={onClick}>
//       <img src={`/assets/${icon}`} alt="icon" />
//     </SearchBtn>
//   </S.SearchInpCont>
// );

// export default SearchInp;
