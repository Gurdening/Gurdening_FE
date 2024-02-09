import axios from 'axios';

const fetchCategoryData = async (category) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/post/category/${category}`,
    );
    console.log(response.data);
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
  }
};

fetchCategoryData('COOKING');
