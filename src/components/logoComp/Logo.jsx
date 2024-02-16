import React from 'react';
import * as S from './Logo.Style';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/BannerLogo.png';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <S.LogoWrap>
      <S.LogoImg src={LogoImg} alt="Gurdening" onClick={handleLogoClick} />
    </S.LogoWrap>
  );
};

export default Logo;
