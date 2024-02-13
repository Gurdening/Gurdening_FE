import React from 'react';
import * as S from './Suggestion.Style';

const Suggestion = () => {
  return (
    <S.SugWrap>
      <S.SugLogo>문의하기</S.SugLogo>
      <S.SugContainer>
        <S.SugTitle>👋안녕하세요!</S.SugTitle>
        <S.SugText>
          도움이 필요하신가요?
          <br />
          버그나 문제사항에 대해 저희에게 알려주세요!
        </S.SugText>
      </S.SugContainer>
      <S.SugContainer>
        <S.SugTitle>📧공식 이메일</S.SugTitle>
        <S.SugText>gurdeningdev@gmail.com</S.SugText>
        <S.SugDetail>
          답변하기 어려운 연락은 정중히 사양하겠습니다.🙇‍♂️
        </S.SugDetail>
      </S.SugContainer>
      <S.SugContainer>
        <S.SugTitle>⏲운영 시간 안내</S.SugTitle>
        <S.SugText>
          🙋‍♂️접수 시간 | 24시간 접수 가능
          <br /> 🙆‍♂️답변 시간 | 평일 주중 10:00 - 18:00
          <br /> 🙅‍♂️정기 휴무 | 토, 일, 공휴일
        </S.SugText>
        <S.SugDetail>
          답변시간 이후 접수건은 운영시간 내 순차적으로 답변해드립니다.
        </S.SugDetail>
      </S.SugContainer>
    </S.SugWrap>
  );
};

export default Suggestion;
