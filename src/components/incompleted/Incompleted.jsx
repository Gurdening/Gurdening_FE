import React from 'react';
import * as S from './Incompleted.Style';
import Logo from '../logoComp/Logo';
import BacklBtn from '../backBtn/BackBtn';

const Incompleted = () => {
  return (
    <S.IncompWrap>
      <Logo />
      <S.IncompCont>
        <S.IncompTitle>개발 중인 곳이에요!</S.IncompTitle>
        <S.IncompText>
          죄송합니다! 아직 개발중인 곳이에요!
          <br />
          아래의 버튼을 눌러서 돌아가주세요!
        </S.IncompText>
        <BacklBtn title="돌아가기" />
      </S.IncompCont>
    </S.IncompWrap>
  );
};

export default Incompleted;
