import axios from 'axios';

const pixabayKey = '44070637-4c17cd33bb35071a705149900';

// export function sendRequest(query, handleResponse) {
//   const searchParams = new URLSearchParams({
//     key: pixabayKey,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   return fetch(`https://pixabay.com/api/?${searchParams}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(handleResponse)
//     .catch(error => console.log(error));
// }

export async function sendRequest(query, page = 1, perPage = 15) {
  const { data } = await axios.get(`https://pixabay.com/api/?`, {
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

  return data;
}
