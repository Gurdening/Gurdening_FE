import React from 'react';
import { CategoryWrap } from './Category.Style';
import CateList from '../../components/cateComp/CateList';
import LogoImg from '../../assets/images/BannerLogo.png';
import * as S from '../home/Home.Style';

const Category = () => {
  return (
    <CategoryWrap>
      <S.LogoImgWrapper>
        <S.LogoImg src={LogoImg} alt="Gurdening " />
      </S.LogoImgWrapper>
      <CateList />
    </CategoryWrap>
  );
};

export default Category;
