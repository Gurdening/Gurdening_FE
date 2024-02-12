import React from 'react';
import * as S from './Loading.Style';
import loading from '../../assets/gifs/gif-loading.gif';

const Loading = () => {
  return (
    <S.LoadingCont>
      <S.LoadingText>잠시만 기다려 주세요!</S.LoadingText>
      <S.LoadingGif src={loading} alt="로딩중..." />
    </S.LoadingCont>
  );
};

export default Loading;
