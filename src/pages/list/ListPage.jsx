import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ListContainer = styled.div`
  /* 스타일 정의 */
`;

const ListItem = styled.div`
  /* 스타일 정의 */
`;

const Thumbnail = styled.img`
  /* 스타일 정의 */
`;

const Title = styled.h2`
  /* 스타일 정의 */
`;

const Stats = styled.div`
  /* 스타일 정의 */
`;

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const { category } = useParams(); // URL 파라미터에서 카테고리 값을 받아옵니다.

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/post/category/${category.toUpperCase()}`,
        );
        setPosts(response.data.content);
      } catch (error) {
        console.error('데이터를 불러오는 데 실패했습니다:', error);
      }
    };

    if (category) {
      fetchCategoryData();
    }
  }, [category]);

  // useEffect 밖에서 return을 사용해 컴포넌트를 렌더링합니다.
  return (
    <ListContainer>
      {posts.map((post) => (
        <ListItem key={post.id}>
          <Thumbnail src={post.images[0]} alt={post.title} />
          <Title>{post.title}</Title>
          <Stats>
            <span>Views: {post.viewCount}</span>
            <span>Likes: {post.likeCount}</span>
          </Stats>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ListPage;
