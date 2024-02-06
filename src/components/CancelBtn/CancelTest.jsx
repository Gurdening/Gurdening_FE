import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './CancelTest.Style';

function CancelTest({ title }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.BtnWrap>
      <S.CancelBtn onClick={handleGoBack}>{title}</S.CancelBtn>
    </S.BtnWrap>
  );
}

export default CancelTest;
