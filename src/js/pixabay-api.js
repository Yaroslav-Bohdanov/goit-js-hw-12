import axios from 'axios';

const PIXABAY_API_KEY = '49339894-31872ba4c3578b0a106bd0c96';
const PIXABAY_BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImages(searchTerm, page = 1) {
  try {
    const response = await axios.get(PIXABAY_BASE_URL, {
      params: {
        key: PIXABAY_API_KEY,
        q: searchTerm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images. Please try again.');
  }
}
