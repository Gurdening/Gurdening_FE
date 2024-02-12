import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './Menual.Style';
import TopBar from '../../components/topBar/Topbar';
import Loading from '../../components/loading/Loading';

const Menual = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [manual, setManual] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    console.log(`좋아요 상태: ${!isLiked ? '좋아요' : '좋아요 취소'}`);
    // TODO: 서버에서 좋아요 관련 이슈 해결시 진행 가능
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked); // 현재 상태를 반전시킴
    console.log(`북마크 상태: ${!isBookmarked ? '북마크' : '북마크 취소'}`);
    // TODO: 서버에 북마크 관련 이슈 해결시 진행 가능
  };

  useEffect(() => {
    const fetchManualData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/post/${postId}`,
        );
        setManual(response.data);
      } catch (error) {
        console.error('메뉴얼을 불러오는데 실패했습니다:', error);
      } finally {
        setIsLoading(false); // 데이터 로딩 완료
      }
    };

    fetchManualData();
  }, [postId]);

  if (isLoading) {
    return (
      <S.LoadingWrapper>
        <Loading />
      </S.LoadingWrapper>
    );
  }

  return (
    <S.MenualWrap>
      <TopBar
        onBack={() => navigate(-1)}
        onLike={() => handleLikeClick(!isLiked)}
        isLiked={isLiked}
        onBookmark={() => handleBookmarkClick(!isBookmarked)}
        isBookmarked={isBookmarked}
      />
      <S.ManualTitle>{manual.title}</S.ManualTitle>
      {manual.content.map((content, index) => (
        <S.ManualContent key={index}>
          <p>{content}</p>
          {manual.images[index] && (
            <S.ManualImage
              src={manual.images[index]}
              alt={`Step ${index + 1} image`}
            />
          )}
        </S.ManualContent>
      ))}
    </S.MenualWrap>
  );
};

export default Menual;
