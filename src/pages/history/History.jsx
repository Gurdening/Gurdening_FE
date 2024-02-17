// import React, { useState, useEffect } from 'react';
// import * as S from '../list/History.Style';
// import Loading from '../../components/loading/Loading';

// const History = () => {
//   const [recentManuals, setRecentManuals] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // 로컬 스토리지에서 최근 본 매뉴얼 목록을 불러옴
//     const manuals = JSON.parse(localStorage.getItem('recentManuals')) || [];
//     setRecentManuals(manuals);
//     setIsLoading(false);
//   }, []);

//   if (isLoading) {
//     return (
//       <S.HistoryLoading>
//         <Loading />
//       </S.HistoryLoading>
//     );
//   }

//   return (
//     <S.HistoryPageWrap>
//       <S.HistoryTitle>최근 본 매뉴얼</S.HistoryTitle>
//       <S.ListContainer>
//         {recentManuals.map((manual) => (
//           <S.ListItems key={manual.id}>
//             <S.ListThumb src={manual.images[0]} alt={manual.title} />
//             <S.InfoContainer>
//               <S.ListTitle>{manual.title}</S.ListTitle>
//               <S.ListStats>
//                 <S.StatContainer>
//                   <S.LikeIcon />
//                   {manual.likeCount}
//                 </S.StatContainer>
//                 <S.StatContainer>
//                   <S.ViewIcon />
//                   {manual.viewCount}
//                 </S.StatContainer>
//               </S.ListStats>
//             </S.InfoContainer>
//           </S.ListItems>
//         ))}
//       </S.ListContainer>
//     </S.HistoryPageWrap>
//   );
// };

// export default History;
// history.js
import React, { useState, useEffect } from 'react';
import * as S from './HistoryPage.Style'; // 스타일 파일의 경로를 확인해주세요.
import { loadRecentManuals } from './fetchHistoryData'; // fetchHistoryData.js 모듈의 경로를 확인해주세요.
import Loading from '../../components/loading/Loading'; // 로딩 컴포넌트 경로를 확인해주세요.

const History = () => {
  const [recentManuals, setRecentManuals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 로컬 스토리지에서 최근 본 매뉴얼 목록을 불러옴
    const manuals = loadRecentManuals();
    setRecentManuals(manuals);
    setIsLoading(false); // 데이터를 불러온 후 로딩 상태 업데이트
  }, []);

  if (isLoading) {
    return <Loading />; // 로딩 상태일 때 로딩 컴포넌트 표시
  }

  return (
    <S.HistoryPageWrap>
      <S.HistoryTitle>최근 본 매뉴얼</S.HistoryTitle>
      <S.ListContainer>
        {recentManuals.map((manual) => (
          <S.ListItem key={manual.id}>
            <S.ListThumb src={manual.images[0]} alt={manual.title} />
            <S.InfoContainer>
              <S.ListTitle>{manual.title}</S.ListTitle>
              <S.ListStats>
                <S.StatContainer>
                  <S.LikeIcon /> {manual.likeCount}
                </S.StatContainer>
                <S.StatContainer>
                  <S.ViewIcon /> {manual.viewCount}
                </S.StatContainer>
              </S.ListStats>
            </S.InfoContainer>
          </S.ListItem>
        ))}
      </S.ListContainer>
    </S.HistoryPageWrap>
  );
};

export default History;
