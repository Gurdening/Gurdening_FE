import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './ListPage.Style';
import { useNavigate, useParams } from 'react-router-dom';

const ChangeCateName = (category) => {
  const categoryNames = {
    COOKING: '요리',
    DAILY_LIFE: '일상생활',
    CLEANLINESS: '청결',
    TREATMENT: '치료',
    HEALTH: '건강',
    HOME: '가정',
    EXERCISE: '운동',
    LAW: '법률',
  };

  return categoryNames[category] || category;
};

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/category/${category}/${postId}`);
  };

  useEffect(() => {
    // console.log('useEffect is called with category:', category);

    const fetchCategoryData = async () => {
      setIsLoading(true);
      try {
        // console.log('fetchCategoryData is called.');
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/post/category/${category}`,
        );
        // console.log('Data fetched:', response.data.content);
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
    return <S.ListLoding>로딩 중...</S.ListLoding>;
  }
  return (
    <S.ListPageWrap>
      <S.ListCateName>{ChangeCateName(category)}</S.ListCateName>
      <S.ListContainer>
        {posts.map((post) => (
          <S.ListItems key={post.id} onClick={() => handlePostClick(post.id)}>
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
