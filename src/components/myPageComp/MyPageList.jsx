// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as S from './MyPageList.Style'; // Import styled components

// import HistoryIcon from '../../assets/icons/icon-mypage-history.png';
// import BookMarkIcon from '../../assets/icons/icon-mypage-bookmark.png';
// import SuggestionIcon from '../../assets/icons/icon-mypage-suggestion.png';

// const MyPageList = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <S.MyPageListWrapper>
//       <S.MyPageTitle>MyPage</S.MyPageTitle>
//       <S.MyPageItem onClick={() => handleNavigation('/history')}>
//         History
//       </S.MyPageItem>
//       <S.MyPageItem onClick={() => handleNavigation('/bookmark')}>
//         Bookmark
//       </S.MyPageItem>
//       <S.MyPageItem onClick={() => handleNavigation('/suggestion')}>
//         Suggestion
//       </S.MyPageItem>
//     </S.MyPageListWrapper>
//   );
// };

// export default MyPageList;

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
