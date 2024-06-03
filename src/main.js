import * as api from './js/pixabay-api';
import * as render from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

const perPage = 15;

let page;
let query;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  if (query === '') {
    render.showInputNotFound();
    return;
  }
  query = e.target.elements.searchInput.value.trim();

  page = 1; // reset to first page
  gallery.innerHTML = '';

  render.hideLoadMoreBtn();

  render.showLoader();
  
  api.sendRequest(query, handleResponse, handleError, page, perPage);
});

function onLoadMore() {
  page++;

  render.hideLoadMoreBtn();

  render.showLoader();
 
  api.sendRequest(query, handleResponse, handleError, page, perPage);
  
  render.smoothScroll();
}

function handleResponse(response) {
  console.log('response', response);

  if (!response || response.totalHits === 0) {
    render.hideLoader();
    render.showAlertNotFound();
    gallery.innerHTML = '';
    return;
  }
  
  const totalPages = Math.ceil(response.totalHits / perPage);
  
  const images = response.hits;
  const galleryFilling = render.getImagesHtml(images);

  render.hideLoader();
  gallery.innerHTML += galleryFilling;
  
  if (totalPages > page) {
    render.showLoadMoreBtn();
  } else {
    render.showAlertEndOfSearchResults();
  }

  render.lightbox.refresh();
}

function handleError(error) {
  console.log('error:', error);
}
