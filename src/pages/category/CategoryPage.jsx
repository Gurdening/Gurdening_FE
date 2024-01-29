import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchManuals } from './fetchManuals'; // 데이터를 불러오는 함수
import ManualList from '../components/ManualList'; // 매뉴얼 리스트를 표시하는 컴포넌트

const CategoryPage = () => {
  const { categoryId } = useParams(); // URL로부터 categoryId 파라미터를 가져옴
  const [manuals, setManuals] = useState([]); // API로부터 받아올 매뉴얼 데이터를 위한 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const postData = {}; // POST 요청에 필요한 추가 데이터가 있다면 여기에 포함
    setLoading(true); // 데이터 로딩 시작
    fetchManuals(categoryId, postData)
      .then((data) => {
        setManuals(data); // 데이터 세팅
        setLoading(false); // 로딩 상태 해제
      })
      .catch((error) => {
        setError(error); // 에러 세팅
        setLoading(false); // 로딩 상태 해제
      });
  }, [categoryId]); // categoryId가 변경될 때마다 이 효과를 다시 실행

  // 로딩 중 UI 표시
  if (loading) return <div>Loading...</div>;
  // 에러 발생 시 UI 표시
  if (error) return <div>Error: {error.message}</div>;

  // 로드된 데이터를 ManualList 컴포넌트로 전달하여 렌더링
  return <ManualList manuals={manuals} />;
};

export default CategoryPage;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchManuals } from './fetchManuals';
// import ManualList from '../components/ManualList';

// const CategoryPage = () => {
//   const { categoryId } = useParams();
//   const [manuals, setManuals] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const postData = { /* 필요한 데이터를 여기에 넣습니다. */ };

//     const getManuals = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchManuals(categoryId, postData);
//         setManuals(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     getManuals();
//   }, [categoryId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <ManualList manuals={manuals} />
//     </div>
//   );
// };

// export default CategoryPage;
