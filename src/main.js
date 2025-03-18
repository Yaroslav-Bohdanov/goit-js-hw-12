import iziToast from 'izitoast';
import { getImages } from './js/pixabay-api';
import { createGalleryMarkup, createLightBox } from './js/render-functions';

const elements = {
  searchForm: document.querySelector('.form'),
  imageGallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let searchQuery = '';
let page = 1;
const PER_PAGE = 15;
let totalHits = 0;

const displayLoader = () => elements.loader.classList.remove('is-hidden');
const removeLoader = () => elements.loader.classList.add('is-hidden');
const showLoadMore = () => elements.loadMoreBtn.classList.remove('is-hidden');
const hideLoadMore = () => elements.loadMoreBtn.classList.add('is-hidden');

const showErrorToast = message => {
  iziToast.error({
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    position: 'topRight',
    message,
    timeout: 5000,
  });
};

const updateGallery = hits => {
  elements.imageGallery.insertAdjacentHTML(
    'beforeend',
    hits.map(createGalleryMarkup).join('')
  );
  createLightBox();
};

const scrollToNewImages = () => {
  const lastItem = elements.imageGallery.lastElementChild;
  if (lastItem) {
    lastItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
};

const handleSearchSubmit = async event => {
  event.preventDefault();
  searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (searchQuery === '') {
    showErrorToast('Please enter a search query!');
    return;
  }

  page = 1;
  elements.imageGallery.innerHTML = '';
  hideLoadMore();
  displayLoader();

  try {
    const { hits, totalHits: fetchedTotalHits } = await getImages(
      searchQuery,
      page
    );
    totalHits = fetchedTotalHits;

    if (hits.length === 0) {
      showErrorToast('No images found. Please try another search.');
      return;
    }

    updateGallery(hits);

    if (totalHits > PER_PAGE) {
      showLoadMore();
      elements.loadMoreBtn.addEventListener('click', handleLoadMore);
    }
  } catch (error) {
    showErrorToast(
      error.message || 'Something went wrong. Please try again later.'
    );
  } finally {
    removeLoader();
    elements.searchForm.reset();
  }
};

const handleLoadMore = async () => {
  hideLoadMore();
  page += 1;
  displayLoader();

  try {
    const { hits } = await getImages(searchQuery, page);
    updateGallery(hits);
    scrollToNewImages();

    if (page < Math.ceil(totalHits / PER_PAGE)) {
      showLoadMore();
    } else {
      elements.loadMoreBtn.removeEventListener('click', handleLoadMore);
      showErrorToast(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    showErrorToast(
      error.message || 'Something went wrong. Please try again later.'
    );
  } finally {
    removeLoader();
  }
};

elements.searchForm.addEventListener('submit', handleSearchSubmit);
