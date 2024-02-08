import React from 'react';
import * as S from './Logo.Style';
import LogoImg from '../../assets/images/BannerLogo.png';

function Logo() {
  return (
    <S.LogoWrap>
      <S.LogoImg src={LogoImg} alt="Gurdening " />
    </S.LogoWrap>
  );
}

export default Logo;
