import styled from 'styled-components';

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* min-height: 100vh; // 뷰포트의 전체 높이를 확보하면서 내용이 더 길어질 경우 스크롤 가능하게 함 */
  box-sizing: border-box;
`;

export const StyledImage = styled.img`
  max-width: 50%; // 이미지의 최대 너비를 설정
  height: auto; // 높이를 자동으로 조절하여 비율을 유지
  margin-top: 10px;
  margin-left: 33%;
`;

// LogoImg 컴포넌트 스타일 정의
export const LogoImgWrapper = styled.div`
  width: 100%; // 부모 요소의 너비를 가득 채움
  display: flex; // Flexbox를 사용하여 내부 요소를 정렬
  justify-content: center; // 가로축 중앙 정렬
  align-items: center; // 세로축 중앙 정렬
  padding-top: 10px; // Banner와의 간격을 위한 상단 마진
`;

export const LogoImg = styled.img`
  width: 150px;
`;
