import SimpleLightbox from 'simplelightbox';

let lightbox;

export const createGalleryMarkup = ({
  webformatURL: smallIMG,
  largeImageURL: largeIMG,
  tags: alt,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeIMG}">
        <img
          class="gallery-image"
          src="${smallIMG}"
          alt="${alt}"
          loading="lazy"
        />
      </a>
      <ul class="description-list">
        <li class="description"><span>Likes:</span> ${likes}</li>
        <li class="description"><span>Views:</span> ${views}</li>
        <li class="description"><span>Comments:</span> ${comments}</li>
        <li class="description"><span>Downloads:</span> ${downloads}</li>
      </ul>
    </li>`;
};

export const createLightBox = () => {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionDelay: 250,
      captionsData: 'alt',
    });
  } else {
    lightbox.refresh();
  }
};
