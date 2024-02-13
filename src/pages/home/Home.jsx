import React from 'react';
import Banner from '../../components/banner/Banner';
import * as S from './Home.Style';
import HomeCategoryList from '../../components/homeComp/HomeCategoryList';
import Logo from '../../components/logoComp/Logo';

const Home = () => {
  return (
    <S.HomeWrap>
      <Logo />
      <Banner />
      <HomeCategoryList />
    </S.HomeWrap>
  );
};

export default Home;
