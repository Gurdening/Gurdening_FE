import React from 'react';
import * as S from './Category.Style';
import CateList from '../../components/cateComp/CateList';
import Logo from '../../components/logoComp/Logo';

const Category = () => {
  return (
    <S.CategoryWrap>
      <Logo />
      <CateList />
    </S.CategoryWrap>
  );
};

export default Category;
