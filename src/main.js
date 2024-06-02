import * as api from './js/pixabay-api';
import * as render from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.div-load');

let page = 1;
const perPage = 15;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements.searchInput.value.trim();

  if (query === '') {
    render.showInputNotFound();
    return;
  }

  gallery.innerHTML = render.getLoaderHtml();

  page = 1; // Сброс страницы при новом поиске

  //   api.sendRequest(query, handleResponse);

  loadMore.classList.add('load-more-hidden');

  try {
    const response = await api.sendRequest(query, page, perPage);
    handleResponse(response);
  } catch (error) {
    console.error('error:', error);
    render.showAlertNotFound();
  }
});

function handleResponse(response, loadMoreBtn = false) {
  if (!response || response.total === 0) {
    render.showAlertNotFound();
    gallery.innerHTML = '';
    loadMore.classList.add('load-more-hidden');
    return;
  }
  const images = response.hits;
  console.log('response', response);
  const galleryFilling = render.getImagesHtml(images);

  //   gallery.innerHTML = galleryFilling;

  if (loadMoreBtn) {
    gallery.innerHTML += galleryFilling;
  } else {
    gallery.innerHTML = galleryFilling;
  }

  if (gallery.children.length < response.totalHits) {
    loadMore.classList.remove('load-more-hidden');
  } else {
    loadMore.classList.add('load-more-hidden');
    render.showEndOfResults();
  }

  render.lightbox.refresh();
}

loadMore.addEventListener('click', onLoadMore);

async function onLoadMore() {
  page += 1;
  const query = form.elements.searchInput.value.trim();

  toggleLoadMoreAndLoader();

  try {
    const response = await api.sendRequest(query, page, perPage);
    handleResponse(response, true);
    smoothScroll();
  } catch (error) {
    console.error('error:', error);
  } finally {
    toggleLoadMoreAndLoader();
  }
}

function toggleLoadMoreAndLoader() {
  loadMore.classList.toggle('hidden');
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
