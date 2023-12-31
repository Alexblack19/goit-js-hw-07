import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryListEl = document.querySelector('.gallery');
const galleryMarkup = createImgGalleryMarkup(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createImgGalleryMarkup(galleryImjArr) {
    return galleryImjArr
        .map(({ original, preview, description }) => {
            return `<li class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img
                                class="gallery__image"
                                src="${preview}"
                                alt="${description}"
                            />
                        </a>
                    </li>`;
        })
        .join('');
}

const galleryLightbox = new SimpleLightbox('.gallery__item .gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
});
