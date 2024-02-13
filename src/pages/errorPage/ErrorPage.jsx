import React from 'react';
import * as S from './ErrorPage.Style';
import Logo from '../../components/logoComp/Logo';
import BacklBtn from '../../components/backBtn/BackBtn';

const ErrorPage = () => {
  return (
    <S.ErrorWrap>
      <Logo />
      <S.ErrContainer>
        <S.ErrTitle>다시 한번 확인해주세요!</S.ErrTitle>
        <S.ErrText>
          여긴 아무것도 없는 곳이에요!
          <br />
          아래의 버튼을 눌러서 돌아가주세요!
        </S.ErrText>
        <BacklBtn title="돌아가기" />
      </S.ErrContainer>
    </S.ErrorWrap>
  );
};

export default ErrorPage;
