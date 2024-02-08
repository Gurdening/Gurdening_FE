import React from 'react';
import Banner from '../../components/banner/Banner';
import * as S from './Home.Style';
import CategoryList from '../../components/homeComp/CategoryList';
import Logo from '../../components/logoComp/Logo';

const Home = () => {
  return (
    <S.HomeWrap>
      <Logo />
      <Banner />
      <CategoryList />
    </S.HomeWrap>
  );
};

export default Home;
