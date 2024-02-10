import styled from 'styled-components';
import likeIcon from '../../assets/icons/icon-item-like.png';
import viewIcon from '../../assets/icons/icon-item-watch.png';

export const ListPageWrap = styled.div`
  width: 325px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export const ListCateName = styled.div`
  width: 155px;
  height: 34px;
  border-radius: 20px;
  margin: 25px auto 50px auto;
  background-color: #677d22;
  color: white;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 15px;
`;

export const ListItems = styled.div`
  border-radius: 16px;
  overflow: hidden;
  outline: 2px solid #d2d999;
  width: 155px;
  height: 155px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ListThumb = styled.img`
  width: 100%;
  height: 105px;
  object-fit: cover;
  margin: 0;
  display: block;
`;

export const InfoContainer = styled.div`
  padding: 9px;
  background-color: #677d22;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #2d1914;
  font-size: 12px;
`;

export const ListTitle = styled.h2`
  font-size: 15px;
  margin: 0;
  color: #2d1914;
`;

export const ListStats = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 12px;
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;
`;

export const LikeIcon = styled.img.attrs({
  src: likeIcon,
})`
  margin-right: 4px;
`;

export const ViewIcon = styled.img.attrs({
  src: viewIcon,
})`
  margin-right: 4px;
`;

export const ListLoding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
