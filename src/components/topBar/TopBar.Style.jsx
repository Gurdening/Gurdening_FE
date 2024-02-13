import styled from 'styled-components';
import backIcon from '../../assets/icons/icon-topbar-back.png';
import filledHeartIcon from '../../assets/icons/icon-topbar-like-active.png';
import emptyHeartIcon from '../../assets/icons/icon-topbar-like.png';
import filledBookmarkIcon from '../../assets/icons/icon-topbar-bookmark-active.png';
import emptyBookmarkIcon from '../../assets/icons/icon-topbar-bookmark.png';

export const TopBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 16px 34px;
  z-index: 100;
  background-color: white;
`;

export const BackIcon = styled.img.attrs({
  src: backIcon,
})``;

export const ActionIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const LikeIcon = styled.img.attrs((props) => ({
  src: props.$isLiked ? filledHeartIcon : emptyHeartIcon,
}))`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const BookmarkIcon = styled.img.attrs((props) => ({
  src: props.$isBookmarked ? filledBookmarkIcon : emptyBookmarkIcon,
}))`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
