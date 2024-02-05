import React from 'react';
import Banner from '../../components/banner/Banner';
import * as S from './Home.Style';
import CategoryList from '../../components/homeComp/CategoryList';
import LogoImg from '../../assets/images/BannerLogo.png';
// const logoImg = '../../assets/images/BannerLogo.png';

const Home = () => {
  return (
    <S.HomeWrap>
      <S.LogoImgWrapper>
        <S.LogoImg src={LogoImg} alt="Gurdening " />
      </S.LogoImgWrapper>
      <Banner />
      <CategoryList />
    </S.HomeWrap>
  );
};

export default Home;
