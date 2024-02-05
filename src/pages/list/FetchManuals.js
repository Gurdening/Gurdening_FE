// fetchManuals.js
export const fetchManuals = async (categoryId, postData) => {
  try {
    const response = await fetch(
      `https://your-backend.com/api/categories/${categoryId}/manuals`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${yourAuthToken}`, // 필요한 경우
        },
        body: JSON.stringify(postData),
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching manuals:', error);
    throw error; // 여기서 에러를 던지면 컴포넌트에서 처리
  }
};
