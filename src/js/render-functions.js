import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function getLoaderHtml() {
  return '<div class="loader"></div>';
}

export function showInputNotFound() {
  iziToast.warning({
    title: 'Fill in the search field',
    position: 'topRight',
  });
}

export function showAlertNotFound() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

export function getImageHtml(image) {
  return `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" class="foto" height="148" width="360">
      <div class="info" >
        <p class="icon">Likes: ${image.likes} </p>
        <p class="icon">Views: ${image.views}</p>
        <p class="icon">Comments: ${image.comments}</p>
        <p class="icon">Downloads: ${image.downloads}</p>
      </div>
    </a>`;
}

export function getImagesHtml(images) {
  return images.map(image => getImageHtml(image)).join('');
}
export function showEndOfResults() {
  const endMessage = document.createElement('p');
  endMessage.textContent =
    "We're sorry, but you've reached the end of search results.";
  endMessage.style.textAlign = 'center';
  endMessage.style.marginTop = '20px';
  document.body.appendChild(endMessage);
}
