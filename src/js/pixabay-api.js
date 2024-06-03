import axios from 'axios';

const pixabayKey = '44070637-4c17cd33bb35071a705149900';

export async function sendRequest(query, handleResponse, handleError, page, perPage) {
  try {
    const { data: response } = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: pixabayKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: page,
      },
    });
    handleResponse(response);
  } catch (error) {
    handleError(error)
  }
}
