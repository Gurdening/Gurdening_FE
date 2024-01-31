import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Banner.Style';

const images = [
  {
    src: 'https://storage.googleapis.com/example-gurdening-com/img/Banner/applying_ointment_Banner.jpeg',
    route: '/page1',
  },
  {
    src: 'https://storage.googleapis.com/example-gurdening-com/img/Banner/brushing_teeth_Banner.jpeg',
    route: '/page2',
  },
  {
    src: 'https://storage.googleapis.com/example-gurdening-com/img/Banner/Boiling_an_egg_Banner.jpeg', //이미지 수정
    route: '/page3',
  },
];

const Banner = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <S.BannerWrapper>
      <S.BannerStyle>
        <div className="banner-text">
          오늘의 추천 매뉴얼<span>▾</span>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(image.route)}>
              <img src={image.src} alt={`Banner ${index}`} />
            </div>
          ))}
        </Slider>
      </S.BannerStyle>
    </S.BannerWrapper>
  );
};

export default Banner;
