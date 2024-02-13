import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MyPageList.Style';

const MyPageList = ({ title, items }) => {
  const navigate = useNavigate();

  return (
    <S.MyPageListWrapper>
      <S.MyPageTitle>{title}</S.MyPageTitle>
      {items.map((item, index) => (
        <S.MyPageItem key={index} onClick={() => navigate(item.path)}>
          <S.IconContainer>
            <img src={item.icon} alt={`${item.text} icon`} />
          </S.IconContainer>
          {item.text}
        </S.MyPageItem>
      ))}
    </S.MyPageListWrapper>
  );
};

export default MyPageList;
