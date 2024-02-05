import React from 'react';
import * as S from './Suggestion.Style';

function Suggestion() {
  return (
    <S.SugWrap>
      <S.SugLogo>Suggestion</S.SugLogo>
      <S.SugContainer>
        <S.SugTitle>Hello!</S.SugTitle>
        <S.SugText>
          Is there a service you are looking for?
          <br /> We always listen to your voice!
        </S.SugText>
      </S.SugContainer>
      <S.SugContainer>
        <S.SugTitle>Contact</S.SugTitle>
        <S.SugText>GardeningDev@gmail.com</S.SugText>
        <S.SugDetail>Inappropriate emails are politely declined.</S.SugDetail>
      </S.SugContainer>
      <S.SugContainer>
        <S.SugTitle>Operating hours information</S.SugTitle>
        <S.SugText>
          Application available | 24 hours a day
          <br /> Response time | Weekdays 10:00 - 18:00
          <br /> (Closed on Sat, Sun, and public holidays)
        </S.SugText>
        <S.SugDetail>
          Inquiries received after the response time will be <br /> responded to
          sequentially during operating hours.
        </S.SugDetail>
      </S.SugContainer>
    </S.SugWrap>
  );
}

export default Suggestion;
