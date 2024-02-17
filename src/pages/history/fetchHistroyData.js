// fetchHistoryData.js

// 최근 본 매뉴얼 목록을 로컬 스토리지에서 불러오는 함수
export const loadRecentManuals = () => {
  try {
    const serializedData = localStorage.getItem('recentManuals');
    if (serializedData === null) {
      return []; // 데이터가 없으면 빈 배열 반환
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading recent manuals from localStorage', error);
    return []; // 오류가 발생하면 빈 배열 반환
  }
};

// 최근 본 매뉴얼 목록을 로컬 스토리지에 저장하는 함수
export const saveRecentManuals = (manuals) => {
  try {
    const serializedData = JSON.stringify(manuals);
    localStorage.setItem('recentManuals', serializedData);
  } catch (error) {
    console.error('Error saving recent manuals to localStorage', error);
  }
};
