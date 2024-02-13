import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './BackBtn.Style';

const BacklBtn = ({ title }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.BtnWrap>
      <S.BackButton onClick={handleGoBack}>{title}</S.BackButton>
    </S.BtnWrap>
  );
};

export default BacklBtn;
