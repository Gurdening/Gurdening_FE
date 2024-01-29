import React from 'react';
import Banner from '../../components/banner/Banner';
import * as S from './Home.Style';
import CategoryList from '../../components/homeCategory/CategoryList';
import LogoImg from '../../assets/images/BannerLogo.png';
// const logoImg = '../../assets/images/BannerLogo.png';

const Home = () => {
  const images = [
    {
      url: '../../assets/images/banner1.jpg',
      link: '/menual',
    },
    {
      url: '../../assets/images/banner2.jpg',
      link: '/menual',
    },
    {
      url: '../../assets/images/banner3.jpg',
      link: '/menual',
    },
  ];

  return (
    <div>
      <S.LogoImgWrapper>
        <S.LogoImg src={LogoImg} alt="Gurdening " />
      </S.LogoImgWrapper>
      <Banner images={images} />
      <CategoryList />
    </div>
  );
};

export default Home;
