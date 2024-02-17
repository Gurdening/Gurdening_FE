// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import * as S from './ListPage.Style';
// import { useNavigate, useParams } from 'react-router-dom';
// import Loading from '../../components/loading/Loading';

// const ChangeCateName = (category) => {
//   const categoryNames = {
//     COOKING: '요리',
//     DAILY_LIFE: '일상생활',
//     CLEANLINESS: '청결',
//     TREATMENT: '치료',
//     HEALTH: '건강',
//     HOME: '가정',
//     EXERCISE: '운동',
//     LAW: '법률',
//   };

//   return categoryNames[category] || category;
// };

// const ListPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { category } = useParams();
//   const navigate = useNavigate();

//   const handlePostClick = (postId) => {
//     navigate(`/category/${category}/${postId}`);
//   };

//   useEffect(() => {
//     // console.log('useEffect is called with category:', category);

//     const fetchCategoryData = async () => {
//       setIsLoading(true);
//       try {
//         // console.log('fetchCategoryData is called.');
//         const response = await axios.get(
//           `${import.meta.env.VITE_BACKEND_URL}/post/category/${category}`,
//         );
//         // console.log('Data fetched:', response.data.content);
//         setPosts(response.data.content);
//       } catch (error) {
//         console.error('데이터를 불러오는 데 실패했습니다:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (category) {
//       fetchCategoryData();
//     }
//   }, [category]);

//   if (isLoading) {
//     return (
//       <S.ListLoding>
//         <Loading />
//       </S.ListLoding>
//     );
//   }
//   return (
//     <S.ListPageWrap>
//       <S.ListCateName>{ChangeCateName(category)}</S.ListCateName>
//       <S.ListContainer>
//         {posts.map((post) => (
//           <S.ListItems key={post.id} onClick={() => handlePostClick(post.id)}>
//             <S.ListThumb src={post.images[0]} alt={post.title} />
//             <S.InfoContainer>
//               <S.ListTitle>{post.title}</S.ListTitle>
//               <S.ListStats>
//                 <S.StatContainer>
//                   <S.LikeIcon />
//                   {post.likeCount}
//                 </S.StatContainer>
//                 <S.StatContainer>
//                   <S.ViewIcon />
//                   {post.viewCount}
//                 </S.StatContainer>
//               </S.ListStats>
//             </S.InfoContainer>
//           </S.ListItems>
//         ))}
//       </S.ListContainer>
//     </S.ListPageWrap>
//   );
// };

// export default ListPage;

// ListPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './ListPage.Style'; // 실제 스타일 파일 경로로 수정해야 합니다.
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();

  // 매뉴얼 클릭 이벤트 핸들러
  const handlePostClick = (post) => {
    // 로컬 스토리지에 저장하는 로직 추가
    let recentManuals = JSON.parse(localStorage.getItem('recentManuals')) || [];
    recentManuals = recentManuals.filter((manual) => manual.id !== post.id); // 중복 제거
    recentManuals.unshift(post); // 새로운 매뉴얼을 목록의 앞쪽에 추가
    localStorage.setItem(
      'recentManuals',
      JSON.stringify(recentManuals.slice(0, 10)),
    ); // 최근 10개만 저장

    // 상세 페이지로 이동
    navigate(`/category/${category}/${post.id}`);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/post/category/${category}`,
        );
        setPosts(response.data.content);
      } catch (error) {
        console.error('데이터를 불러오는 데 실패했습니다:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (category) {
      fetchCategoryData();
    }
  }, [category]);

  if (isLoading) {
    return (
      <S.ListLoading>
        <Loading />
      </S.ListLoading>
    );
  }

  return (
    <S.ListPageWrap>
      <S.ListCateName>{category}</S.ListCateName> {/* 카테고리 이름을 표시 */}
      <S.ListContainer>
        {posts.map((post) => (
          <S.ListItems key={post.id} onClick={() => handlePostClick(post)}>
            <S.ListThumb src={post.images[0]} alt={post.title} />
            <S.InfoContainer>
              <S.ListTitle>{post.title}</S.ListTitle>
              <S.ListStats>
                <S.StatContainer>
                  <S.LikeIcon />
                  {post.likeCount}
                </S.StatContainer>
                <S.StatContainer>
                  <S.ViewIcon />
                  {post.viewCount}
                </S.StatContainer>
              </S.ListStats>
            </S.InfoContainer>
          </S.ListItems>
        ))}
      </S.ListContainer>
    </S.ListPageWrap>
  );
};

export default ListPage;
