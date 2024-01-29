import styled from 'styled-components';
// import GurdeningImg from '../../assets/images/BannerLogo.png';

export const StyledImage = styled.img`
  max-width: 50%; // 이미지의 최대 너비를 설정
  height: auto; // 높이를 자동으로 조절하여 비율을 유지
  margin-top: 10px;
  margin-left: 33%;
`;

// export const LogoImg = () => <StyledImage src={GurdeningImg} alt="Gurdening" />;

// LogoImg 컴포넌트 스타일 정의
export const LogoImgWrapper = styled.div`
  width: 100%; // 부모 요소의 너비를 가득 채움
  display: flex; // Flexbox를 사용하여 내부 요소를 정렬
  justify-content: center; // 가로축 중앙 정렬
  align-items: center; // 세로축 중앙 정렬
  margin-top: 10px; // Banner와의 간격을 위한 상단 마진
`;

export const LogoImg = styled.img`
  max-width: 40%; // 최대 너비 제한
  height: auto; // 높이 자동 조절
`;
