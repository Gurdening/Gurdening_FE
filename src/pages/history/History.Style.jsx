import styled from 'styled-components';
import likeIcon from '../../assets/icons/icon-item-like.png';
import viewIcon from '../../assets/icons/icon-item-watch.png';

export const HistoryPageWrap = styled.div`
  width: 325px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export const HistoryCateName = styled.div`
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

export const HistoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 15px;
`;

export const HistoryThumb = styled.img`
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
  color: white;
  font-size: 12px;
`;

export const HistoryTitle = styled.h2`
  font-size: 15px;
  margin: 0;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HistoryStats = styled.div`
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

export const HistoryLoding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const HistoryItems = styled.div`
  border-radius: 16px;
  overflow: hidden;
  outline: 2px solid #677d22;
  width: 155px;
  height: 155px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    outline: 2px solid #d2d999;
    ${InfoContainer} {
      background-color: #d2d999;
    }

    ${HistoryTitle}, ${StatContainer} {
      color: #2d1914;
    }
  }
`;
