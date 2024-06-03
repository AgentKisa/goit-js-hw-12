import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loadMoreBtn = document.querySelector('.div-load');
const loadHolder = document.querySelector('.load-holder');

function getLoaderHtml() {
  return '<div class="loader"></div>';
}

export function hideLoader() {
  loadHolder.innerHTML = '';
}

export function showLoader() {
  loadHolder.innerHTML = getLoaderHtml();
}

export function showAlertEmptyInput() {
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

export function showAlertEndOfSearchResults() {
  iziToast.warning({
    title: "We're sorry, but you've reached the end of search results.",
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
  return images.map(getImageHtml).join('');
}

export function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('load-more-hidden');
}

export function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('load-more-hidden');
}

export function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
