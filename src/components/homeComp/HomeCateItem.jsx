import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HomeCateItem.Style';

const HomeCateItem = ({ name, icon, path }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(path);
  };
  HomeCateItem;
  return (
    <S.CateItemWrapper onClick={handleItemClick}>
      <S.CateIconWrapper>
        <S.CateIcon src={icon} alt={`${name} icon`} />
      </S.CateIconWrapper>
      <S.CateTextWrapper>
        <S.CateText>{name}</S.CateText>
      </S.CateTextWrapper>
    </S.CateItemWrapper>
  );
};

export default HomeCateItem;
